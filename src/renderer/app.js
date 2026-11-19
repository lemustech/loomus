/**
 * Loomus Studio - Desktop Screen & Camera Recorder
 * 100% Original Implementation
 */

// ========================
// 1. I18N DICTIONARY
// ========================
const i18n = {
  es: {
    appSubtitle: 'Studio de Grabación Lumos Maxima',
    langAuto: 'Auto (Sistema)',
    sourceSectionTitle: '¿Qué deseas grabar?',
    tabScreens: 'Pantallas',
    tabWindows: 'Ventanas',
    loadingSources: 'Cargando fuentes disponibles...',
    selectedSource: 'Seleccionado:',
    devicesSectionTitle: 'Cámara, Micrófono y Burbuja',
    cameraTitle: 'Cámara en Círculo',
    cameraDesc: 'Burbuja flotante redimensionable',
    cameraDeviceLabel: 'Dispositivo:',
    bubbleSizeLabel: 'Tamaño:',
    bubbleBorderLabel: 'Estilo:',
    borderPurple: 'Púrpura Neón',
    borderGold: 'Oro Rosado',
    borderCyan: 'Cian Cyber',
    borderMinimal: 'Minimal Blanco',
    cameraMirrorLabel: 'Efecto espejo horizontal',
    btnShowBubble: 'Ver burbuja flotante',
    btnHideBubble: 'Ocultar burbuja flotante',
    micTitle: 'Micrófono & Audio',
    micDesc: 'Voz clara sincronizada',
    micDeviceLabel: 'Dispositivo:',
    micLevelLabel: 'Nivel de voz:',
    monitorTitle: 'Vista previa en tiempo real',
    selectSourcePrompt: 'Selecciona una pantalla o ventana para comenzar',
    btnStartRecording: 'Iniciar Grabación',
    recCountdownHint: 'Cuenta atrás de 3s antes de grabar',
    btnPause: 'Pausar',
    btnResume: 'Reanudar',
    btnStop: 'Finalizar',
    countdownPrep: '¡Prepárate para grabar!',
    reviewTitle: 'Grabación Completada',
    btnDiscard: 'Descartar y Nueva Toma',
    btnSaveLocal: 'Guardar Vídeo Localmente',
    btnOpenFolder: 'Mostrar en carpeta',
    savedSuccess: '✓ Vídeo guardado con éxito en tu equipo',
    durationLabel: 'Duración:',
    sizeLabel: 'Tamaño:',
    recordingStatus: 'Grabando',
    pausedStatus: 'En pausa',
    editorBadge: 'Loomus Studio Editor',
    bgThemeLabel: 'Fondo del Lienzo (Estilo Studio)',
    btnExportMagic: 'Exportar con Lumos Maxima',
    btnSaveRaw: 'Guardar Original',
    processingVideo: '✨ Procesando video con efectos y animaciones...',
    savedEditedSuccess: '✓ Vídeo editado y exportado con éxito',
    tabCanvas: '🎨 Fondo',
    tabEffects: '✨ Efectos',
    tabIntro: '🏷️ Intro',
    paddingLabel: 'Margen / Padding',
    radiusLabel: 'Bordes Redondeados',
    shadowLabel: 'Sombra & Elevación 3D',
    ratioLabel: 'Formato de Exportación',
    zoomTitle: 'Zoom Dinámico Central',
    zoomDesc: 'Enfoca suavemente el centro de la pantalla',
    glowTitle: 'Resaltador de Cursor',
    glowDesc: 'Halo brillante animado para guiar la vista',
    filterLabel: 'Graduación de Color',
    introTitle: 'Placa de Intro Animada',
    introDesc: 'Aparece durante los primeros segundos',
    introDemoTitleLabel: 'Título de la Demostración',
    introDemoSubtitleLabel: 'Subtítulo o Autor',
    introAvatarLabel: 'Icono o Avatar',
    introDurationLabel: 'Duración de la Placa',
    chromaBorderLabel: 'Borde animado multicolor',
    teleprompterTitle: 'Teleprompter Invisible',
    teleprompterDesc: 'Visible para ti, oculto en el video grabado',
    btnOpenTeleprompter: 'Abrir Teleprompter',
    dockTeleprompter: 'Guion',
    deviceFrameLabel: 'Marco Apple / Mockup',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'Ventana macOS',
    frameGlass: 'Vidrio Studio',
    frameNose: 'Sin Marco',
    tiltLabel: 'Inclinación 3D (Keynote)',
    tiltNone: 'Plano 0°',
    tiltLeft: 'Giro Izq -6°',
    tiltRight: 'Giro Der +6°',
    tiltIso: 'Isométrico 3D',
    uploadBgBtn: 'Subir Fondo Propio',
    watermarkLabel: 'Marca de Agua Loomus Pro',
    watermarkDesc: 'Sello distintivo estilo Apple en la esquina'
  },
  en: {
    appSubtitle: 'Lumos Maxima Screen & Camera Studio',
    langAuto: 'Auto (System)',
    sourceSectionTitle: 'What do you want to record?',
    tabScreens: 'Screens',
    tabWindows: 'Windows',
    loadingSources: 'Loading available sources...',
    selectedSource: 'Selected:',
    devicesSectionTitle: 'Camera, Microphone & Bubble',
    cameraTitle: 'Camera Bubble',
    cameraDesc: 'Movable resizable floating bubble',
    cameraDeviceLabel: 'Device:',
    bubbleSizeLabel: 'Size:',
    bubbleBorderLabel: 'Style:',
    borderPurple: 'Neon Purple',
    borderGold: 'Rose Gold',
    borderCyan: 'Cyber Cyan',
    borderMinimal: 'Minimal White',
    cameraMirrorLabel: 'Horizontal mirror flip',
    btnShowBubble: 'Show floating bubble',
    btnHideBubble: 'Hide floating bubble',
    micTitle: 'Microphone & Audio',
    micDesc: 'Crystal clear voice sync',
    micDeviceLabel: 'Device:',
    micLevelLabel: 'Voice level:',
    monitorTitle: 'Real-time Live Preview',
    selectSourcePrompt: 'Select a screen or window to start',
    btnStartRecording: 'Start Recording',
    recCountdownHint: '3s countdown before recording starts',
    btnPause: 'Pause',
    btnResume: 'Resume',
    btnStop: 'Finish',
    countdownPrep: 'Get ready to record!',
    reviewTitle: 'Recording Finished',
    btnDiscard: 'Discard & New Take',
    btnSaveLocal: 'Save Video Locally',
    btnOpenFolder: 'Show in folder',
    savedSuccess: '✓ Video saved successfully to disk',
    durationLabel: 'Duration:',
    sizeLabel: 'Size:',
    recordingStatus: 'Recording',
    pausedStatus: 'Paused',
    editorBadge: 'Loomus Studio Editor',
    bgThemeLabel: 'Canvas Background (Studio Style)',
    btnExportMagic: 'Export with Lumos Maxima',
    btnSaveRaw: 'Save Raw Original',
    processingVideo: '✨ Processing video with effects & animations...',
    savedEditedSuccess: '✓ Video edited and exported successfully',
    tabCanvas: '🎨 Canvas',
    tabEffects: '✨ Effects',
    tabIntro: '🏷️ Intro',
    paddingLabel: 'Margin / Padding',
    radiusLabel: 'Rounded Corners',
    shadowLabel: '3D Shadow & Glow',
    ratioLabel: 'Export Aspect Ratio',
    zoomTitle: 'Central Dynamic Zoom',
    zoomDesc: 'Smoothly focuses screen center',
    glowTitle: 'Cursor Glow',
    glowDesc: 'Animated highlight halo around mouse',
    filterLabel: 'Color Grading',
    introTitle: 'Animated Intro Card',
    introDesc: 'Appears during the first seconds',
    introDemoTitleLabel: 'Demo Video Title',
    introDemoSubtitleLabel: 'Subtitle or Author',
    introAvatarLabel: 'Icon or Avatar',
    introDurationLabel: 'Intro Duration',
    chromaBorderLabel: 'Animated Chroma Border',
    teleprompterTitle: 'Invisible Teleprompter',
    teleprompterDesc: 'Visible to you, hidden from recorded video',
    btnOpenTeleprompter: 'Open Teleprompter',
    dockTeleprompter: 'Script',
    deviceFrameLabel: 'Apple Mockup Frame',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'macOS Window',
    frameGlass: 'Studio Glass',
    frameNose: 'Frameless',
    tiltLabel: '3D Tilt (Keynote Style)',
    tiltNone: 'Flat 0°',
    tiltLeft: 'Tilt Left -6°',
    tiltRight: 'Tilt Right +6°',
    tiltIso: '3D Isometric',
    uploadBgBtn: 'Upload Custom Background',
    watermarkLabel: 'Loomus Pro Watermark',
    watermarkDesc: 'Apple-style watermark badge in corner'
  },
  hi: {
    appSubtitle: 'प्रभावों के साथ स्क्रीन और कैमरा रिकॉर्डर',
    langAuto: 'स्वचालित (सिस्टम)',
    sourceSectionTitle: 'आप क्या रिकॉर्ड करना चाहते हैं?',
    tabScreens: 'स्क्रीन',
    tabWindows: 'विंडोज़',
    loadingSources: 'उपलब्ध स्रोत लोड हो रहे हैं...',
    selectedSource: 'चयनित:',
    devicesSectionTitle: 'कैमरा, माइक्रोफ़ोन और बबल',
    cameraTitle: 'सर्कल में कैमरा',
    cameraDesc: 'आकार बदलने योग्य फ़्लोटिंग बबल',
    cameraDeviceLabel: 'उपकरण:',
    bubbleSizeLabel: 'आकार:',
    bubbleBorderLabel: 'शैली:',
    borderPurple: 'नियॉन पर्पल',
    borderGold: 'रोज़ गोल्ड',
    borderCyan: 'साइबर सियान',
    borderMinimal: 'न्यूनतम सफेद',
    cameraMirrorLabel: 'क्षैतिज दर्पण प्रभाव',
    btnShowBubble: 'फ़्लोटिंग बबल दिखाएं',
    btnHideBubble: 'फ़्लोटिंग बबल छिपाएं',
    micTitle: 'माइक्रोफ़ोन और ऑडियो',
    micDesc: 'स्पष्ट समन्वयित आवाज़',
    micDeviceLabel: 'उपकरण:',
    micLevelLabel: 'आवाज़ का स्तर:',
    monitorTitle: 'रीयल-टाइम पूर्वावलोकन',
    selectSourcePrompt: 'शुरू करने के लिए एक स्क्रीन या विंडो चुनें',
    btnStartRecording: 'रिकॉर्डिंग शुरू करें',
    recCountdownHint: 'रिकॉर्डिंग से पहले 3 सेकंड की उल्टी गिनती',
    btnPause: 'रोकें (Pause)',
    btnResume: 'फिर शुरू करें',
    btnStop: 'समाप्त करें',
    countdownPrep: 'रिकॉर्डिंग के लिए तैयार हो जाइए!',
    reviewTitle: 'रिकॉर्डिंग समाप्त',
    btnDiscard: 'खारिज करें और नया टेक लें',
    btnSaveLocal: 'वीडियो स्थानीय रूप से सहेजें',
    btnOpenFolder: 'फ़ोल्डर में दिखाएं',
    savedSuccess: '✓ वीडियो डिस्क पर सफलतापूर्वक सहेजा गया',
    durationLabel: 'अवधि:',
    sizeLabel: 'आकार:',
    recordingStatus: 'रिकॉर्डिंग जारी है',
    pausedStatus: 'रोक दिया गया',
    editorBadge: 'Loomus स्टूडियो संपादक',
    bgThemeLabel: 'कैनवास पृष्ठभूमि (Studio स्टाइल)',
    btnExportMagic: 'Studio प्रभाव के साथ निर्यात करें',
    btnSaveRaw: 'मूल वीडियो सहेजें',
    processingVideo: '✨ प्रभावों और एनिमेशन के साथ वीडियो प्रोसेस हो रहा है...',
    savedEditedSuccess: '✓ संपादित वीडियो सफलतापूर्वक निर्यात किया गया',
    tabCanvas: '🎨 पृष्ठभूमि',
    tabEffects: '✨ प्रभाव',
    tabIntro: '🏷️ परिचय',
    paddingLabel: 'मार्जिन / पैडिंग',
    radiusLabel: 'गोल कोने',
    shadowLabel: 'छाया और 3D उभार',
    ratioLabel: 'निर्यात प्रारूप',
    zoomTitle: 'केंद्रीय गतिशील ज़ूम',
    zoomDesc: 'स्क्रीन के केंद्र पर आसानी से ध्यान केंद्रित करें',
    glowTitle: 'कर्सर हाइलाइटर',
    glowDesc: 'दृष्टि का मार्गदर्शन करने के लिए चमकदार प्रभामंडल',
    filterLabel: 'रंग ग्रेडिंग',
    introTitle: 'एनिमेटेड परिचय कार्ड',
    introDesc: 'पहले कुछ सेकंड के दौरान दिखाई देता है',
    introDemoTitleLabel: 'डेमो का शीर्षक',
    introDemoSubtitleLabel: 'उपशीर्षक या लेखक',
    introAvatarLabel: 'आइकन या अवतार',
    introDurationLabel: 'कार्ड की अवधि',
    chromaBorderLabel: 'एनिमेटेड बहुरंगी बॉर्डर',
    teleprompterTitle: 'अदृश्य टेलीप्रॉम्प्टर',
    teleprompterDesc: 'आपके लिए दृश्यमान, वीडियो में छिपा हुआ',
    btnOpenTeleprompter: 'टेलीप्रॉम्प्टर खोलें',
    dockTeleprompter: 'स्क्रिप्ट',
    deviceFrameLabel: 'ऐप्पल मॉकअप फ़्रेम',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'macOS विंडो',
    frameGlass: 'स्टूडियो ग्लास',
    frameNose: 'फ़्रेमलेस',
    tiltLabel: '3D झुकाव (कीनोट शैली)',
    tiltNone: 'सपाट 0°',
    tiltLeft: 'बाएं झुकाव -6°',
    tiltRight: 'दाएं झुकाव +6°',
    tiltIso: '3D आइसोमेट्रिक',
    uploadBgBtn: 'कस्टम पृष्ठभूमि अपलोड करें',
    watermarkLabel: 'Loomus प्रो वॉटरमार्क',
    watermarkDesc: 'कोने में ऐप्पल-शैली वॉटरमार्क बैज'
  },
  he: {
    appSubtitle: 'מקליט מסך ומצלמה עם אפקטים מונפשים',
    langAuto: 'אוטומטי (מערכת)',
    sourceSectionTitle: 'מה ברצונך להקליט?',
    tabScreens: 'מסכים',
    tabWindows: 'חלונות',
    loadingSources: 'טוען מקורות זמינים...',
    selectedSource: 'נבחר:',
    devicesSectionTitle: 'מצלמה, מיקרופון ובועת וידאו',
    cameraTitle: 'מצלמה בעיגול',
    cameraDesc: 'בועה צפה הניתנת לשינוי גודל ומיקום',
    cameraDeviceLabel: 'התקן:',
    bubbleSizeLabel: 'גודל:',
    bubbleBorderLabel: 'סגנון:',
    borderPurple: 'סגול ניאון',
    borderGold: 'זהב ורוד',
    borderCyan: 'טורקיז סייבר',
    borderMinimal: 'לבן נקי',
    cameraMirrorLabel: 'שיקוף מראה אופקי',
    btnShowBubble: 'הצג בועה צפה',
    btnHideBubble: 'הסתר בועה צפה',
    micTitle: 'מיקרופון ושמע',
    micDesc: 'סנכרון קול צלול ואיכותי',
    micDeviceLabel: 'התקן:',
    micLevelLabel: 'עוצמת קול:',
    monitorTitle: 'תצוגה מקדימה בזמן אמת',
    selectSourcePrompt: 'בחר מסך או חלון כדי להתחיל',
    btnStartRecording: 'התחל הקלטה',
    recCountdownHint: 'ספירה לאחור של 3 שניות לפני תחילת ההקלטה',
    btnPause: 'השהה',
    btnResume: 'המשך',
    btnStop: 'סיים הקלטה',
    countdownPrep: 'היכונו להקלטה!',
    reviewTitle: 'ההקלטה הושלמה',
    btnDiscard: 'מחק והתחל מחדש',
    btnSaveLocal: 'שמור וידאו במחשב',
    btnOpenFolder: 'הצג בתיקייה',
    savedSuccess: '✓ הווידאו נשמר בהצלחה בדיסק',
    durationLabel: 'משך:',
    sizeLabel: 'גודל:',
    recordingStatus: 'מקליט כעת',
    pausedStatus: 'מושהה',
    editorBadge: 'עורך האולפן של Loomus',
    bgThemeLabel: 'רקע קנבס (סגנון סטודיו)',
    btnExportMagic: 'ייצא עם אפקטים של סטודיו',
    btnSaveRaw: 'שמור מקורי ללא עריכה',
    processingVideo: '✨ מעבד את הסרטון עם אפקטים והנפשות...',
    savedEditedSuccess: '✓ הסרטון הערוך יוצא בהצלחה',
    tabCanvas: '🎨 רקע',
    tabEffects: '✨ אפקטים',
    tabIntro: '🏷️ פתיח',
    paddingLabel: 'שוליים / ריווח',
    radiusLabel: 'פינות מעוגלות',
    shadowLabel: 'צל ותלת-ממד',
    ratioLabel: 'יחס תצוגה לייצוא',
    zoomTitle: 'זום דיגיטלי ממוקד',
    zoomDesc: 'התמקדות חלקה במרכז המסך',
    glowTitle: 'הדגשת סמן העכבר',
    glowDesc: 'הילה זוהרת המנחה את המבט',
    filterLabel: 'דירוג צבעים',
    introTitle: 'כרטיס פתיח מונפש',
    introDesc: 'מופיע במהלך השניות הראשונות של הסרטון',
    introDemoTitleLabel: 'כותרת ההדגמה',
    introDemoSubtitleLabel: 'כותרת משנה או מחבר',
    introAvatarLabel: 'אייקון או אווטאר',
    introDurationLabel: 'משך הצגת הפתיח',
    chromaBorderLabel: 'מסגרת צבעונית מונפשת',
    teleprompterTitle: 'טלפרומפטר בלתי נראה',
    teleprompterDesc: 'גלוי עבורך, מוסתר בסרטון המוקלט',
    btnOpenTeleprompter: 'פתח טלפרומפטר',
    dockTeleprompter: 'תסריט',
    deviceFrameLabel: 'מסגרת מוקאפ אפל',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'חלון macOS',
    frameGlass: 'זכוכית סטודיו',
    frameNose: 'ללא מסגרת',
    tiltLabel: 'הטיה תלת-ממדית (סגנון Keynote)',
    tiltNone: 'ישר 0°',
    tiltLeft: 'שמאל -6°',
    tiltRight: 'ימין +6°',
    tiltIso: 'איזומטרי 3D',
    uploadBgBtn: 'העלה רקע מותאם אישית',
    watermarkLabel: 'סימן מים Loomus Pro',
    watermarkDesc: 'תג סימן מים אלגנטי בפינה'
  },
  pt: {
    appSubtitle: 'Gravador de Tela e Câmera com Efeitos',
    langAuto: 'Automático (Sistema)',
    sourceSectionTitle: 'O que você deseja gravar?',
    tabScreens: 'Telas',
    tabWindows: 'Janelas',
    loadingSources: 'Carregando fontes disponíveis...',
    selectedSource: 'Selecionado:',
    devicesSectionTitle: 'Câmera, Microfone e Bolha',
    cameraTitle: 'Câmera em Círculo',
    cameraDesc: 'Bolha flutuante redimensionável e móvel',
    cameraDeviceLabel: 'Dispositivo:',
    bubbleSizeLabel: 'Tamanho:',
    bubbleBorderLabel: 'Estilo:',
    borderPurple: 'Roxo Neon',
    borderGold: 'Ouro Rosa',
    borderCyan: 'Ciano Cyber',
    borderMinimal: 'Branco Minimal',
    cameraMirrorLabel: 'Efeito espelho horizontal',
    btnShowBubble: 'Mostrar bolha flutuante',
    btnHideBubble: 'Ocultar bolha flutuante',
    micTitle: 'Microfone & Áudio',
    micDesc: 'Voz limpa e sincronizada',
    micDeviceLabel: 'Dispositivo:',
    micLevelLabel: 'Nível de voz:',
    monitorTitle: 'Pré-visualização em tempo real',
    selectSourcePrompt: 'Selecione uma tela ou janela para iniciar',
    btnStartRecording: 'Iniciar Gravação',
    recCountdownHint: 'Contagem regressiva de 3s antes de gravar',
    btnPause: 'Pausar',
    btnResume: 'Retomar',
    btnStop: 'Finalizar',
    countdownPrep: 'Prepare-se para gravar!',
    reviewTitle: 'Gravação Concluída',
    btnDiscard: 'Descartar e Novo Take',
    btnSaveLocal: 'Salvar Vídeo Localmente',
    btnOpenFolder: 'Mostrar na pasta',
    savedSuccess: '✓ Vídeo salvo com sucesso no seu disco',
    durationLabel: 'Duração:',
    sizeLabel: 'Tamanho:',
    recordingStatus: 'Gravando',
    pausedStatus: 'Pausado',
    editorBadge: 'Loomus Studio Editor',
    bgThemeLabel: 'Fundo do Canvas (Estilo Studio)',
    btnExportMagic: 'Exportar com Efeitos Studio',
    btnSaveRaw: 'Salvar Original Bruto',
    processingVideo: '✨ Processando vídeo com efeitos e animações...',
    savedEditedSuccess: '✓ Vídeo editado e exportado com sucesso',
    tabCanvas: '🎨 Fundo',
    tabEffects: '✨ Efeitos',
    tabIntro: '🏷️ Intro',
    paddingLabel: 'Margem / Padding',
    radiusLabel: 'Bordas Arredondadas',
    shadowLabel: 'Sombra e Elevação 3D',
    ratioLabel: 'Formato de Exportação',
    zoomTitle: 'Zoom Dinâmico Central',
    zoomDesc: 'Foca suavemente no centro da tela',
    glowTitle: 'Destaque de Cursor',
    glowDesc: 'Halo brilhante animado para guiar o olhar',
    filterLabel: 'Gradação de Cor',
    introTitle: 'Cartão de Intro Animado',
    introDesc: 'Aparece durante os primeiros segundos',
    introDemoTitleLabel: 'Título da Demonstração',
    introDemoSubtitleLabel: 'Subtítulo ou Autor',
    introAvatarLabel: 'Ícone ou Avatar',
    introDurationLabel: 'Duração do Cartão',
    chromaBorderLabel: 'Borda animada multicolorida',
    teleprompterTitle: 'Teleprompter Invisível',
    teleprompterDesc: 'Visível para você, oculto no vídeo gravado',
    btnOpenTeleprompter: 'Abrir Teleprompter',
    dockTeleprompter: 'Roteiro',
    deviceFrameLabel: 'Moldura Apple / Mockup',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'Janela macOS',
    frameGlass: 'Vidrio Studio',
    frameNose: 'Sem Moldura',
    tiltLabel: 'Inclinação 3D (Estilo Keynote)',
    tiltNone: 'Plano 0°',
    tiltLeft: 'Girar Esq -6°',
    tiltRight: 'Girar Dir +6°',
    tiltIso: 'Isométrico 3D',
    uploadBgBtn: 'Enviar Fundo Próprio',
    watermarkLabel: 'Marca d\'água Loomus Pro',
    watermarkDesc: 'Selo discreto estilo Apple no canto'
  },
  fr: {
    appSubtitle: "Enregistreur d'Écran et Caméra avec Effets",
    langAuto: 'Auto (Système)',
    sourceSectionTitle: 'Que souhaitez-vous enregistrer ?',
    tabScreens: 'Écrans',
    tabWindows: 'Fenêtres',
    loadingSources: 'Chargement des sources...',
    selectedSource: 'Sélectionné :',
    devicesSectionTitle: 'Caméra, Microphone et Bulle',
    cameraTitle: 'Caméra en Cercle',
    cameraDesc: 'Bulle flottante redimensionnable et mobile',
    cameraDeviceLabel: 'Périphérique :',
    bubbleSizeLabel: 'Taille :',
    bubbleBorderLabel: 'Style :',
    borderPurple: 'Violet Néon',
    borderGold: 'Or Rose',
    borderCyan: 'Cyber Cyan',
    borderMinimal: 'Blanc Minimal',
    cameraMirrorLabel: 'Effet miroir horizontal',
    btnShowBubble: 'Afficher la bulle flottante',
    btnHideBubble: 'Masquer la bulle flottante',
    micTitle: 'Microphone & Audio',
    micDesc: 'Voix claire et synchronisée',
    micDeviceLabel: 'Périphérique :',
    micLevelLabel: 'Niveau vocal :',
    monitorTitle: 'Aperçu en direct',
    selectSourcePrompt: 'Sélectionnez un écran ou une fenêtre pour commencer',
    btnStartRecording: "Démarrer l'enregistrement",
    recCountdownHint: 'Compte à rebours de 3s avant enregistrement',
    btnPause: 'Pause',
    btnResume: 'Reprendre',
    btnStop: 'Terminer',
    countdownPrep: "Préparez-vous à enregistrer !",
    reviewTitle: 'Enregistrement terminé',
    btnDiscard: 'Supprimer et recommencer',
    btnSaveLocal: 'Enregistrer la vidéo localement',
    btnOpenFolder: 'Afficher dans le dossier',
    savedSuccess: '✓ Vidéo enregistrée avec succès sur le disque',
    durationLabel: 'Durée :',
    sizeLabel: 'Taille :',
    recordingStatus: 'Enregistrement en cours',
    pausedStatus: 'En pause',
    editorBadge: 'Loomus Studio Editor',
    bgThemeLabel: 'Arrière-plan Canvas (Style Studio)',
    btnExportMagic: 'Exporter avec Effets Studio',
    btnSaveRaw: 'Enregistrer Original Brut',
    processingVideo: '✨ Traitement de la vidéo avec effets et animations...',
    savedEditedSuccess: '✓ Vidéo éditée et exportée avec succès',
    tabCanvas: '🎨 Fond',
    tabEffects: '✨ Effets',
    tabIntro: '🏷️ Intro',
    paddingLabel: 'Marge / Padding',
    radiusLabel: 'Coins arrondis',
    shadowLabel: 'Ombre et Élévation 3D',
    ratioLabel: "Format d'exportation",
    zoomTitle: 'Zoom Dynamique Central',
    zoomDesc: "Focalise en douceur sur le centre de l'écran",
    glowTitle: 'Curseur Lumineux',
    glowDesc: 'Halo lumineux pour guider le regard',
    filterLabel: 'Étalonnage des couleurs',
    introTitle: 'Carte Intro Animée',
    introDesc: 'Apparaît pendant les premières secondes',
    introDemoTitleLabel: 'Titre de la démo',
    introDemoSubtitleLabel: 'Sous-titre ou Auteur',
    introAvatarLabel: 'Icône ou Avatar',
    introDurationLabel: 'Durée de la carte',
    chromaBorderLabel: 'Bordure animée multicolore',
    teleprompterTitle: 'Téléprompteur Invisible',
    teleprompterDesc: 'Visible pour vous, invisible sur la vidéo',
    btnOpenTeleprompter: 'Ouvrir le téléprompteur',
    dockTeleprompter: 'Script',
    deviceFrameLabel: 'Cadre Mockup Apple',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'Fenêtre macOS',
    frameGlass: 'Verre Studio',
    frameNose: 'Sans Cadre',
    tiltLabel: 'Inclinaison 3D (Style Keynote)',
    tiltNone: 'Plat 0°',
    tiltLeft: 'Gauche -6°',
    tiltRight: 'Droite +6°',
    tiltIso: 'Isométrique 3D',
    uploadBgBtn: 'Importer un Arrière-plan',
    watermarkLabel: 'Filigrane Loomus Pro',
    watermarkDesc: 'Badge en verre élégant dans le coin'
  },
  de: {
    appSubtitle: 'Bildschirm- & Kamera-Recorder mit Effekten',
    langAuto: 'Auto (System)',
    sourceSectionTitle: 'Was möchten Sie aufnehmen?',
    tabScreens: 'Bildschirme',
    tabWindows: 'Fenster',
    loadingSources: 'Quellen werden geladen...',
    selectedSource: 'Ausgewählt:',
    devicesSectionTitle: 'Kamera, Mikrofon & Bubble',
    cameraTitle: 'Kamera im Kreis',
    cameraDesc: 'Verschiebbare, anpassbare schwebende Bubble',
    cameraDeviceLabel: 'Gerät:',
    bubbleSizeLabel: 'Größe:',
    bubbleBorderLabel: 'Stil:',
    borderPurple: 'Neon-Lila',
    borderGold: 'Roségold',
    borderCyan: 'Cyber-Cyan',
    borderMinimal: 'Minimal-Weiß',
    cameraMirrorLabel: 'Horizontaler Spiegeleffekt',
    btnShowBubble: 'Schwebende Bubble anzeigen',
    btnHideBubble: 'Schwebende Bubble verbergen',
    micTitle: 'Mikrofon & Audio',
    micDesc: 'Kristallklare Synchronsprache',
    micDeviceLabel: 'Gerät:',
    micLevelLabel: 'Lautstärke:',
    monitorTitle: 'Echtzeit-Live-Vorschau',
    selectSourcePrompt: 'Wählen Sie einen Bildschirm oder ein Fenster aus',
    btnStartRecording: 'Aufnahme starten',
    recCountdownHint: '3s Countdown vor Beginn',
    btnPause: 'Pause',
    btnResume: 'Fortsetzen',
    btnStop: 'Beenden',
    countdownPrep: 'Machen Sie sich bereit zur Aufnahme!',
    reviewTitle: 'Aufnahme abgeschlossen',
    btnDiscard: 'Verwerfen & Neuer Take',
    btnSaveLocal: 'Video lokal speichern',
    btnOpenFolder: 'Im Ordner anzeigen',
    savedSuccess: '✓ Video erfolgreich auf der Festplatte gespeichert',
    durationLabel: 'Dauer:',
    sizeLabel: 'Größe:',
    recordingStatus: 'Aufnahme läuft',
    pausedStatus: 'Pausiert',
    editorBadge: 'Loomus Studio Editor',
    bgThemeLabel: 'Leinwand-Hintergrund (Studio-Stil)',
    btnExportMagic: 'Mit Studio-Effekten exportieren',
    btnSaveRaw: 'Originalvideo speichern',
    processingVideo: '✨ Video wird mit Effekten und Animationen verarbeitet...',
    savedEditedSuccess: '✓ Bearbeitetes Video erfolgreich exportiert',
    tabCanvas: '🎨 Hintergrund',
    tabEffects: '✨ Effekte',
    tabIntro: '🏷️ Intro',
    paddingLabel: 'Rand / Padding',
    radiusLabel: 'Abgerundete Ecken',
    shadowLabel: '3D-Schatten & Glanz',
    ratioLabel: 'Export-Seitenverhältnis',
    zoomTitle: 'Zentraler dynamischer Zoom',
    zoomDesc: 'Sanfter Fokus auf die Bildschirmmitte',
    glowTitle: 'Cursor-Hervorhebung',
    glowDesc: 'Leuchtender Halo zur Blickführung',
    filterLabel: 'Farbkorrektur',
    introTitle: 'Animierte Intro-Karte',
    introDesc: 'Erscheint in den ersten Sekunden',
    introDemoTitleLabel: 'Demo-Titel',
    introDemoSubtitleLabel: 'Untertitel oder Autor',
    introAvatarLabel: 'Symbol oder Avatar',
    introDurationLabel: 'Intro-Dauer',
    chromaBorderLabel: 'Animierter Regenbogen-Rand',
    teleprompterTitle: 'Unsichtbarer Teleprompter',
    teleprompterDesc: 'Für Sie sichtbar, im Video verborgen',
    btnOpenTeleprompter: 'Teleprompter öffnen',
    dockTeleprompter: 'Skript',
    deviceFrameLabel: 'Apple Mockup-Rahmen',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'macOS-Fenster',
    frameGlass: 'Studio-Glas',
    frameNose: 'Rahmenlos',
    tiltLabel: '3D-Neigung (Keynote-Stil)',
    tiltNone: 'Flach 0°',
    tiltLeft: 'Links -6°',
    tiltRight: 'Rechts +6°',
    tiltIso: '3D-Isometrisch',
    uploadBgBtn: 'Eigenen Hintergrund hochladen',
    watermarkLabel: 'Loomus Pro Wasserzeichen',
    watermarkDesc: 'Elegantes Wasserzeichen im Apple-Stil'
  },
  ja: {
    appSubtitle: 'エフェクト＆アニメーション付き画面録画アプリ',
    langAuto: '自動 (システム言語)',
    sourceSectionTitle: '何を録画しますか？',
    tabScreens: '画面全体',
    tabWindows: 'ウィンドウ',
    loadingSources: '利用可能なソースを読み込み中...',
    selectedSource: '選択中:',
    devicesSectionTitle: 'カメラ・マイク・フローティングバブル',
    cameraTitle: '円形カメラバブル',
    cameraDesc: 'ドラッグ移動＆サイズ変更可能なフローティングバブル',
    cameraDeviceLabel: 'デバイス:',
    bubbleSizeLabel: 'サイズ:',
    bubbleBorderLabel: '枠線スタイル:',
    borderPurple: 'ネオンパープル',
    borderGold: 'ローズゴールド',
    borderCyan: 'サイバーシアン',
    borderMinimal: 'ミニマルホワイト',
    cameraMirrorLabel: '左右反転 (ミラー)',
    btnShowBubble: 'カメラバブルを表示',
    btnHideBubble: 'カメラバブルを非表示',
    micTitle: 'マイクと音声',
    micDesc: 'クリアで同期された音声',
    micDeviceLabel: 'デバイス:',
    micLevelLabel: '音声レベル:',
    monitorTitle: 'リアルタイムプレビュー',
    selectSourcePrompt: '録画する画面またはウィンドウを選択してください',
    btnStartRecording: '録画を開始',
    recCountdownHint: '録画開始前に3秒のカウントダウン',
    btnPause: '一時停止',
    btnResume: '再開',
    btnStop: '録画終了',
    countdownPrep: '録画の準備をしてください！',
    reviewTitle: '録画が完了しました',
    btnDiscard: '破棄して撮り直す',
    btnSaveLocal: 'ビデオを保存',
    btnOpenFolder: 'フォルダで表示',
    savedSuccess: '✓ ビデオが正常に保存されました',
    durationLabel: '時間:',
    sizeLabel: 'サイズ:',
    recordingStatus: '録画中',
    pausedStatus: '一時停止中',
    editorBadge: 'Loomus スタジオエディタ',
    bgThemeLabel: 'キャンバス背景 (スタジオスタイル)',
    btnExportMagic: 'Studioエフェクト付きで書き出し',
    btnSaveRaw: 'オリジナルをそのまま保存',
    processingVideo: '✨ エフェクトとアニメーションを合成処理中...',
    savedEditedSuccess: '✓ エフェクト付きビデオの書き出しが完了しました',
    tabCanvas: '🎨 背景',
    tabEffects: '✨ エフェクト',
    tabIntro: '🏷️ イントロ',
    paddingLabel: '余白 / パディング',
    radiusLabel: '角丸',
    shadowLabel: '3Dシャドウ＆浮遊感',
    ratioLabel: '書き出しアスペクト比',
    zoomTitle: '中央ダイナミックズーム',
    zoomDesc: '画面中央をスムーズにクローズアップ',
    glowTitle: 'カーソルハイライト',
    glowDesc: 'マウスポインターを強調する発光リング',
    filterLabel: 'カラーグレーディング',
    introTitle: 'アニメーション付きイントロカード',
    introDesc: '動画の開始数秒間に自動表示',
    introDemoTitleLabel: 'デモタイトル',
    introDemoSubtitleLabel: 'サブタイトルまたは発表者',
    introAvatarLabel: 'アイコンまたはアバター',
    introDurationLabel: 'イントロ表示時間',
    chromaBorderLabel: 'アニメーション付きマルチカラー枠',
    teleprompterTitle: '画面収録に映らないプロンプター',
    teleprompterDesc: '録画動画には映らず、話者だけに表示',
    btnOpenTeleprompter: 'プロンプターを開く',
    dockTeleprompter: '原稿',
    deviceFrameLabel: 'Appleモックアップフレーム',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'macOSウィンドウ',
    frameGlass: 'スタジオグラス',
    frameNose: 'フレームなし',
    tiltLabel: '3Dチルト（Keynote風）',
    tiltNone: 'フラット 0°',
    tiltLeft: '左傾斜 -6°',
    tiltRight: '右傾斜 +6°',
    tiltIso: '3Dアイソメトリック',
    uploadBgBtn: 'カスタム背景をアップロード',
    watermarkLabel: 'Loomus Pro透かし',
    watermarkDesc: '隅に表示されるAppleスタイルの透かし'
  },
  ar: {
    appSubtitle: 'مسجل الشاشة والكاميرا مع تأثيرات ورسوم متحركة',
    langAuto: 'تلقائي (النظام)',
    sourceSectionTitle: 'ماذا تريد أن تسجل؟',
    tabScreens: 'الشاشات',
    tabWindows: 'النوافذ',
    loadingSources: 'جارٍ تحميل المصادر المتاحة...',
    selectedSource: 'المحدد:',
    devicesSectionTitle: 'الكاميرا والميكروفون والفقاعة',
    cameraTitle: 'كاميرا في دائرة',
    cameraDesc: 'فقاعة عائمة قابلة للتحريك وتغيير الحجم',
    cameraDeviceLabel: 'الجهاز:',
    bubbleSizeLabel: 'الحجم:',
    bubbleBorderLabel: 'النمط:',
    borderPurple: 'بنفسجي نيون',
    borderGold: 'ذهب وردي',
    borderCyan: 'سماوي سايبر',
    borderMinimal: 'أبيض بسيط',
    cameraMirrorLabel: 'تأثير المرآة الأفقي',
    btnShowBubble: 'إظهار الفقاعة العائمة',
    btnHideBubble: 'إخفاء الفقاعة العائمة',
    micTitle: 'الميكروفون والصوت',
    micDesc: 'صوت نقي متزامن',
    micDeviceLabel: 'الجهاز:',
    micLevelLabel: 'مستوى الصوت:',
    monitorTitle: 'معاينة مباشرة في الوقت الفعلي',
    selectSourcePrompt: 'حدد شاشة أو نافذة للبدء',
    btnStartRecording: 'بدء التسجيل',
    recCountdownHint: 'عد تنازلي لمدة 3 ثوانٍ قبل التسجيل',
    btnPause: 'إيقاف مؤقت',
    btnResume: 'استئناف',
    btnStop: 'إنهاء',
    countdownPrep: 'استعد للتسجيل!',
    reviewTitle: 'اكتمل التسجيل',
    btnDiscard: 'تجاهل ولقطة جديدة',
    btnSaveLocal: 'حفظ الفيديو محلياً',
    btnOpenFolder: 'عرض في المجلد',
    savedSuccess: '✓ تم حفظ الفيديو بنجاح على القرص',
    durationLabel: 'المدة:',
    sizeLabel: 'الحجم:',
    recordingStatus: 'جارٍ التسجيل',
    pausedStatus: 'متوقف مؤقتاً',
    editorBadge: 'محرر استوديو Loomus',
    bgThemeLabel: 'خلفية اللوحة (نمط الاستوديو)',
    btnExportMagic: 'تصدير مع تأثيرات الاستوديو',
    btnSaveRaw: 'حفظ الفيديو الأصلي',
    processingVideo: '✨ معالجة الفيديو مع التأثيرات والرسوم المتحركة...',
    savedEditedSuccess: '✓ تم تصدير الفيديو المحرر بنجاح',
    tabCanvas: '🎨 الخلفية',
    tabEffects: '✨ التأثيرات',
    tabIntro: '🏷️ المقدمة',
    paddingLabel: 'الهامش / الحشو',
    radiusLabel: 'زوايا دائرية',
    shadowLabel: 'الظل والارتفاع 3D',
    ratioLabel: 'تنسيق التصدير',
    zoomTitle: 'تكبير ديناميكي مركزي',
    zoomDesc: 'يركز بسلاسة على وسط الشاشة',
    glowTitle: 'تسليط الضوء على المؤشر',
    glowDesc: 'هالة متوهجة لتوجيه العين',
    filterLabel: 'تدرج الألوان',
    introTitle: 'لوحة مقدمة متحركة',
    introDesc: 'تظهر خلال الثواني الأولى',
    introDemoTitleLabel: 'عنوان العرض',
    introDemoSubtitleLabel: 'العنوان الفرعي أو المؤلف',
    introAvatarLabel: 'الأيقونة أو الصورة الرمزية',
    introDurationLabel: 'مدة لوحة المقدمة',
    chromaBorderLabel: 'إطار متحرك متعدد الألوان',
    teleprompterTitle: 'مُلقّن نصي غير مرئي',
    teleprompterDesc: 'مرئي لك، ومخفي عن الفيديو المسجل',
    btnOpenTeleprompter: 'فتح الملقن',
    dockTeleprompter: 'النص',
    deviceFrameLabel: 'إطار موك اب آبل',
    frameMacbook: 'MacBook Pro',
    frameWindow: 'نافذة macOS',
    frameGlass: 'زجاج الاستوديو',
    frameNose: 'بدون إطار',
    tiltLabel: 'إمالة ثلاثية الأبعاد (نمط Keynote)',
    tiltNone: 'مسطح 0°',
    tiltLeft: 'إمالة لليسار -6°',
    tiltRight: 'إمالة لليمين +6°',
    tiltIso: 'منظور متساوي القياس',
    uploadBgBtn: 'رفع خلفية مخصصة',
    watermarkLabel: 'علامة مائية Loomus Pro',
    watermarkDesc: 'شارة مائية زجاجية أنيقة في الزاوية'
  }
};

