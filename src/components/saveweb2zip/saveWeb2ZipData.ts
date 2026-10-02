export type SupportedLanguage = 'en' | 'es' | 'ru';

export interface LangContent {
  brandName: string;
  tagline: string;
  saveTitle: string;
  placeholderUrl: string;
  saveButton: string;
  downloadingButton: string;
  optionRename: string;
  optionMobile: string;
  optionSimplified: string;
  optionSaveStructure: string;
  tooltipSimplified: string;
  tooltipSaveStructure: string;
  prefTitle: string;
  prefDescHtml: string;
  htmlCard: string;
  cssCard: string;
  imagesCard: string;
  fontsCard: string;
  telegramText: string;
  popupSuccessTitle: string;
  popupSuccessParagraph: string;
  popupBookmarkSpan: string;
  popupCloseBtn: string;
  popupDownloadAgain: string;
  popupViewTree: string;
  incorrectLink: string;
  popupDeclineTitle: string;
  faqTitle: string;
  sampleSitesTitle: string;
}

export const I18N_CONTENT: Record<SupportedLanguage, LangContent> = {
  en: {
    brandName: 'SaveWeb2ZIP',
    tagline: 'Website Copier Online Tool',
    saveTitle: 'Save a website to ZIP',
    placeholderUrl: 'Enter webpage url',
    saveButton: 'Save',
    downloadingButton: 'Downloading',
    optionRename: 'Rename all assets',
    optionMobile: 'Copy mobile version of website',
    optionSimplified: 'Simplified download',
    optionSaveStructure: 'Save website structure',
    tooltipSimplified: "If you couldn't copy the site in the standard way. Check the box to try downloading the site using a different algorithm.",
    tooltipSaveStructure: "Copy the site while preserving the original structure of the site's resource folders.",
    prefTitle: "Downloading all website's files to archive",
    prefDescHtml: "<i>Download</i> a landing page, full website, or any page absolutely for free. <i>Add your site's url</i> to the input box and click <i>«Save»</i> button to get the archive with all files.",
    htmlCard: 'Html',
    cssCard: 'CSS & JavaScript',
    imagesCard: 'Images',
    fontsCard: 'Fonts',
    telegramText: 'Download any website with the telegram bot - @webtozip_bot',
    popupSuccessTitle: 'Website is ready for download!',
    popupSuccessParagraph: 'Were we able to help you download the site? ',
    popupBookmarkSpan: 'Press ctrl+d',
    popupCloseBtn: 'Close',
    popupDownloadAgain: 'Download Archive Again',
    popupViewTree: 'Inspect Archive Files',
    incorrectLink: 'Oops... There is something wrong with the link :( Try copying the link from the browser line',
    popupDeclineTitle: 'Oops... Something was wrong :(',
    faqTitle: 'Frequently Asked Questions',
    sampleSitesTitle: 'Try with sample websites:'
  },
  es: {
    brandName: 'SaveWeb2ZIP',
    tagline: 'Herramienta en línea para copiar sitios web',
    saveTitle: 'Guardar sitio web en ZIP',
    placeholderUrl: 'Ingrese la url de la página web',
    saveButton: 'Guardar',
    downloadingButton: 'Descargando',
    optionRename: 'Renombrar todos los recursos',
    optionMobile: 'Copiar versión móvil del sitio',
    optionSimplified: 'Descarga simplificada',
    optionSaveStructure: 'Guardar estructura del sitio',
    tooltipSimplified: 'Si no pudo copiar el sitio de forma estándar, active esta casilla para probar con un algoritmo diferente.',
    tooltipSaveStructure: 'Copia el sitio conservando la estructura original de carpetas de recursos.',
    prefTitle: 'Descargando todos los archivos del sitio en archivo ZIP',
    prefDescHtml: '<i>Descargue</i> una página de aterrizaje, sitio completo o cualquier página totalmente gratis. <i>Agregue la url</i> en el cuadro y presione <i>«Guardar»</i> para obtener el archivo con todos los recursos.',
    htmlCard: 'Html',
    cssCard: 'CSS y JavaScript',
    imagesCard: 'Imágenes',
    fontsCard: 'Fuentes',
    telegramText: 'Descargue cualquier sitio web con el bot de Telegram - @webtozip_bot',
    popupSuccessTitle: '¡El sitio web está listo para descargar!',
    popupSuccessParagraph: '¿Pudimos ayudarte a descargar el sitio? ',
    popupBookmarkSpan: 'Presione ctrl+d',
    popupCloseBtn: 'Cerrar',
    popupDownloadAgain: 'Descargar archivo de nuevo',
    popupViewTree: 'Inspeccionar archivos',
    incorrectLink: 'Ups... Algo está mal con el enlace :( Intenta copiar el enlace de la barra del navegador',
    popupDeclineTitle: 'Ups... Algo salió mal :(',
    faqTitle: 'Preguntas Frecuentes',
    sampleSitesTitle: 'Probar con sitios de muestra:'
  },
  ru: {
    brandName: 'SaveWeb2ZIP',
    tagline: 'Онлайн инструмент для копирования сайтов',
    saveTitle: 'Скачать сайт в ZIP архив',
    placeholderUrl: 'Введите адрес веб-страницы',
    saveButton: 'Скачать',
    downloadingButton: 'Загрузка',
    optionRename: 'Переименовать все файлы',
    optionMobile: 'Скопировать мобильную версию сайта',
    optionSimplified: 'Упрощенная загрузка',
    optionSaveStructure: 'Сохранить структуру сайта',
    tooltipSimplified: 'Если сайт не удается скопировать стандартным методом, выберите этот пункт для использования альтернативного алгоритма.',
    tooltipSaveStructure: 'Копировать сайт с сохранением исходной структуры папок и ресурсов.',
    prefTitle: 'Загрузка всех файлов веб-сайта в архив',
    prefDescHtml: '<i>Скачивайте</i> посадочные страницы, полные сайты или любые веб-страницы абсолютно бесплатно. <i>Введите url сайта</i> в поле ввода и нажмите кнопку <i>«Скачать»</i>, чтобы получить ZIP архив со всеми файлами.',
    htmlCard: 'Html',
    cssCard: 'CSS и JavaScript',
    imagesCard: 'Изображения',
    fontsCard: 'Шрифты',
    telegramText: 'Скачивайте сайты в Telegram боте - @webtozip_bot',
    popupSuccessTitle: 'Сайт готов к скачиванию!',
    popupSuccessParagraph: 'Мы смогли помочь вам скачать сайт? ',
    popupBookmarkSpan: 'Нажмите ctrl+d',
    popupCloseBtn: 'Закрыть',
    popupDownloadAgain: 'Скачать архив снова',
    popupViewTree: 'Просмотреть файлы архива',
    incorrectLink: 'Упс... Что-то не так со ссылкой :( Попробуйте скопировать ссылку из адресной строки браузера',
    popupDeclineTitle: 'Упс... Что-то пошло не так :(',
    faqTitle: 'Часто задаваемые вопросы',
    sampleSitesTitle: 'Попробовать на примерах:'
  }
};

