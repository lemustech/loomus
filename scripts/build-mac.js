/**
 * Loomus Studio - macOS Native App & DMG Packager
 * Empaqueta Loomus como una aplicación nativa de macOS (.app) y genera el instalador .dmg
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const BUILD_DIR = path.join(ROOT_DIR, 'build');
const APP_NAME = 'Loomus Studio';
const BUNDLE_ID = 'com.luislemus.loomus';

// Directorio temporal libre de metadatos de FileProvider/iCloud
const TMP_STAGE_DIR = path.join(os.tmpdir(), `loomus-build-${Date.now()}`);
const STAGE_APP_PATH = path.join(TMP_STAGE_DIR, `${APP_NAME}.app`);
const STAGE_DMG_PATH = path.join(TMP_STAGE_DIR, `${APP_NAME}-arm64.dmg`);
const ELECTRON_DIST_APP = path.join(ROOT_DIR, 'node_modules/electron/dist/Electron.app');

function run(cmd, desc) {
  console.log(`\n⏳ ${desc}...`);
  try {
    const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8' });
    if (out && out.trim()) console.log(out.trim());
    console.log(`✅ ${desc} completado.`);
  } catch (err) {
    console.error(`❌ Error en: ${desc}`);
    if (err.stdout) console.error(err.stdout);
    if (err.stderr) console.error(err.stderr);
    throw err;
  }
}

async function buildMacApp() {
  console.log('========================================================');
  console.log('🚀 Compilación Nativa Loomus Studio para macOS (arm64)');
  console.log('========================================================');

  // 1. Validar prerrequisitos
  if (!fs.existsSync(ELECTRON_DIST_APP)) {
    throw new Error(`Falta el binario base de Electron en: ${ELECTRON_DIST_APP}`);
  }
  const icnsPath = path.join(BUILD_DIR, 'icon.icns');
  if (!fs.existsSync(icnsPath)) {
    throw new Error(`Falta el ícono compilado: ${icnsPath}`);
  }
  const entitlementsPath = path.join(BUILD_DIR, 'entitlements.mac.plist');
  if (!fs.existsSync(entitlementsPath)) {
    throw new Error(`Falta el archivo de entitlements: ${entitlementsPath}`);
  }

  // 2. Preparar carpetas
  if (fs.existsSync(TMP_STAGE_DIR)) {
    fs.rmSync(TMP_STAGE_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(TMP_STAGE_DIR, { recursive: true });

  if (fs.existsSync(DIST_DIR)) {
    console.log('🧹 Limpiando directorio dist previo...');
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 3. Clonar la estructura .app de Electron al área de ensamblado
  run(`cp -R -p "${ELECTRON_DIST_APP}" "${STAGE_APP_PATH}"`, 'Copiando runtime base');

  const contentsDir = path.join(STAGE_APP_PATH, 'Contents');
  const resourcesDir = path.join(contentsDir, 'Resources');
  const macOSDir = path.join(contentsDir, 'MacOS');
  const infoPlistPath = path.join(contentsDir, 'Info.plist');

  // 4. Inyectar código de Loomus en Contents/Resources/app
  const appDestination = path.join(resourcesDir, 'app');
  fs.mkdirSync(appDestination, { recursive: true });

  const defaultAsar = path.join(resourcesDir, 'default_app.asar');
  if (fs.existsSync(defaultAsar)) {
    fs.unlinkSync(defaultAsar);
    console.log('🗑️  default_app.asar genérico removido.');
  }

  run(`cp "${path.join(ROOT_DIR, 'package.json')}" "${appDestination}/"`, 'Copiando package.json');
  run(`cp -R "${path.join(ROOT_DIR, 'src')}" "${appDestination}/"`, 'Copiando directorio src');

  // 5. Configurar el ícono oficial de Loomus
  fs.copyFileSync(icnsPath, path.join(resourcesDir, 'electron.icns'));
  fs.copyFileSync(icnsPath, path.join(resourcesDir, 'icon.icns'));
  console.log('🎨 Ícono oficial inyectado.');

  // 6. Renombrar ejecutable a "Loomus Studio"
  const oldExecutable = path.join(macOSDir, 'Electron');
  const newExecutable = path.join(macOSDir, APP_NAME);
  if (fs.existsSync(oldExecutable)) {
    fs.renameSync(oldExecutable, newExecutable);
    console.log(`⚙️  Ejecutable renombrado a "${APP_NAME}".`);
  }

  // 7. Modificar Info.plist
  console.log('📝 Configurando metadatos de Info.plist...');
  const plistModifications = [
    `-replace CFBundleDisplayName -string "${APP_NAME}"`,
    `-replace CFBundleName -string "${APP_NAME}"`,
    `-replace CFBundleExecutable -string "${APP_NAME}"`,
    `-replace CFBundleIdentifier -string "${BUNDLE_ID}"`,
    `-replace CFBundleIconFile -string "icon.icns"`,
    `-replace CFBundleShortVersionString -string "1.1.0"`,
    `-replace CFBundleVersion -string "1.1.0"`,
    `-replace LSApplicationCategoryType -string "public.app-category.video"`,
    `-replace NSHumanReadableCopyright -string "Copyright © 2026 Luis Lemus (@Llemus43). Todos los derechos reservados."`,
    `-replace NSCameraUsageDescription -string "Loomus requiere acceso a la cámara web para proyectar tu burbuja de video en las grabaciones."`,
    `-replace NSMicrophoneUsageDescription -string "Loomus requiere acceso al micrófono para capturar tu narración en alta fidelidad."`,
    `-replace NSScreenCaptureUsageDescription -string "Loomus requiere permiso de grabación de pantalla para capturar tu escritorio y ventanas activas."`,
    `-replace LSMinimumSystemVersion -string "13.0"`
  ];

  for (const mod of plistModifications) {
    execSync(`plutil ${mod} "${infoPlistPath}"`);
  }

  try {
    execSync(`plutil -remove ElectronAsarIntegrity "${infoPlistPath}" 2>/dev/null`);
  } catch (e) {
    // ignorar si no existe
  }

  // 8. Limpiar archivos ._ y atributos extendidos antes de la firma
  run(`dot_clean -m "${STAGE_APP_PATH}"`, 'Purgando archivos residuales AppleDouble');
  run(`xattr -cr "${STAGE_APP_PATH}"`, 'Eliminando atributos extendidos de Finder');

  // 9. Firma de código con Entitlements de hardware
  run(
    `codesign --force --deep --sign - --entitlements "${entitlementsPath}" "${STAGE_APP_PATH}"`,
    'Aplicando firma ad-hoc con Entitlements'
  );

  run(`codesign --verify --deep --strict --verbose=1 "${STAGE_APP_PATH}"`, 'Verificando firma de código');

  // 10. Generar DMG instalador con diseño personalizado
  console.log('\n📦 Empaquetando instalador DMG con diseño de Loomus...');
  const dmgStageDir = path.join(TMP_STAGE_DIR, 'dmg-root');
  fs.mkdirSync(dmgStageDir, { recursive: true });

  run(`cp -R -p "${STAGE_APP_PATH}" "${dmgStageDir}/"`, 'Copiando app al staging del DMG');
  run(`ln -s /Applications "${dmgStageDir}/Applications"`, 'Generando acceso directo a /Applications');

  // Fondo personalizado y volumen del DMG
  const dmgBgPath = path.join(BUILD_DIR, 'dmg-background.png');
  if (fs.existsSync(dmgBgPath)) {
    const bgDir = path.join(dmgStageDir, '.background');
    fs.mkdirSync(bgDir, { recursive: true });
    fs.copyFileSync(dmgBgPath, path.join(bgDir, 'background.png'));
    console.log('🎨 Fondo de instalación con diseño Loomus inyectado.');
  }

  // Ícono de volumen personalizado para el disco
  if (fs.existsSync(icnsPath)) {
    fs.copyFileSync(icnsPath, path.join(dmgStageDir, '.VolumeIcon.icns'));
    try {
      execSync(`/usr/bin/SetFile -a C "${dmgStageDir}"`);
      console.log('📀 Ícono oficial asignado al volumen del DMG.');
    } catch {
      // Ignorar si SetFile no está disponible
    }
  }

  // Archivo de instrucciones rápidas dentro del disco
  const readmePath = path.join(dmgStageDir, 'Instalacion Rapida.txt');
  fs.writeFileSync(
    readmePath,
    '🟣 Loomus Studio v1.1.0 para macOS (Apple Silicon)\n' +
    '===================================================\n\n' +
    '1. Arrastra el icono "Loomus Studio.app" hacia la carpeta "Applications" (a la derecha).\n' +
    '2. ¡Listo! Ya puedes abrirla desde tu Launchpad o Spotlight.\n\n' +
    'Autor: Luis Lemus (@Llemus43)\n' +
    '100% Local-First • Cero Nube • Privacidad Total\n'
  );

  run(
    `hdiutil create -volname "${APP_NAME}" -srcfolder "${dmgStageDir}" -ov -format UDZO "${STAGE_DMG_PATH}"`,
    'Creando archivo DMG comprimido (UDZO) con diseño de Loomus'
  );

  // 11. Publicar resultados en dist/
  console.log('\n🚚 Moviendo entregables a la carpeta dist/ del proyecto...');
  const finalAppPath = path.join(DIST_DIR, `${APP_NAME}.app`);
  const finalDmgPath = path.join(DIST_DIR, `${APP_NAME}-arm64.dmg`);

  run(`cp -R -p "${STAGE_APP_PATH}" "${finalAppPath}"`, 'Publicando Loomus Studio.app');
  run(`cp "${STAGE_DMG_PATH}" "${finalDmgPath}"`, 'Publicando instalador DMG');

  // Limpiar temporales
  fs.rmSync(TMP_STAGE_DIR, { recursive: true, force: true });
  if (fs.existsSync('/tmp/TestApp.app')) {
    fs.rmSync('/tmp/TestApp.app', { recursive: true, force: true });
  }

  console.log('\n========================================================');
  console.log('🎉 ¡COMPILACIÓN Y EMPAQUETADO COMPLETADOS CON ÉXITO!');
  console.log(`📁 Aplicación macOS: ${finalAppPath}`);
  console.log(`📀 Instalador DMG:  ${finalDmgPath}`);
  console.log('========================================================\n');
}

buildMacApp().catch((err) => {
  console.error('\n💥 La compilación falló:', err.message);
  process.exit(1);
});