let currentLang = 'es';

function setLanguage(lang) {
  currentLang = i18n[lang] ? lang : 'es';
  const dict = i18n[currentLang];

  // RTL support for Hebrew and Arabic
  const isRtl = currentLang === 'he' || currentLang === 'ar';
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update dynamic buttons
  updateBubbleButtonText();
}

async function initLocale() {
  const langSelect = document.getElementById('langSelect');
  langSelect.addEventListener('change', async (e) => {
    if (e.target.value === 'auto') {
      const locale = await window.loomus?.getSystemLocale();
      const code = (locale || '').slice(0, 2).toLowerCase();
      setLanguage(i18n[code] ? code : 'es');
    } else {
      setLanguage(e.target.value);
    }
  });

  // Default auto detect
  const locale = await window.loomus?.getSystemLocale();
  const code = (locale || '').slice(0, 2).toLowerCase();
  if (i18n[code]) {
    setLanguage(code);
    langSelect.value = code;
  } else {
    setLanguage('es');
    langSelect.value = 'es';
  }
}

// Hardware-accelerated codec detector (prioritizes Apple Silicon VideoToolbox H.264 / AVC)
function getOptimalVideoCodec() {
  const candidates = [
    { mime: 'video/mp4;codecs=avc1,mp4a.40.2', ext: 'mp4', container: 'video/mp4' },
    { mime: 'video/mp4;codecs=avc1', ext: 'mp4', container: 'video/mp4' },
    { mime: 'video/mp4', ext: 'mp4', container: 'video/mp4' },
    { mime: 'video/webm;codecs=h264,opus', ext: 'webm', container: 'video/webm' },
    { mime: 'video/webm;codecs=h264', ext: 'webm', container: 'video/webm' },
    { mime: 'video/webm;codecs=vp8,opus', ext: 'webm', container: 'video/webm' },
    { mime: 'video/webm;codecs=vp8', ext: 'webm', container: 'video/webm' },
    { mime: 'video/webm', ext: 'webm', container: 'video/webm' }
  ];
  for (const c of candidates) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(c.mime)) {
      return c;
    }
  }
  return { mime: 'video/webm', ext: 'webm', container: 'video/webm' };
}