export interface SaveWebFaqItem {
  q: string;
  a: string;
}

export const SAVEWEB_FAQS: SaveWebFaqItem[] = [
  {
    q: 'How does SaveWeb2ZIP download websites?',
    a: 'SaveWeb2ZIP crawls the requested target webpage, processes its DOM tree, and extracts all referenced resources including HTML markup, stylesheets (CSS), client-side scripts (JavaScript), images (PNG, JPG, SVG, WebP, AVIF), and web fonts (WOFF, WOFF2, TTF). It rewrites resource URLs to relative local paths and packages everything neatly into a single ZIP archive for offline inspection and hosting.'
  },
  {
    q: 'What is the "Rename all assets" option for?',
    a: 'When "Rename all assets" is checked, file names for CSS, JavaScript, and media assets are renamed using unique randomized hashes. This prevents cache conflicts, avoids duplicate file naming collisions, and protects original resource paths when deploying on new servers or testing offline.'
  },
  {
    q: 'What does "Save website structure" do?',
    a: 'By default, resources may be organized into standardized /css, /js, /images, and /fonts folders. If you enable "Save website structure", the tool retains the exact multi-level directory hierarchy (e.g. /wp-content/themes/..., /assets/vendor/...) used by the original web server.'
  },
  {
    q: 'What is "Simplified download"?',
    a: 'Simplified download switches to an alternative scraping and rendering algorithm designed for single-page landing pages and sites with complex dynamic redirects or strict firewalls where the standard recursive crawler encounters obstacles.'
  },
  {
    q: 'Can I copy the mobile version of a website?',
    a: 'Yes! Selecting "Copy mobile version of website" sends a standard mobile user-agent header during the crawl, ensuring you receive the responsive mobile viewport, touch navigation, and lightweight mobile-specific layouts.'
  },
  {
    q: 'Can I open and browse the downloaded website completely offline?',
    a: 'Yes. Once you extract the SaveWeb2ZIP.zip archive to your computer, simply double-click index.html in any modern browser (Chrome, Firefox, Safari, Edge) to browse the static page with all styles, graphics, and interactive scripts running locally without needing an internet connection.'
  }
];

export interface SamplePreset {
  name: string;
  url: string;
  category: string;
}

export const SAMPLE_PRESETS: SamplePreset[] = [
  { name: 'Wikipedia Main', url: 'https://en.wikipedia.org/wiki/Main_Page', category: 'Encyclopedia' },
  { name: 'Hacker News', url: 'https://news.ycombinator.com', category: 'Tech Community' },
  { name: 'Example Domain', url: 'https://example.com', category: 'Standard Spec' },
  { name: 'GitHub Status', url: 'https://www.githubstatus.com', category: 'Developer Tools' }
];