// ========================
// 2. STATE & ELEMENT REFS
// ========================
const state = {
  sources: [],
  selectedSource: null,
  activeTab: 'screens', // 'screens' or 'windows'
  screenStream: null,
  camStream: null,
  micStream: null,
  isCameraActive: true,
  isMicActive: true,
  bubbleSize: 220,
  bubbleBorderStyle: 'purple',
  chromaBorder: true,
  isMirrored: true,
  isFloatingBubbleVisible: false,
  isTeleprompterVisible: false,
  bubblePosition: { x: 50, y: 50 }, // coordinates on canvas
  mediaRecorder: null,
  recordedChunks: [],
  isRecording: false,
  isPaused: false,
  timerInterval: null,
  recordingSeconds: 0,
  audioContext: null,
  analyser: null,
  lastSavedFilePath: null,
  recordedBlob: null,
  recordingMimeType: 'video/mp4',
  recordingExtension: 'mp4'
};

// DOM Elements
const screenVideo = document.getElementById('screenVideo');
const camVideo = document.getElementById('camVideo');
const compositorCanvas = document.getElementById('compositorCanvas');
const canvasCtx = compositorCanvas.getContext('2d');
const sourcesGrid = document.getElementById('sourcesGrid');
const tabScreens = document.getElementById('tabScreens');
const tabWindows = document.getElementById('tabWindows');
const selectedSourceName = document.getElementById('selectedSourceName');
const viewportPlaceholder = document.getElementById('viewportPlaceholder');
const cameraToggle = document.getElementById('cameraToggle');
const cameraSelect = document.getElementById('cameraSelect');
const cameraOptions = document.getElementById('cameraOptions');
const cameraMirrorToggle = document.getElementById('cameraMirrorToggle');
const chromaBorderToggle = document.getElementById('chromaBorderToggle');
const bubbleBorderSelect = document.getElementById('bubbleBorderSelect');
const btnToggleFloatingBubble = document.getElementById('btnToggleFloatingBubble');
const btnOpenTeleprompter = document.getElementById('btnOpenTeleprompter');
const dockTeleprompterBtn = document.getElementById('dockTeleprompterBtn');
const micToggle = document.getElementById('micToggle');
const micSelect = document.getElementById('micSelect');
const micOptions = document.getElementById('micOptions');
const vuBar = document.getElementById('vuBar');
const btnStartRecord = document.getElementById('btnStartRecord');
const recordingDock = document.getElementById('recordingDock');
const dockTimer = document.getElementById('dockTimer');
const dockPauseBtn = document.getElementById('dockPauseBtn');
const dockPauseText = document.getElementById('dockPauseText');
const dockPulse = document.getElementById('dockPulse');
const dockStopBtn = document.getElementById('dockStopBtn');
const countdownOverlay = document.getElementById('countdownOverlay');
const countdownNumber = document.getElementById('countdownNumber');
const countdownCircle = document.getElementById('countdownCircle');
const reviewModal = document.getElementById('reviewModal');
const reviewVideo = document.getElementById('reviewVideo');
const videoDurationLabel = document.getElementById('videoDurationLabel');
const videoSizeLabel = document.getElementById('videoSizeLabel');
const btnDiscardRecording = document.getElementById('btnDiscardRecording');
const btnSaveRawVideo = document.getElementById('btnSaveRawVideo');
const btnExportEditedVideo = document.getElementById('btnExportEditedVideo');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const savedAlert = document.getElementById('savedAlert');
const savedAlertText = document.getElementById('savedAlertText');
const btnOpenInFolder = document.getElementById('btnOpenInFolder');
const btnRefreshSources = document.getElementById('btnRefreshSources');
const annotationCanvas = document.getElementById('annotationCanvas');
const annotationCtx = annotationCanvas ? annotationCanvas.getContext('2d') : null;
const dockPenBtn = document.getElementById('dockPenBtn');
const dockPenText = document.getElementById('dockPenText');
const annotationToolbar = document.getElementById('annotationToolbar');
const btnUndoAnnotation = document.getElementById('btnUndoAnnotation');
const btnClearAnnotation = document.getElementById('btnClearAnnotation');

// Studio Editor Elements
const editorVideoTitle = document.getElementById('editorVideoTitle');
const editorViewport = document.getElementById('editorViewport');
const editorCanvas = document.getElementById('editorCanvas');
const editorVideoFrame = document.getElementById('editorVideoFrame');
const editorIntroOverlay = document.getElementById('editorIntroOverlay');
const introAvatarIcon = document.getElementById('introAvatarIcon');
const introTitleDisplay = document.getElementById('introTitleDisplay');
const introSubtitleDisplay = document.getElementById('introSubtitleDisplay');
const cursorGlowElement = document.getElementById('cursorGlowElement');

const btnEditorPlayPause = document.getElementById('btnEditorPlayPause');
const playIconSvg = document.getElementById('playIconSvg');
const pauseIconSvg = document.getElementById('pauseIconSvg');
const editorCurrentTime = document.getElementById('editorCurrentTime');
const editorTotalTime = document.getElementById('editorTotalTime');
const btnSetTrimIn = document.getElementById('btnSetTrimIn');
const btnSetTrimOut = document.getElementById('btnSetTrimOut');
const btnResetTrim = document.getElementById('btnResetTrim');
const trimInLabel = document.getElementById('trimInLabel');
const trimOutLabel = document.getElementById('trimOutLabel');
const editorPlaybackSpeed = document.getElementById('editorPlaybackSpeed');

const timelineBarWrapper = document.getElementById('timelineBarWrapper');
const timelineTrack = document.getElementById('timelineTrack');
const timelineTrimRegion = document.getElementById('timelineTrimRegion');
const timelinePlayhead = document.getElementById('timelinePlayhead');
const trimHandleIn = document.getElementById('trimHandleIn');
const trimHandleOut = document.getElementById('trimHandleOut');

const inputPadding = document.getElementById('inputPadding');
const valPadding = document.getElementById('valPadding');
const inputRadius = document.getElementById('inputRadius');
const valRadius = document.getElementById('valRadius');

const toggleZoom = document.getElementById('toggleZoom');
const zoomLevelRow = document.getElementById('zoomLevelRow');
const toggleCursorGlow = document.getElementById('toggleCursorGlow');

const toggleIntroCard = document.getElementById('toggleIntroCard');
const introCardConfig = document.getElementById('introCardConfig');
const inputIntroTitle = document.getElementById('inputIntroTitle');
const inputIntroSubtitle = document.getElementById('inputIntroSubtitle');

const inputCustomBg = document.getElementById('inputCustomBg');
const btnUploadBg = document.getElementById('btnUploadBg');
const btnClearBg = document.getElementById('btnClearBg');
const toggleWatermark = document.getElementById('toggleWatermark');
const macbookNotch = document.getElementById('macbookNotch');
const macosWindowHeader = document.getElementById('macosWindowHeader');
const editorWatermarkPill = document.getElementById('editorWatermarkPill');
const loomusLogoImg = new Image();
loomusLogoImg.src = 'assets/logo.svg';

const exportProgressBox = document.getElementById('exportProgressBox');
const exportStatusText = document.getElementById('exportStatusText');
const exportPercentText = document.getElementById('exportPercentText');
const exportProgressFill = document.getElementById('exportProgressFill');

// Canvas dimensions
compositorCanvas.width = 1920;
compositorCanvas.height = 1080;
if (annotationCanvas) {
  annotationCanvas.width = 1920;
  annotationCanvas.height = 1080;
}

// ==========================================
// LIVE INKING & ANNOTATION ENGINE
// ==========================================
const inking = {
  active: false,
  tool: 'pen', // 'pen', 'vanishing', 'highlighter', 'arrow', 'rect', 'spotlight'
  color: '#00f0ff',
  lineWidth: 5,
  isDrawing: false,
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  isHovering: false,
  strokes: [], // Completed permanent strokes
  vanishingStrokes: [], // Vanishing strokes with timestamp
  currentPoints: []
};

function initModeSelector() {
  const modeScreenCam = document.getElementById('modeScreenCam');
  const modeScreenOnly = document.getElementById('modeScreenOnly');
  const modeCamOnly = document.getElementById('modeCamOnly');
  const cameraBox = document.getElementById('cameraBox');
  const sourceCard = document.querySelector('.source-card');

  function setMode(mode) {
    [modeScreenCam, modeScreenOnly, modeCamOnly].forEach(b => b?.classList.remove('active'));

    if (mode === 'screencam') {
      modeScreenCam?.classList.add('active');
      cameraToggle.checked = true;
      state.isCameraActive = true;
      if (cameraOptions) cameraOptions.style.display = 'flex';
      if (sourceCard) sourceCard.style.opacity = '1';
      if (cameraBox) cameraBox.style.opacity = '1';
    } else if (mode === 'screen') {
      modeScreenOnly?.classList.add('active');
      cameraToggle.checked = false;
      state.isCameraActive = false;
      if (cameraOptions) cameraOptions.style.display = 'none';
      if (sourceCard) sourceCard.style.opacity = '1';
      if (cameraBox) cameraBox.style.opacity = '0.45';
      if (window.loomus?.toggleFloatingBubble) {
        window.loomus.toggleFloatingBubble({ show: false });
      }
    } else if (mode === 'cam') {
      modeCamOnly?.classList.add('active');
      cameraToggle.checked = true;
      state.isCameraActive = true;
      if (cameraOptions) cameraOptions.style.display = 'flex';
      if (cameraBox) cameraBox.style.opacity = '1';
    }
  }

  if (modeScreenCam) modeScreenCam.onclick = () => setMode('screencam');
  if (modeScreenOnly) modeScreenOnly.onclick = () => setMode('screen');
  if (modeCamOnly) modeCamOnly.onclick = () => setMode('cam');
}

function initInkingControls() {
  if (dockPenBtn && annotationToolbar) {
    dockPenBtn.onclick = () => {
      inking.active = !inking.active;
      if (inking.active) {
        annotationToolbar.classList.remove('hidden');
        if (annotationCanvas) annotationCanvas.classList.add('active');
        dockPenBtn.style.background = 'rgba(0, 240, 255, 0.25)';
        dockPenBtn.style.borderColor = '#00f0ff';
      } else {
        annotationToolbar.classList.add('hidden');
        if (annotationCanvas) annotationCanvas.classList.remove('active');
        dockPenBtn.style.background = '';
        dockPenBtn.style.borderColor = '';
      }
    };
  }

  // Tool buttons
  document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      inking.tool = btn.dataset.tool;
    };
  });

  // Color dots
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.onclick = () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      inking.color = dot.dataset.color;
    };
  });

  // Undo button
  if (btnUndoAnnotation) {
    btnUndoAnnotation.onclick = () => {
      if (inking.strokes.length > 0) inking.strokes.pop();
    };
  }

  // Clear button
  if (btnClearAnnotation) {
    btnClearAnnotation.onclick = () => {
      inking.strokes = [];
      inking.vanishingStrokes = [];
    };
  }

  // Pointer / Mouse events on annotation overlay
  if (annotationCanvas) {
    function getCoords(e) {
      const rect = annotationCanvas.getBoundingClientRect();
      const scaleX = compositorCanvas.width / (rect.width || 1);
      const scaleY = compositorCanvas.height / (rect.height || 1);
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }

    annotationCanvas.addEventListener('mousedown', (e) => {
      if (!inking.active) return;
      const c = getCoords(e);
      inking.isDrawing = true;
      inking.startX = c.x;
      inking.startY = c.y;
      inking.currentX = c.x;
      inking.currentY = c.y;
      inking.currentPoints = [{ x: c.x, y: c.y }];
    });

    annotationCanvas.addEventListener('mousemove', (e) => {
      const c = getCoords(e);
      inking.currentX = c.x;
      inking.currentY = c.y;
      inking.isHovering = true;
      if (inking.isDrawing) {
        inking.currentPoints.push({ x: c.x, y: c.y });
      }
    });

    window.addEventListener('mouseup', () => {
      if (!inking.isDrawing) return;
      inking.isDrawing = false;
      if (inking.tool === 'vanishing') {
        inking.vanishingStrokes.push({
          tool: 'vanishing',
          color: inking.color,
          width: inking.lineWidth,
          points: [...inking.currentPoints],
          createdAt: Date.now(),
          duration: 2500
        });
      } else if (inking.tool === 'pen' || inking.tool === 'highlighter') {
        inking.strokes.push({
          tool: inking.tool,
          color: inking.color,
          width: inking.lineWidth,
          points: [...inking.currentPoints]
        });
      } else if (inking.tool === 'arrow') {
        inking.strokes.push({
          tool: 'arrow',
          color: inking.color,
          width: inking.lineWidth + 2,
          startX: inking.startX,
          startY: inking.startY,
          endX: inking.currentX,
          endY: inking.currentY
        });
      } else if (inking.tool === 'rect') {
        inking.strokes.push({
          tool: 'rect',
          color: inking.color,
          width: inking.lineWidth,
          startX: inking.startX,
          startY: inking.startY,
          endX: inking.currentX,
          endY: inking.currentY
        });
      }
      inking.currentPoints = [];
    });

    annotationCanvas.addEventListener('mouseleave', () => {
      inking.isHovering = false;
    });
  }
}

function drawAnnotations(ctx, width, height) {
  const now = Date.now();

  // 1. Vanishing Strokes (Smooth 2.5s fade-out)
  inking.vanishingStrokes = inking.vanishingStrokes.filter(s => {
    const elapsed = now - s.createdAt;
    if (elapsed >= s.duration) return false;
    const progress = elapsed / s.duration;
    const alpha = Math.max(0, 1 - Math.pow(progress, 1.8));

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = s.color;
    ctx.shadowBlur = 10;

    if (s.points.length > 1) {
      ctx.beginPath();
      ctx.moveTo(s.points[0].x, s.points[0].y);
      for (let i = 1; i < s.points.length; i++) {
        ctx.lineTo(s.points[i].x, s.points[i].y);
      }
      ctx.stroke();
    }
    ctx.restore();
    return true;
  });

  // 2. Permanent Strokes
  inking.strokes.forEach(s => {
    ctx.save();
    if (s.tool === 'highlighter') {
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width * 3.5;
      ctx.lineCap = 'square';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(s.points[0].x, s.points[0].y);
      for (let i = 1; i < s.points.length; i++) {
        ctx.lineTo(s.points[i].x, s.points[i].y);
      }
      ctx.stroke();
    } else if (s.tool === 'pen') {
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(s.points[0].x, s.points[0].y);
      for (let i = 1; i < s.points.length; i++) {
        ctx.lineTo(s.points[i].x, s.points[i].y);
      }
      ctx.stroke();
    } else if (s.tool === 'arrow') {
      drawArrow(ctx, s.startX, s.startY, s.endX, s.endY, s.color, s.width);
    } else if (s.tool === 'rect') {
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 8;
      ctx.strokeRect(s.startX, s.startY, s.endX - s.startX, s.endY - s.startY);
    }
    ctx.restore();
  });

  // 3. Active in-progress stroke
  if (inking.isDrawing && inking.currentPoints.length > 1) {
    ctx.save();
    if (inking.tool === 'pen' || inking.tool === 'vanishing') {
      ctx.strokeStyle = inking.color;
      ctx.lineWidth = inking.lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = inking.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(inking.currentPoints[0].x, inking.currentPoints[0].y);
      for (let i = 1; i < inking.currentPoints.length; i++) {
        ctx.lineTo(inking.currentPoints[i].x, inking.currentPoints[i].y);
      }
      ctx.stroke();
    } else if (inking.tool === 'highlighter') {
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = inking.color;
      ctx.lineWidth = inking.lineWidth * 3.5;
      ctx.lineCap = 'square';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(inking.currentPoints[0].x, inking.currentPoints[0].y);
      for (let i = 1; i < inking.currentPoints.length; i++) {
        ctx.lineTo(inking.currentPoints[i].x, inking.currentPoints[i].y);
      }
      ctx.stroke();
    } else if (inking.tool === 'arrow') {
      drawArrow(ctx, inking.startX, inking.startY, inking.currentX, inking.currentY, inking.color, inking.lineWidth + 2);
    } else if (inking.tool === 'rect') {
      ctx.strokeStyle = inking.color;
      ctx.lineWidth = inking.lineWidth;
      ctx.shadowColor = inking.color;
      ctx.shadowBlur = 8;
      ctx.strokeRect(inking.startX, inking.startY, inking.currentX - inking.startX, inking.currentY - inking.startY);
    }
    ctx.restore();
  }

  // 4. Cursor Spotlight / Linterna de Enfoque (Loomus Signature Feature)
  if (inking.active && inking.tool === 'spotlight' && inking.isHovering) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'destination-out';
    const spotlightRadius = 150;
    const grad = ctx.createRadialGradient(
      inking.currentX, inking.currentY, 30,
      inking.currentX, inking.currentY, spotlightRadius
    );
    grad.addColorStop(0, 'rgba(0,0,0,1)');
    grad.addColorStop(0.85, 'rgba(0,0,0,0.9)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(inking.currentX, inking.currentY, spotlightRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function drawArrow(ctx, fromX, fromY, toX, toY, color, width) {
  const headLen = 22;
  const angle = Math.atan2(toY - fromY, toX - fromX);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;

  // Shaft
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  // Head
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
}

// ========================
// 3. SOUND SYNTHESIS
// ========================
function playBeep(freq = 440, type = 'sine', duration = 0.15) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

// ========================
// 4. SOURCES & CAPTURE
// ========================
async function loadSources() {
  sourcesGrid.innerHTML = `
    <div class="sources-loading">
      <div class="spinner-mini"></div>
      <span>${i18n[currentLang].loadingSources}</span>
    </div>
  `;

  try {
    const sources = await window.loomus?.getSources();
    state.sources = sources || [];
    renderSourcesList();
  } catch (err) {
    console.error('Error fetching sources:', err);
    sourcesGrid.innerHTML = `<p style="color:#ef4444;font-size:12px;padding:20px;">Error al obtener fuentes: ${err.message}</p>`;
  }
}

function renderSourcesList() {
  sourcesGrid.innerHTML = '';
  const isScreenTab = state.activeTab === 'screens';

  const filtered = state.sources.filter((s) => {
    return isScreenTab ? s.id.startsWith('screen:') : s.id.startsWith('window:');
  });

  if (filtered.length === 0) {
    sourcesGrid.innerHTML = `<p style="color:#64748b;font-size:12px;padding:20px;grid-column:1/-1;text-align:center;">No se encontraron ${isScreenTab ? 'pantallas' : 'ventanas'}</p>`;
    return;
  }

  filtered.forEach((source) => {
    const item = document.createElement('div');
    item.className = 'source-item';
    if (state.selectedSource && state.selectedSource.id === source.id) {
      item.classList.add('active');
    }

    item.innerHTML = `
      <img class="source-thumb" src="${source.thumbnail}" alt="${source.name}">
      <span class="source-name" title="${source.name}">${source.name}</span>
    `;

    item.onclick = () => selectSource(source);
    sourcesGrid.appendChild(item);
  });

  // Auto-select first screen if none selected
  if (!state.selectedSource && filtered.length > 0) {
    selectSource(filtered[0]);
  }
}

async function selectSource(source) {
  state.selectedSource = source;
  selectedSourceName.textContent = source.name;

  // Highlight in grid
  document.querySelectorAll('.source-item').forEach((el) => el.classList.remove('active'));
  document.querySelectorAll('.source-item').forEach((el) => {
    if (el.querySelector('.source-name').textContent === source.name) {
      el.classList.add('active');
    }
  });

  // Start Screen Stream
  try {
    if (state.screenStream) {
      state.screenStream.getTracks().forEach((t) => t.stop());
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: source.id,
          minWidth: 1280,
          maxWidth: 1920,
          minHeight: 720,
          maxHeight: 1080,
          maxFrameRate: 60
        }
      }
    });

    state.screenStream = stream;
    screenVideo.srcObject = stream;
    await screenVideo.play();

    viewportPlaceholder.classList.add('hidden');
    startCompositorLoop();
  } catch (err) {
    console.error('Error selecting screen source:', err);
  }
}

// Tab handlers
tabScreens.onclick = () => {
  tabScreens.classList.add('active');
  tabWindows.classList.remove('active');
  state.activeTab = 'screens';
  renderSourcesList();
};

tabWindows.onclick = () => {
  tabWindows.classList.add('active');
  tabScreens.classList.remove('active');
  state.activeTab = 'windows';
  renderSourcesList();
};

btnRefreshSources.onclick = () => {
  loadSources();
};

// ========================
// 5. CAMERA & MICROPHONE DEVICES
// ========================
async function enumerateDevices() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter((d) => d.kind === 'videoinput');
    const audioDevices = devices.filter((d) => d.kind === 'audioinput');

    cameraSelect.innerHTML = '';
    videoDevices.forEach((dev, idx) => {
      const opt = document.createElement('option');
      opt.value = dev.deviceId;
      opt.textContent = dev.label || `Cámara ${idx + 1}`;
      cameraSelect.appendChild(opt);
    });

    micSelect.innerHTML = '';
    audioDevices.forEach((dev, idx) => {
      const opt = document.createElement('option');
      opt.value = dev.deviceId;
      opt.textContent = dev.label || `Micrófono ${idx + 1}`;
      micSelect.appendChild(opt);
    });

    if (state.isCameraActive) startCameraStream();
    if (state.isMicActive) startMicStream();
  } catch (err) {
    console.error('Error enumerating devices:', err);
  }
}

async function startCameraStream() {
  if (state.camStream) {
    state.camStream.getTracks().forEach((t) => t.stop());
  }

  const deviceId = cameraSelect.value;
  const constraints = {
    video: deviceId
      ? { deviceId: { exact: deviceId }, width: { ideal: 1280 }, height: { ideal: 720 } }
      : { width: { ideal: 1280 }, height: { ideal: 720 } },
    audio: false
  };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    state.camStream = stream;
    camVideo.srcObject = stream;
    await camVideo.play();
  } catch (err) {
    console.warn('Could not start camera:', err);
  }
}

async function startMicStream() {
  if (state.micStream) {
    state.micStream.getTracks().forEach((t) => t.stop());
  }

  const deviceId = micSelect.value;
  const constraints = {
    audio: deviceId ? { deviceId: { exact: deviceId }, echoCancellation: true, noiseSuppression: true } : true,
    video: false
  };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    state.micStream = stream;
    initAudioMeter(stream);
  } catch (err) {
    console.warn('Could not start microphone:', err);
  }
}

// VU Meter setup
function initAudioMeter(stream) {
  try {
    if (!state.audioContext) {
      state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    const source = state.audioContext.createMediaStreamSource(stream);
    state.analyser = state.audioContext.createAnalyser();
    state.analyser.fftSize = 64;
    source.connect(state.analyser);

    const dataArray = new Uint8Array(state.analyser.frequencyBinCount);

    function updateMeter() {
      if (!state.isMicActive || !state.analyser) {
        vuBar.style.width = '0%';
        return;
      }
      state.analyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
      }
      const avg = sum / dataArray.length;
      const percentage = Math.min(100, Math.round((avg / 128) * 100));
      vuBar.style.width = `${percentage}%`;
      requestAnimationFrame(updateMeter);
    }
    updateMeter();
  } catch (err) {
    console.warn('Audio meter init error:', err);
  }
}

// Device inputs events
cameraToggle.onchange = (e) => {
  state.isCameraActive = e.target.checked;
  cameraOptions.style.display = state.isCameraActive ? 'flex' : 'none';
  if (state.isCameraActive) {
    startCameraStream();
  } else {
    if (state.camStream) state.camStream.getTracks().forEach((t) => t.stop());
    window.loomus?.toggleCameraBubble(false);
    state.isFloatingBubbleVisible = false;
    updateBubbleButtonText();
  }
};

cameraSelect.onchange = () => {
  if (state.isCameraActive) startCameraStream();
};

cameraMirrorToggle.onchange = (e) => {
  state.isMirrored = e.target.checked;
  window.loomus?.updateCameraBubble({ isMirrored: state.isMirrored });
};

if (chromaBorderToggle) {
  chromaBorderToggle.onchange = (e) => {
    state.chromaBorder = e.target.checked;
    window.loomus?.updateCameraBubble({ chromaBorder: state.chromaBorder });
  };
}

bubbleBorderSelect.onchange = (e) => {
  state.bubbleBorderStyle = e.target.value;
  window.loomus?.updateCameraBubble({ borderStyle: state.bubbleBorderStyle });
};

document.querySelectorAll('.size-pill').forEach((btn) => {
  btn.onclick = () => {
    document.querySelectorAll('.size-pill').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    state.bubbleSize = parseInt(btn.getAttribute('data-size'), 10);
    window.loomus?.updateCameraBubble({ size: state.bubbleSize });
  };
});

function updateBubbleButtonText() {
  const dict = i18n[currentLang];
  btnToggleFloatingBubble.textContent = state.isFloatingBubbleVisible
    ? dict.btnHideBubble
    : dict.btnShowBubble;
}

btnToggleFloatingBubble.onclick = async () => {
  state.isFloatingBubbleVisible = !state.isFloatingBubbleVisible;
  await window.loomus?.toggleCameraBubble(state.isFloatingBubbleVisible, {
    size: state.bubbleSize,
    isMirrored: state.isMirrored,
    borderStyle: state.bubbleBorderStyle,
    chromaBorder: state.chromaBorder
  });
  updateBubbleButtonText();
};

function updateTeleprompterButtonText() {
  const dict = i18n[currentLang];
  if (btnOpenTeleprompter) {
    btnOpenTeleprompter.textContent = state.isTeleprompterVisible
      ? (currentLang === 'es' ? 'Cerrar Teleprompter' : 'Close Teleprompter')
      : dict.btnOpenTeleprompter;
  }
}

if (btnOpenTeleprompter) {
  btnOpenTeleprompter.onclick = async () => {
    state.isTeleprompterVisible = !state.isTeleprompterVisible;
    await window.loomus?.toggleTeleprompter(state.isTeleprompterVisible);
    updateTeleprompterButtonText();
  };
}

if (dockTeleprompterBtn) {
  dockTeleprompterBtn.onclick = async () => {
    state.isTeleprompterVisible = !state.isTeleprompterVisible;
    await window.loomus?.toggleTeleprompter(state.isTeleprompterVisible);
    updateTeleprompterButtonText();
  };
}

window.loomus?.onTeleprompterStateChanged((data) => {
  if (data && data.visible !== undefined) {
    state.isTeleprompterVisible = data.visible;
    updateTeleprompterButtonText();
  }
});

micToggle.onchange = (e) => {
  state.isMicActive = e.target.checked;
  micOptions.style.display = state.isMicActive ? 'flex' : 'none';
  if (state.isMicActive) {
    startMicStream();
  } else {
    if (state.micStream) state.micStream.getTracks().forEach((t) => t.stop());
    vuBar.style.width = '0%';
  }
};

micSelect.onchange = () => {
  if (state.isMicActive) startMicStream();
};

// ========================
// 6. REAL-TIME COMPOSITOR CANVAS LOOP
// ========================
let compositorRunning = false;

function startCompositorLoop() {
  if (compositorRunning) return;
  compositorRunning = true;

  function renderFrame() {
    // 1. Draw screen video
    if (screenVideo.readyState >= 2) {
      canvasCtx.drawImage(screenVideo, 0, 0, compositorCanvas.width, compositorCanvas.height);
    } else {
      canvasCtx.fillStyle = '#0a0c12';
      canvasCtx.fillRect(0, 0, compositorCanvas.width, compositorCanvas.height);
    }

    // 2. Draw Camera Bubble onto recording if active
    if (state.isCameraActive && camVideo.readyState >= 2) {
      drawCameraBubbleOnCanvas();
    }

    // 3. Draw live Inking & Annotations directly into video recording!
    drawAnnotations(canvasCtx, compositorCanvas.width, compositorCanvas.height);
    if (annotationCtx) {
      annotationCtx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);
      drawAnnotations(annotationCtx, annotationCanvas.width, annotationCanvas.height);
    }

    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}

function drawCameraBubbleOnCanvas() {
  const radius = state.bubbleSize / 2;
  const margin = 50;
  if (!state.bubblePosition || (state.bubblePosition.x === 50 && state.bubblePosition.y === 50)) {
    state.bubblePosition = {
      x: margin + radius,
      y: compositorCanvas.height - margin - radius
    };
  }
  const centerX = state.bubblePosition.x;
  const centerY = state.bubblePosition.y;

  canvasCtx.save();

  // Shadow
  canvasCtx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  canvasCtx.shadowBlur = 30;
  canvasCtx.shadowOffsetX = 0;
  canvasCtx.shadowOffsetY = 10;

  // Clip path: circle
  canvasCtx.beginPath();
  canvasCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  canvasCtx.closePath();
  canvasCtx.clip();

  // Draw video frame inside circle
  if (state.isMirrored) {
    canvasCtx.translate(centerX * 2, 0);
    canvasCtx.scale(-1, 1);
  }

  // Cover aspect ratio
  const vidW = camVideo.videoWidth || 1280;
  const vidH = camVideo.videoHeight || 720;
  const aspect = vidW / vidH;
  let drawW = radius * 2;
  let drawH = drawW / aspect;
  if (drawH < radius * 2) {
    drawH = radius * 2;
    drawW = drawH * aspect;
  }

  const drawX = centerX - drawW / 2;
  const drawY = centerY - drawH / 2;

  canvasCtx.drawImage(camVideo, drawX, drawY, drawW, drawH);
  canvasCtx.restore();

  // Draw Border Ring
  canvasCtx.save();
  canvasCtx.beginPath();
  canvasCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);

  if (state.chromaBorder) {
    // Smooth animated rotating rainbow chroma border
    const angle = (Date.now() / 25) % 360;
    try {
      const grad = canvasCtx.createConicGradient((angle * Math.PI) / 180, centerX, centerY);
      grad.addColorStop(0, '#f43f5e');
      grad.addColorStop(0.18, '#ec4899');
      grad.addColorStop(0.35, '#8b5cf6');
      grad.addColorStop(0.55, '#06b6d4');
      grad.addColorStop(0.75, '#10b981');
      grad.addColorStop(0.9, '#f59e0b');
      grad.addColorStop(1, '#f43f5e');
      canvasCtx.strokeStyle = grad;
      canvasCtx.lineWidth = 3.5;
    } catch {
      canvasCtx.strokeStyle = `hsl(${angle}, 85%, 65%)`;
      canvasCtx.lineWidth = 3.5;
    }
  } else if (state.bubbleBorderStyle === 'gold') {
    const grad = canvasCtx.createLinearGradient(centerX - radius, centerY - radius, centerX + radius, centerY + radius);
    grad.addColorStop(0, '#f59e0b');
    grad.addColorStop(0.5, '#fb7185');
    grad.addColorStop(1, '#ec4899');
    canvasCtx.strokeStyle = grad;
    canvasCtx.lineWidth = 3.5;
  } else if (state.bubbleBorderStyle === 'cyan') {
    canvasCtx.strokeStyle = '#06b6d4';
    canvasCtx.lineWidth = 3.5;
  } else if (state.bubbleBorderStyle === 'minimal') {
    canvasCtx.strokeStyle = '#ffffff';
    canvasCtx.lineWidth = 3;
  } else {
    // purple neon default
    canvasCtx.strokeStyle = '#a855f7';
    canvasCtx.lineWidth = 3.5;
  }

  canvasCtx.stroke();
  canvasCtx.restore();
}

// Interactive dragging on live preview canvas
let isDraggingBubble = false;
let dragBubbleOffset = { x: 0, y: 0 };

if (compositorCanvas) {
  compositorCanvas.addEventListener('mousedown', (e) => {
    if (!state.isCameraActive) return;
    const rect = compositorCanvas.getBoundingClientRect();
    const scaleX = compositorCanvas.width / rect.width;
    const scaleY = compositorCanvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const radius = state.bubbleSize / 2;
    const curX = state.bubblePosition.x;
    const curY = state.bubblePosition.y;
    const dist = Math.hypot(mouseX - curX, mouseY - curY);

    if (dist <= radius + 15) {
      isDraggingBubble = true;
      dragBubbleOffset.x = mouseX - curX;
      dragBubbleOffset.y = mouseY - curY;
      compositorCanvas.style.cursor = 'grabbing';
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingBubble) {
      if (state.isCameraActive && compositorCanvas.offsetParent !== null) {
        const rect = compositorCanvas.getBoundingClientRect();
        const scaleX = compositorCanvas.width / rect.width;
        const scaleY = compositorCanvas.height / rect.height;
        const mouseX = (e.clientX - rect.left) * scaleX;
        const mouseY = (e.clientY - rect.top) * scaleY;
        const radius = state.bubbleSize / 2;
        const curX = state.bubblePosition?.x || 100;
        const curY = state.bubblePosition?.y || 100;
        const dist = Math.hypot(mouseX - curX, mouseY - curY);
        if (dist <= radius + 15) {
          compositorCanvas.style.cursor = 'grab';
        } else {
          compositorCanvas.style.cursor = 'default';
        }
      }
      return;
    }

    const rect = compositorCanvas.getBoundingClientRect();
    const scaleX = compositorCanvas.width / rect.width;
    const scaleY = compositorCanvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const radius = state.bubbleSize / 2;
    state.bubblePosition = {
      x: Math.max(radius, Math.min(compositorCanvas.width - radius, mouseX - dragBubbleOffset.x)),
      y: Math.max(radius, Math.min(compositorCanvas.height - radius, mouseY - dragBubbleOffset.y))
    };
  });

  window.addEventListener('mouseup', () => {
    if (isDraggingBubble) {
      isDraggingBubble = false;
      compositorCanvas.style.cursor = 'grab';
    }
  });
}

// ========================
// 7. RECORDING & COUNTDOWN ENGINE
// ========================
btnStartRecord.onclick = () => {
  if (!state.screenStream) {
    alert(i18n[currentLang].selectSourcePrompt);
    return;
  }
  startCountdown();
};

function startCountdown() {
  countdownOverlay.classList.remove('hidden');
  let count = 3;
  countdownNumber.textContent = count;
  playBeep(440, 'sine', 0.2);

  const totalLength = 283;
  countdownCircle.style.strokeDashoffset = '0';

  const countdownInterval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownNumber.textContent = count;
      playBeep(440, 'sine', 0.2);
      countdownCircle.style.strokeDashoffset = `${totalLength - (count / 3) * totalLength}`;
    } else {
      clearInterval(countdownInterval);
      countdownNumber.textContent = '¡GO!';
      playBeep(880, 'triangle', 0.4);

      setTimeout(() => {
        countdownOverlay.classList.add('hidden');
        beginMediaRecording();
      }, 500);
    }
  }, 1000);
}

function beginMediaRecording() {
  state.recordedChunks = [];
  const optimal = getOptimalVideoCodec();
  state.recordingMimeType = optimal.mime;
  state.recordingExtension = optimal.ext;

  // Capture canvas video stream at 60 fps
  const canvasStream = compositorCanvas.captureStream(60);

  // Mix audio if microphone is active
  const mixedTracks = [...canvasStream.getVideoTracks()];

  if (state.isMicActive && state.micStream) {
    const audioTrack = state.micStream.getAudioTracks()[0];
    if (audioTrack) {
      mixedTracks.push(audioTrack);
    }
  }

  const combinedStream = new MediaStream(mixedTracks);

  let options = {
    mimeType: optimal.mime,
    videoBitsPerSecond: 6000000 // 6 Mbps hardware-accelerated H.264
  };

  try {
    state.mediaRecorder = new MediaRecorder(combinedStream, options);
  } catch (e) {
    console.warn('Fallback recorder options:', e);
    try {
      state.mediaRecorder = new MediaRecorder(combinedStream, { mimeType: optimal.mime });
    } catch {
      state.mediaRecorder = new MediaRecorder(combinedStream);
    }
  }

  state.mediaRecorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) {
      state.recordedChunks.push(event.data);
    }
  };

  state.mediaRecorder.onstop = handleRecordingStopped;

  // Record in 1000ms chunks to maximize performance and avoid I/O choking
  state.mediaRecorder.start(1000);
  state.isRecording = true;
  state.isPaused = false;
  state.recordingSeconds = 0;

  // Show dock
  recordingDock.classList.remove('hidden');
  updateDockTimer();

  state.timerInterval = setInterval(() => {
    if (!state.isPaused) {
      state.recordingSeconds++;
      updateDockTimer();
    }
  }, 1000);

  // Automatically show floating bubble during recording if camera is active
  if (state.isCameraActive) {
    window.loomus?.toggleCameraBubble(true, {
      size: state.bubbleSize,
      isMirrored: state.isMirrored,
      borderStyle: state.bubbleBorderStyle,
      chromaBorder: state.chromaBorder
    });
    state.isFloatingBubbleVisible = true;
    updateBubbleButtonText();
  }
}

function updateDockTimer() {
  const m = Math.floor(state.recordingSeconds / 60).toString().padStart(2, '0');
  const s = (state.recordingSeconds % 60).toString().padStart(2, '0');
  dockTimer.textContent = `${m}:${s}`;
}

// Pause / Resume
dockPauseBtn.onclick = () => {
  if (!state.mediaRecorder || !state.isRecording) return;

  const dict = i18n[currentLang];
  if (!state.isPaused) {
    state.mediaRecorder.pause();
    state.isPaused = true;
    dockPulse.classList.add('paused');
    dockPauseText.textContent = dict.btnResume;
  } else {
    state.mediaRecorder.resume();
    state.isPaused = false;
    dockPulse.classList.remove('paused');
    dockPauseText.textContent = dict.btnPause;
  }
};

// Stop Recording
dockStopBtn.onclick = () => {
  if (!state.mediaRecorder) return;
  state.mediaRecorder.stop();
  clearInterval(state.timerInterval);
  state.isRecording = false;
  recordingDock.classList.add('hidden');
};

// ========================
// 8. LOOMUS STUDIO VIDEO EDITOR & RENDERER
// ========================

const editorState = {
  bgTheme: 'sunset',
  customBgImage: null,
  customBgUrl: null,
  deviceFrame: 'none',
  tilt3D: 'flat',
  padding: 32,
  radius: 18,
  shadow: 'floating',
  aspectRatio: 'auto',
  zoomEnabled: false,
  zoomLevel: 1.1,
  cursorGlow: false,
  colorFilter: 'none',
  watermark: true,
  introEnabled: true,
  introTitle: 'Demostración Rápida',
  introSubtitle: 'Por Luis Lemus · Loomus',
  introEmoji: '🚀',
  introDuration: 3,
  trimIn: 0,
  trimOut: 0,
  duration: 0,
  isPlaying: false,
  isExporting: false,
  draggingHandle: null
};

const BG_PRESETS = {
  sequoia: 'linear-gradient(135deg, #064e3b 0%, #047857 35%, #059669 70%, #d97706 100%)',
  sonoma: 'linear-gradient(135deg, #fbbf24 0%, #f43f5e 40%, #c084fc 80%, #6366f1 100%)',
  keynote: 'radial-gradient(at 0% 0%, #3b82f6 0px, transparent 55%), radial-gradient(at 100% 100%, #ec4899 0px, transparent 50%), #030712',
  sunset: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
  cyber: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #9333ea 100%)',
  aurora: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #6366f1 100%)',
  rosegold: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 50%, #fda4af 100%)',
  mesh: 'radial-gradient(at 0% 0%, #7c3aed 0px, transparent 50%), radial-gradient(at 100% 100%, #db2777 0px, transparent 50%), #0f172a',
  obsidian: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #09090b 100%)',
  none: 'transparent'
};

function formatTimeSec(seconds) {
  const s = Math.max(0, seconds || 0);
  const mins = Math.floor(s / 60).toString().padStart(2, '0');
  const secs = Math.floor(s % 60).toString().padStart(2, '0');
  const tenths = Math.floor((s % 1) * 10);
  return `${mins}:${secs}.${tenths}`;
}

function updateEditorPreview() {
  if (!editorCanvas || !editorVideoFrame) return;

  // 1. Background Theme (Custom vs Preset)
  if (editorState.customBgUrl) {
    editorCanvas.style.background = '';
    editorCanvas.style.backgroundImage = `url("${editorState.customBgUrl}")`;
    editorCanvas.style.backgroundSize = 'cover';
    editorCanvas.style.backgroundPosition = 'center';
  } else {
    editorCanvas.style.backgroundImage = '';
    editorCanvas.style.background = BG_PRESETS[editorState.bgTheme] || BG_PRESETS.sunset;
  }

  // 2. 3D Perspective Tilt
  editorCanvas.classList.remove('tilt-flat', 'tilt-left', 'tilt-right', 'tilt-isometric');
  editorCanvas.classList.add(`tilt-${editorState.tilt3D}`);

  // 3. Apple Device Mockup Frame
  editorVideoFrame.classList.remove('frame-macbook', 'frame-window', 'frame-glass');
  if (editorState.deviceFrame !== 'none') {
    editorVideoFrame.classList.add(`frame-${editorState.deviceFrame}`);
  }
  if (macbookNotch) {
    macbookNotch.classList.toggle('hidden', editorState.deviceFrame !== 'macbook');
  }
  if (macosWindowHeader) {
    macosWindowHeader.classList.toggle('hidden', editorState.deviceFrame !== 'window');
  }

  // 4. Padding
  editorCanvas.style.padding = `${editorState.padding}px`;
  if (valPadding) valPadding.textContent = `${editorState.padding}px`;

  // 5. Radius
  editorVideoFrame.style.borderRadius = `${editorState.radius}px`;
  if (valRadius) valRadius.textContent = `${editorState.radius}px`;

  // 6. Shadow
  if (editorState.shadow === 'none') {
    editorVideoFrame.style.boxShadow = 'none';
  } else if (editorState.shadow === 'soft') {
    editorVideoFrame.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.45)';
  } else if (editorState.shadow === 'floating') {
    editorVideoFrame.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.1)';
  } else if (editorState.shadow === 'neon') {
    editorVideoFrame.style.boxShadow = '0 0 35px rgba(168, 85, 247, 0.65), 0 20px 50px rgba(0, 0, 0, 0.8)';
  }

  // 7. Aspect Ratio
  if (editorState.aspectRatio === '16-9') {
    editorCanvas.style.aspectRatio = '16 / 9';
  } else if (editorState.aspectRatio === '9-16') {
    editorCanvas.style.aspectRatio = '9 / 16';
  } else if (editorState.aspectRatio === '1-1') {
    editorCanvas.style.aspectRatio = '1 / 1';
  } else {
    editorCanvas.style.aspectRatio = '16 / 9';
  }

  // 8. Zoom & Filter
  if (reviewVideo) {
    reviewVideo.style.transform = editorState.zoomEnabled ? `scale(${editorState.zoomLevel})` : 'none';

    if (editorState.colorFilter === 'vivid') {
      reviewVideo.style.filter = 'saturate(1.3) contrast(1.1)';
    } else if (editorState.colorFilter === 'cinema') {
      reviewVideo.style.filter = 'contrast(1.15) brightness(0.95) saturate(1.1)';
    } else if (editorState.colorFilter === 'cool') {
      reviewVideo.style.filter = 'hue-rotate(15deg) saturate(1.2) contrast(1.05)';
    } else {
      reviewVideo.style.filter = 'none';
    }
  }

  // 9. Loomus Watermark Pill
  if (editorWatermarkPill) {
    editorWatermarkPill.classList.toggle('hidden', !editorState.watermark);
  }

  // 10. Cursor Glow
  if (cursorGlowElement) {
    cursorGlowElement.classList.toggle('hidden', !editorState.cursorGlow);
  }

  // 11. Intro Overlay Elements
  if (introTitleDisplay) introTitleDisplay.textContent = editorState.introTitle || 'Demostración Rápida';
  if (introSubtitleDisplay) introSubtitleDisplay.textContent = editorState.introSubtitle || 'Loomus Studio';
  if (introAvatarIcon) introAvatarIcon.textContent = editorState.introEmoji || '🚀';
}

function updateTimelineUI() {
  if (!editorState.duration) return;

  const pctIn = (editorState.trimIn / editorState.duration) * 100;
  const pctOut = (editorState.trimOut / editorState.duration) * 100;
  const current = reviewVideo ? reviewVideo.currentTime : 0;
  const pctPlayhead = Math.min(100, Math.max(0, (current / editorState.duration) * 100));

  if (trimHandleIn) trimHandleIn.style.left = `${pctIn}%`;
  if (trimHandleOut) trimHandleOut.style.left = `${pctOut}%`;

  if (timelineTrimRegion) {
    timelineTrimRegion.style.left = `${pctIn}%`;
    timelineTrimRegion.style.right = `${Math.max(0, 100 - pctOut)}%`;
  }

  if (timelinePlayhead) {
    timelinePlayhead.style.left = `${pctPlayhead}%`;
  }

  if (trimInLabel) trimInLabel.textContent = formatTimeSec(editorState.trimIn);
  if (trimOutLabel) trimOutLabel.textContent = formatTimeSec(editorState.trimOut);
  if (editorCurrentTime) editorCurrentTime.textContent = formatTimeSec(current);
  if (editorTotalTime) editorTotalTime.textContent = formatTimeSec(editorState.duration);

  // Sync intro overlay visibility during playback
  if (editorIntroOverlay) {
    const elapsedSinceTrim = current - editorState.trimIn;
    const shouldShowIntro = editorState.introEnabled && elapsedSinceTrim >= 0 && elapsedSinceTrim <= editorState.introDuration;
    editorIntroOverlay.classList.toggle('hidden', !shouldShowIntro);
  }
}

function toggleEditorPlay() {
  if (!reviewVideo) return;
  if (reviewVideo.paused) {
    if (reviewVideo.currentTime >= editorState.trimOut) {
      reviewVideo.currentTime = editorState.trimIn;
    }
    reviewVideo.play();
  } else {
    reviewVideo.pause();
  }
}

// 8.1 Initialize Editor UI Event Listeners
function initEditorUI() {
  if (!reviewVideo) return;

  // Video Events
  reviewVideo.onplay = () => {
    editorState.isPlaying = true;
    if (playIconSvg) playIconSvg.classList.add('hidden');
    if (pauseIconSvg) pauseIconSvg.classList.remove('hidden');
  };

  reviewVideo.onpause = () => {
    editorState.isPlaying = false;
    if (playIconSvg) playIconSvg.classList.remove('hidden');
    if (pauseIconSvg) pauseIconSvg.classList.add('hidden');
  };

  reviewVideo.ontimeupdate = () => {
    if (reviewVideo.currentTime >= editorState.trimOut) {
      reviewVideo.pause();
      reviewVideo.currentTime = editorState.trimIn;
    }
    updateTimelineUI();
  };

  if (btnEditorPlayPause) {
    btnEditorPlayPause.onclick = toggleEditorPlay;
  }

  // Keyboard shortcut: Spacebar to toggle play/pause when editor modal is open
  window.addEventListener('keydown', (e) => {
    if (reviewModal && !reviewModal.classList.contains('hidden') && e.code === 'Space') {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      e.preventDefault();
      toggleEditorPlay();
    }
  });

  // Timeline Scrubbing / Seeking
  if (timelineTrack) {
    timelineTrack.addEventListener('pointerdown', (e) => {
      if (editorState.draggingHandle) return;
      const rect = timelineTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const targetTime = pct * editorState.duration;
      reviewVideo.currentTime = Math.max(editorState.trimIn, Math.min(editorState.trimOut, targetTime));
      updateTimelineUI();
    });
  }

  // Draggable Trim Handles
  const setupTrimDrag = (handle, type) => {
    if (!handle) return;
    handle.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      e.preventDefault();
      editorState.draggingHandle = type;
      handle.classList.add('dragging');
      if (reviewVideo) reviewVideo.pause();

      const onPointerMove = (ev) => {
        if (!editorState.draggingHandle || !timelineTrack) return;
        const rect = timelineTrack.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
        const newTime = pct * editorState.duration;

        if (type === 'start') {
          editorState.trimIn = Math.min(newTime, Math.max(0, editorState.trimOut - 0.3));
          reviewVideo.currentTime = editorState.trimIn;
        } else {
          editorState.trimOut = Math.max(newTime, Math.min(editorState.duration, editorState.trimIn + 0.3));
          reviewVideo.currentTime = editorState.trimOut;
        }
        updateTimelineUI();
      };

      const onPointerUp = () => {
        editorState.draggingHandle = null;
        handle.classList.remove('dragging');
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    });
  };

  setupTrimDrag(trimHandleIn, 'start');
  setupTrimDrag(trimHandleOut, 'end');

  // Quick Trim Buttons
  if (btnSetTrimIn) {
    btnSetTrimIn.onclick = () => {
      editorState.trimIn = Math.min(reviewVideo.currentTime, Math.max(0, editorState.trimOut - 0.3));
      updateTimelineUI();
    };
  }

  if (btnSetTrimOut) {
    btnSetTrimOut.onclick = () => {
      editorState.trimOut = Math.max(reviewVideo.currentTime, Math.min(editorState.duration, editorState.trimIn + 0.3));
      updateTimelineUI();
    };
  }

  if (btnResetTrim) {
    btnResetTrim.onclick = () => {
      editorState.trimIn = 0;
      editorState.trimOut = editorState.duration;
      reviewVideo.currentTime = 0;
      updateTimelineUI();
    };
  }

  // Playback Speed
  if (editorPlaybackSpeed) {
    editorPlaybackSpeed.onchange = () => {
      const spd = parseFloat(editorPlaybackSpeed.value) || 1;
      editorState.playbackRate = spd;
      if (reviewVideo) reviewVideo.playbackRate = spd;
    };
  }

  // Tabs Switching
  document.querySelectorAll('.tab-pill-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      document.querySelectorAll('.editor-tab-pane').forEach(p => p.classList.remove('active'));
      if (target === 'canvas') document.getElementById('tabPaneCanvas')?.classList.add('active');
      if (target === 'effects') document.getElementById('tabPaneEffects')?.classList.add('active');
      if (target === 'intro') document.getElementById('tabPaneIntro')?.classList.add('active');
    };
  });

  // Background Swatches
  document.querySelectorAll('.bg-swatch').forEach(sw => {
    sw.onclick = () => {
      document.querySelectorAll('.bg-swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      editorState.customBgUrl = null;
      editorState.customBgImage = null;
      if (btnClearBg) btnClearBg.classList.add('hidden');
      editorState.bgTheme = sw.dataset.bg || 'sunset';
      updateEditorPreview();
    };
  });

  // Custom Wallpaper Upload
  if (btnUploadBg && inputCustomBg) {
    btnUploadBg.onclick = () => inputCustomBg.click();
    inputCustomBg.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataUrl = evt.target.result;
        editorState.customBgUrl = dataUrl;
        const img = new Image();
        img.onload = () => {
          editorState.customBgImage = img;
          updateEditorPreview();
        };
        img.src = dataUrl;
        if (btnClearBg) btnClearBg.classList.remove('hidden');
        document.querySelectorAll('.bg-swatch').forEach(s => s.classList.remove('active'));
      };
      reader.readAsDataURL(file);
    };
  }

  if (btnClearBg) {
    btnClearBg.onclick = () => {
      editorState.customBgUrl = null;
      editorState.customBgImage = null;
      btnClearBg.classList.add('hidden');
      if (inputCustomBg) inputCustomBg.value = '';
      const defaultSwatch = document.querySelector('.bg-swatch[data-bg="sunset"]') || document.querySelector('.bg-swatch');
      if (defaultSwatch) {
        document.querySelectorAll('.bg-swatch').forEach(s => s.classList.remove('active'));
        defaultSwatch.classList.add('active');
        editorState.bgTheme = defaultSwatch.dataset.bg || 'sunset';
      }
      updateEditorPreview();
    };
  }

  // Sliders
  if (inputPadding) {
    inputPadding.oninput = () => {
      editorState.padding = parseInt(inputPadding.value, 10);
      updateEditorPreview();
    };
  }

  if (inputRadius) {
    inputRadius.oninput = () => {
      editorState.radius = parseInt(inputRadius.value, 10);
      updateEditorPreview();
    };
  }

  // Chips: Shadow
  document.querySelectorAll('#shadowChips .chip-option').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#shadowChips .chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.shadow = chip.dataset.shadow || 'floating';
      updateEditorPreview();
    };
  });

  // Chips: Ratio
  document.querySelectorAll('#ratioChips .chip-option').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#ratioChips .chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.aspectRatio = chip.dataset.ratio || 'auto';
      updateEditorPreview();
    };
  });

  // Chips: Apple Device Mockup Frame
  document.querySelectorAll('#frameChips .chip-option').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#frameChips .chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.deviceFrame = chip.dataset.frame || 'none';
      updateEditorPreview();
    };
  });

  // Chips: Apple 3D Tilt Presets
  document.querySelectorAll('#tiltChips .chip-option').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#tiltChips .chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.tilt3D = chip.dataset.tilt || 'flat';
      updateEditorPreview();
    };
  });

  // Zoom & Filter
  if (toggleZoom) {
    toggleZoom.onchange = () => {
      editorState.zoomEnabled = toggleZoom.checked;
      if (zoomLevelRow) zoomLevelRow.classList.toggle('hidden', !toggleZoom.checked);
      updateEditorPreview();
    };
  }

  document.querySelectorAll('#zoomLevelChips .chip-option').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#zoomLevelChips .chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.zoomLevel = parseFloat(chip.dataset.zoom) || 1.1;
      updateEditorPreview();
    };
  });

  if (toggleCursorGlow) {
    toggleCursorGlow.onchange = () => {
      editorState.cursorGlow = toggleCursorGlow.checked;
      updateEditorPreview();
    };
  }

  document.querySelectorAll('#filterChips .chip-option').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#filterChips .chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.colorFilter = chip.dataset.filter || 'none';
      updateEditorPreview();
    };
  });

  // Loomus Watermark Toggle
  if (toggleWatermark) {
    toggleWatermark.onchange = () => {
      editorState.watermark = toggleWatermark.checked;
      updateEditorPreview();
    };
  }

  // Keyboard Shortcuts for Studio Review Modal
  window.addEventListener('keydown', (e) => {
    if (reviewModal.classList.contains('hidden') || editorState.isExporting) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (reviewVideo.paused) {
        if (reviewVideo.currentTime >= editorState.trimOut) {
          reviewVideo.currentTime = editorState.trimIn;
        }
        reviewVideo.play();
      } else {
        reviewVideo.pause();
      }
    } else if (e.code === 'KeyI') {
      e.preventDefault();
      editorState.trimIn = Math.min(reviewVideo.currentTime, Math.max(0, editorState.trimOut - 0.3));
      updateTimelineUI();
    } else if (e.code === 'KeyO') {
      e.preventDefault();
      editorState.trimOut = Math.max(reviewVideo.currentTime, Math.min(editorState.duration, editorState.trimIn + 0.3));
      updateTimelineUI();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      reviewVideo.currentTime = Math.max(editorState.trimIn, reviewVideo.currentTime - 1);
      updateTimelineUI();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      reviewVideo.currentTime = Math.min(editorState.trimOut, reviewVideo.currentTime + 1);
      updateTimelineUI();
    } else if (e.code === 'Escape') {
      reviewVideo.pause();
      reviewModal.classList.add('hidden');
    }
  });

  // Intro Card
  if (toggleIntroCard) {
    toggleIntroCard.onchange = () => {
      editorState.introEnabled = toggleIntroCard.checked;
      if (introCardConfig) introCardConfig.classList.toggle('hidden', !toggleIntroCard.checked);
      updateTimelineUI();
    };
  }

  if (inputIntroTitle) {
    inputIntroTitle.oninput = () => {
      editorState.introTitle = inputIntroTitle.value;
      updateEditorPreview();
    };
  }

  if (inputIntroSubtitle) {
    inputIntroSubtitle.oninput = () => {
      editorState.introSubtitle = inputIntroSubtitle.value;
      updateEditorPreview();
    };
  }

  document.querySelectorAll('#emojiPickerRow .emoji-chip').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#emojiPickerRow .emoji-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.introEmoji = chip.dataset.emoji || '🚀';
      updateEditorPreview();
    };
  });

  document.querySelectorAll('#introDurChips .chip-option').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#introDurChips .chip-option').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      editorState.introDuration = parseInt(chip.dataset.introDur, 10) || 3;
      updateTimelineUI();
    };
  });

  // Action Buttons
  if (btnSaveRawVideo) {
    btnSaveRawVideo.onclick = async () => {
      if (!state.recordedBlob) return;
      const arrayBuffer = await state.recordedBlob.arrayBuffer();
      const titleName = (editorVideoTitle?.value || 'Loomus_Grabacion').replace(/[^a-zA-Z0-9_-]/g, '_');
      const ext = state.recordingExtension || 'mp4';
      const defaultName = `${titleName}_Original_${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}.${ext}`;

      const res = await window.loomus?.saveRecording(arrayBuffer, defaultName);
      if (res && res.success) {
        state.lastSavedFilePath = res.filePath;
        if (savedAlertText) savedAlertText.textContent = i18n[currentLang].savedSuccess;
        savedAlert.classList.remove('hidden');
        playBeep(880, 'sine', 0.15);
      }
    };
  }

  if (btnExportEditedVideo) {
    btnExportEditedVideo.onclick = () => {
      exportEditedVideo();
    };
  }

  if (btnDiscardRecording) {
    btnDiscardRecording.onclick = () => {
      if (reviewVideo) {
        reviewVideo.pause();
        reviewVideo.src = '';
      }
      reviewModal.classList.add('hidden');
      state.recordedChunks = [];
      state.recordedBlob = null;
    };
  }

  if (modalCloseBtn) {
    modalCloseBtn.onclick = () => {
      if (reviewVideo) reviewVideo.pause();
      reviewModal.classList.add('hidden');
    };
  }

  if (btnOpenInFolder) {
    btnOpenInFolder.onclick = () => {
      if (state.lastSavedFilePath) {
        window.loomus?.showInFolder(state.lastSavedFilePath);
      }
    };
  }
}

// 8.2 Show Editor on Recording Stopped
async function handleRecordingStopped() {
  if (annotationToolbar) annotationToolbar.classList.add('hidden');
  if (annotationCanvas) annotationCanvas.classList.remove('active');
  inking.active = false;
  const optimal = getOptimalVideoCodec();
  state.recordedBlob = new Blob(state.recordedChunks, { type: optimal.container });
  const videoUrl = URL.createObjectURL(state.recordedBlob);
  reviewVideo.src = videoUrl;

  const sizeMb = (state.recordedBlob.size / (1024 * 1024)).toFixed(2);
  const m = Math.floor(state.recordingSeconds / 60).toString().padStart(2, '0');
  const s = (state.recordingSeconds % 60).toString().padStart(2, '0');

  const dict = i18n[currentLang];
  if (videoDurationLabel) videoDurationLabel.textContent = `${dict.durationLabel} ${m}:${s}`;
  if (videoSizeLabel) videoSizeLabel.textContent = `${dict.sizeLabel} ${sizeMb} MB`;
  if (editorVideoTitle) editorVideoTitle.value = `Loomus_Grabacion_${new Date().toLocaleDateString('es-ES').replace(/\//g, '-')}`;

  savedAlert?.classList.add('hidden');
  exportProgressBox?.classList.add('hidden');
  reviewModal.classList.remove('hidden');

  reviewVideo.onloadedmetadata = () => {
    editorState.duration = reviewVideo.duration || state.recordingSeconds || 1;
    editorState.trimIn = 0;
    editorState.trimOut = editorState.duration;
    updateEditorPreview();
    updateTimelineUI();
    reviewVideo.currentTime = 0;
    reviewVideo.play();
  };
}

// 8.3 Canvas Exporter Engine with Studio Effects (Hardware-Accelerated + Double-Buffered)
async function exportEditedVideo() {
  if (!state.recordedBlob || editorState.isExporting) return;
  editorState.isExporting = true;

  if (reviewVideo) reviewVideo.pause();
  if (exportProgressBox) exportProgressBox.classList.remove('hidden');
  if (exportStatusText) exportStatusText.textContent = i18n[currentLang].processingVideo;
  if (exportPercentText) exportPercentText.textContent = '0%';
  if (exportProgressFill) exportProgressFill.style.width = '0%';

  // Set up export canvas
  const exportCanvas = document.createElement('canvas');
  let cw = 1920;
  let ch = 1080;

  if (editorState.aspectRatio === '9-16') {
    cw = 1080;
    ch = 1920;
  } else if (editorState.aspectRatio === '1-1') {
    cw = 1080;
    ch = 1080;
  }
  exportCanvas.width = cw;
  exportCanvas.height = ch;
  const ctx = exportCanvas.getContext('2d');

  // Clone video for rendering
  const renderVideo = document.createElement('video');
  renderVideo.src = URL.createObjectURL(state.recordedBlob);
  renderVideo.muted = true; // export silently without disturbing speakers

  await new Promise((resolve) => {
    renderVideo.onloadedmetadata = resolve;
  });

  const stream = exportCanvas.captureStream(60);

  // Capture Audio silently into export stream without playing through MacBook speakers
  let audioCtx = null;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const sourceNode = audioCtx.createMediaElementSource(renderVideo);
    const destNode = audioCtx.createMediaStreamDestination();
    sourceNode.connect(destNode);
    // Note: Do NOT connect sourceNode to audioCtx.destination so MacBook speakers remain quiet and unburdened
    const audioTracks = destNode.stream.getAudioTracks();
    if (audioTracks.length > 0) {
      stream.addTrack(audioTracks[0]);
    }
  } catch (audioErr) {
    console.warn('Audio capture note:', audioErr);
  }

  const optimal = getOptimalVideoCodec();
  const exportChunks = [];
  const exportRecorder = new MediaRecorder(stream, {
    mimeType: optimal.mime,
    videoBitsPerSecond: 8000000 // 8 Mbps hardware-accelerated H.264
  });

  exportRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) exportChunks.push(e.data);
  };

  const trimDuration = Math.max(0.1, editorState.trimOut - editorState.trimIn);

  // ==============================================================
  // PERFORMANCE CRITICAL OPTIMIZATION: DOUBLE BUFFERING / STATIC CACHE
  // Pre-render static background wallpaper, device frame, and drop shadow
  // ONCE to an offscreen cache canvas instead of calculating Gaussian blur
  // and complex linear/radial gradients 60 times per second on the CPU!
  // ==============================================================
  const padRatio = editorState.padding / 400;
  const padX = cw * padRatio;
  const padY = ch * padRatio;
  const availW = cw - padX * 2;
  const availH = ch - padY * 2;

  const vidNativeRatio = (renderVideo.videoWidth || 16) / (renderVideo.videoHeight || 9);
  let destW = availW;
  let destH = destW / vidNativeRatio;
  if (destH > availH) {
    destH = availH;
    destW = destH * vidNativeRatio;
  }
  const destX = (cw - destW) / 2;
  const destY = (ch - destH) / 2;
  const cornerRad = (editorState.radius / 18) * (cw * 0.015);

  const staticCacheCanvas = document.createElement('canvas');
  staticCacheCanvas.width = cw;
  staticCacheCanvas.height = ch;
  const sctx = staticCacheCanvas.getContext('2d');

  // Render static background once
  if (editorState.customBgImage && editorState.customBgImage.complete && editorState.customBgImage.naturalWidth > 0) {
    sctx.drawImage(editorState.customBgImage, 0, 0, cw, ch);
  } else if (editorState.bgTheme === 'sequoia') {
    const g = sctx.createLinearGradient(0, 0, cw, ch);
    g.addColorStop(0, '#064e3b');
    g.addColorStop(0.35, '#047857');
    g.addColorStop(0.7, '#059669');
    g.addColorStop(1, '#d97706');
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'sonoma') {
    const g = sctx.createLinearGradient(0, 0, cw, ch);
    g.addColorStop(0, '#fbbf24');
    g.addColorStop(0.4, '#f43f5e');
    g.addColorStop(0.8, '#c084fc');
    g.addColorStop(1, '#6366f1');
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'keynote') {
    sctx.fillStyle = '#030712';
    sctx.fillRect(0, 0, cw, ch);
    const r1 = sctx.createRadialGradient(0, 0, 10, 0, 0, cw * 0.7);
    r1.addColorStop(0, 'rgba(59, 130, 246, 0.75)');
    r1.addColorStop(1, 'transparent');
    sctx.fillStyle = r1;
    sctx.fillRect(0, 0, cw, ch);
    const r2 = sctx.createRadialGradient(cw, ch, 10, cw, ch, cw * 0.7);
    r2.addColorStop(0, 'rgba(236, 72, 153, 0.7)');
    r2.addColorStop(1, 'transparent');
    sctx.fillStyle = r2;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'sunset') {
    const g = sctx.createLinearGradient(0, 0, cw, ch);
    g.addColorStop(0, '#f97316');
    g.addColorStop(0.5, '#ec4899');
    g.addColorStop(1, '#8b5cf6');
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'cyber') {
    const g = sctx.createLinearGradient(0, 0, cw, ch);
    g.addColorStop(0, '#06b6d4');
    g.addColorStop(0.5, '#3b82f6');
    g.addColorStop(1, '#9333ea');
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'aurora') {
    const g = sctx.createLinearGradient(0, 0, cw, ch);
    g.addColorStop(0, '#10b981');
    g.addColorStop(0.5, '#06b6d4');
    g.addColorStop(1, '#6366f1');
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'rosegold') {
    const g = sctx.createLinearGradient(0, 0, cw, ch);
    g.addColorStop(0, '#f43f5e');
    g.addColorStop(0.5, '#fb7185');
    g.addColorStop(1, '#fda4af');
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'obsidian') {
    const g = sctx.createLinearGradient(0, 0, cw, ch);
    g.addColorStop(0, '#18181b');
    g.addColorStop(0.5, '#27272a');
    g.addColorStop(1, '#09090b');
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, cw, ch);
  } else if (editorState.bgTheme === 'mesh') {
    sctx.fillStyle = '#0f172a';
    sctx.fillRect(0, 0, cw, ch);
    const r1 = sctx.createRadialGradient(0, 0, 10, 0, 0, cw * 0.7);
    r1.addColorStop(0, 'rgba(124, 58, 237, 0.7)');
    r1.addColorStop(1, 'transparent');
    sctx.fillStyle = r1;
    sctx.fillRect(0, 0, cw, ch);
    const r2 = sctx.createRadialGradient(cw, ch, 10, cw, ch, cw * 0.7);
    r2.addColorStop(0, 'rgba(219, 39, 119, 0.7)');
    r2.addColorStop(1, 'transparent');
    sctx.fillStyle = r2;
    sctx.fillRect(0, 0, cw, ch);
  } else {
    sctx.fillStyle = '#000000';
    sctx.fillRect(0, 0, cw, ch);
  }

  // Pre-render Device Mockup Bezel or Shadow in static cache
  sctx.save();
  if (editorState.tilt3D === 'tilt-left') {
    sctx.translate(cw / 2, ch / 2);
    sctx.transform(0.97, -0.04, 0, 0.98, 0, 0);
    sctx.translate(-cw / 2, -ch / 2);
  } else if (editorState.tilt3D === 'tilt-right') {
    sctx.translate(cw / 2, ch / 2);
    sctx.transform(0.97, 0.04, 0, 0.98, 0, 0);
    sctx.translate(-cw / 2, -ch / 2);
  } else if (editorState.tilt3D === 'isometric') {
    sctx.translate(cw / 2, ch / 2);
    sctx.transform(0.95, -0.045, 0.025, 0.95, 0, 0);
    sctx.translate(-cw / 2, -ch / 2);
  }

  if (editorState.deviceFrame === 'macbook') {
    const bezel = 22;
    sctx.save();
    sctx.fillStyle = '#14161f';
    sctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    sctx.shadowBlur = 45;
    sctx.shadowOffsetY = 22;
    sctx.beginPath();
    if (sctx.roundRect) sctx.roundRect(destX - bezel, destY - bezel, destW + bezel * 2, destH + bezel * 2 + 12, cornerRad + 8);
    else sctx.rect(destX - bezel, destY - bezel, destW + bezel * 2, destH + bezel * 2 + 12);
    sctx.fill();
    sctx.restore();

    // Top Camera Notch
    const notchW = 120;
    const notchH = 16;
    sctx.fillStyle = '#14161f';
    sctx.beginPath();
    if (sctx.roundRect) sctx.roundRect(cw / 2 - notchW / 2, destY - bezel, notchW, notchH, [0, 0, 8, 8]);
    sctx.fill();

    // Green webcam status LED
    sctx.fillStyle = '#22c55e';
    sctx.beginPath();
    sctx.arc(cw / 2, destY - bezel + 8, 2.5, 0, Math.PI * 2);
    sctx.fill();
  } else if (editorState.deviceFrame === 'window') {
    const winH = 34;
    sctx.save();
    sctx.fillStyle = 'rgba(24, 29, 42, 0.96)';
    sctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
    sctx.shadowBlur = 35;
    sctx.shadowOffsetY = 16;
    sctx.beginPath();
    if (sctx.roundRect) sctx.roundRect(destX, destY - winH, destW, winH, [cornerRad, cornerRad, 0, 0]);
    sctx.fill();
    sctx.restore();

    // Traffic light dots
    sctx.fillStyle = '#ff5f56'; sctx.beginPath(); sctx.arc(destX + 16, destY - winH / 2, 5.5, 0, Math.PI * 2); sctx.fill();
    sctx.fillStyle = '#ffbd2e'; sctx.beginPath(); sctx.arc(destX + 34, destY - winH / 2, 5.5, 0, Math.PI * 2); sctx.fill();
    sctx.fillStyle = '#27c93f'; sctx.beginPath(); sctx.arc(destX + 52, destY - winH / 2, 5.5, 0, Math.PI * 2); sctx.fill();

    // Document title in titlebar
    sctx.fillStyle = '#94a3b8';
    sctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    sctx.textAlign = 'center';
    sctx.fillText('Loomus Studio Pro', destX + destW / 2, destY - 11);
    sctx.textAlign = 'left';
  } else {
    // Standard shadow pre-rendered once
    sctx.save();
    if (editorState.shadow === 'floating') {
      sctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
      sctx.shadowBlur = 45;
      sctx.shadowOffsetY = 25;
    } else if (editorState.shadow === 'neon') {
      sctx.shadowColor = 'rgba(168, 85, 247, 0.7)';
      sctx.shadowBlur = 50;
      sctx.shadowOffsetY = 10;
    } else if (editorState.shadow === 'soft') {
      sctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      sctx.shadowBlur = 25;
      sctx.shadowOffsetY = 12;
    }
    sctx.fillStyle = '#000000';
    sctx.beginPath();
    if (sctx.roundRect) sctx.roundRect(destX, destY, destW, destH, cornerRad);
    else sctx.rect(destX, destY, destW, destH);
    sctx.fill();
    sctx.restore();
  }
  sctx.restore(); // restore tilt

  return new Promise((resolve) => {
    exportRecorder.onstop = async () => {
      if (audioCtx) {
        try { audioCtx.close(); } catch {}
      }

      const finalBlob = new Blob(exportChunks, { type: optimal.container });
      const arrayBuffer = await finalBlob.arrayBuffer();

      const titleName = (editorVideoTitle?.value || 'Loomus_Grabacion').replace(/[^a-zA-Z0-9_-]/g, '_');
      const defaultName = `${titleName}_LoomusMaxima_${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}.${optimal.ext}`;

      const res = await window.loomus?.saveRecording(arrayBuffer, defaultName);
      if (res && res.success) {
        state.lastSavedFilePath = res.filePath;
        if (savedAlertText) savedAlertText.textContent = i18n[currentLang].savedEditedSuccess;
        savedAlert?.classList.remove('hidden');
        playBeep(880, 'sine', 0.2);
      }

      if (exportProgressBox) exportProgressBox.classList.add('hidden');
      editorState.isExporting = false;
      renderVideo.pause();
      renderVideo.src = '';
      resolve();
    };

    renderVideo.currentTime = editorState.trimIn;
    renderVideo.onseeked = () => {
      renderVideo.onseeked = null;
      exportRecorder.start(250);
      renderVideo.play();

      function drawFrame() {
        if (!editorState.isExporting) return;

        const currentSec = renderVideo.currentTime;
        if (currentSec >= editorState.trimOut || renderVideo.ended) {
          exportRecorder.stop();
          return;
        }

        // 1. Instant 0.05ms GPU blit of pre-rendered static background & frame
        ctx.drawImage(staticCacheCanvas, 0, 0);

        // 2. Apply 3D Tilt Transform for Video Content
        ctx.save();
        if (editorState.tilt3D === 'tilt-left') {
          ctx.translate(cw / 2, ch / 2);
          ctx.transform(0.97, -0.04, 0, 0.98, 0, 0);
          ctx.translate(-cw / 2, -ch / 2);
        } else if (editorState.tilt3D === 'tilt-right') {
          ctx.translate(cw / 2, ch / 2);
          ctx.transform(0.97, 0.04, 0, 0.98, 0, 0);
          ctx.translate(-cw / 2, -ch / 2);
        } else if (editorState.tilt3D === 'isometric') {
          ctx.translate(cw / 2, ch / 2);
          ctx.transform(0.95, -0.045, 0.025, 0.95, 0, 0);
          ctx.translate(-cw / 2, -ch / 2);
        }

        // 3. Clip & Draw Video with Zoom & Filters
        ctx.save();
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(destX, destY, destW, destH, cornerRad);
        } else {
          ctx.rect(destX, destY, destW, destH);
        }
        ctx.clip();

        if (editorState.colorFilter === 'vivid') {
          ctx.filter = 'saturate(1.35) contrast(1.1)';
        } else if (editorState.colorFilter === 'cinema') {
          ctx.filter = 'contrast(1.15) brightness(0.95) saturate(1.1)';
        } else if (editorState.colorFilter === 'cool') {
          ctx.filter = 'hue-rotate(15deg) saturate(1.2) contrast(1.05)';
        }

        if (editorState.zoomEnabled) {
          const z = editorState.zoomLevel;
          const cx = destX + destW / 2;
          const cy = destY + destH / 2;
          ctx.translate(cx, cy);
          ctx.scale(z, z);
          ctx.translate(-cx, -cy);
        }

        ctx.drawImage(renderVideo, destX, destY, destW, destH);
        ctx.restore();

        // 4. Animated Intro Card Overlay
        const elapsedSinceTrim = currentSec - editorState.trimIn;
        if (editorState.introEnabled && elapsedSinceTrim >= 0 && elapsedSinceTrim <= editorState.introDuration) {
          let alpha = 1;
          const introFadeSec = 0.5;
          if (elapsedSinceTrim < introFadeSec) {
            alpha = elapsedSinceTrim / introFadeSec;
          } else if (elapsedSinceTrim > editorState.introDuration - introFadeSec) {
            alpha = (editorState.introDuration - elapsedSinceTrim) / introFadeSec;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

          const cardX = destX + 24;
          const cardY = destY + 24;
          const cardW = 340;
          const cardH = 68;

          ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
          ctx.shadowBlur = 18;
          ctx.beginPath();
          if (ctx.roundRect) ctx.roundRect(cardX, cardY, cardW, cardH, 34);
          else ctx.rect(cardX, cardY, cardW, cardH);
          ctx.fill();

          // Emoji Icon
          ctx.font = '28px sans-serif';
          ctx.fillText(editorState.introEmoji || '🚀', cardX + 16, cardY + 44);

          // Texts
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
          ctx.fillText(editorState.introTitle || 'Demostración Rápida', cardX + 58, cardY + 30);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '500 12px "Plus Jakarta Sans", sans-serif';
          ctx.fillText(editorState.introSubtitle || 'Loomus Studio', cardX + 58, cardY + 50);

          ctx.restore();
        }

        // 5. Loomus Maxima Watermark Badge
        if (editorState.watermark) {
          const wmX = destX + destW - 176;
          const wmY = destY + destH - 42;
          ctx.save();
          ctx.fillStyle = 'rgba(15, 20, 30, 0.88)';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          if (ctx.roundRect) ctx.roundRect(wmX, wmY, 156, 30, 15);
          else ctx.rect(wmX, wmY, 156, 30);
          ctx.fill();

          if (loomusLogoImg.complete && loomusLogoImg.naturalWidth > 0) {
            ctx.drawImage(loomusLogoImg, wmX + 8, wmY + 5, 20, 20);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
            ctx.fillText('Loomus Maxima', wmX + 34, wmY + 19);
          } else {
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
            ctx.fillText('✨ Loomus Maxima', wmX + 14, wmY + 19);
          }
          ctx.restore();
        }

        ctx.restore(); // Restore 3D tilt transform

        // 6. Update progress bar
        const progressPct = Math.min(100, Math.round(((currentSec - editorState.trimIn) / trimDuration) * 100));
        if (exportPercentText) exportPercentText.textContent = `${progressPct}%`;
        if (exportProgressFill) exportProgressFill.style.width = `${progressPct}%`;

        requestAnimationFrame(drawFrame);
      }

      requestAnimationFrame(drawFrame);
    };
  });
}

// ========================
// 9. INITIALIZATION
// ========================
window.addEventListener('DOMContentLoaded', async () => {
  if (window.loomus?.platform === 'win32') {
    document.body.classList.add('is-windows');
  } else {
    document.body.classList.add('is-mac');
  }
  await initLocale();
  await enumerateDevices();
  await loadSources();
  initEditorUI();
  initInkingControls();
  initModeSelector();
});
