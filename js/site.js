// Configuración del sitio. Cambia estas direcciones cuando estén publicadas.
const APP_URL = 'https://gleimbek.github.io/Multipad/';
const REPO_URL = ''; // por ejemplo 'https://github.com/gleimbek/multipad'
// Instaladores: deja null mientras no exista el archivo; el botón se muestra gris.
// Con GitHub Releases quedarían así:
// 'https://github.com/gleimbek/multipad/releases/latest/download/Multipad-Setup.exe'
// Donaciones: pega aquí tus enlaces cuando abras las cuentas. Los que queden en null no se muestran.
const DONATE = {
  github: null,  // 'https://github.com/sponsors/gleimbek'
  kofi: null,    // 'https://ko-fi.com/tu-usuario'
  paypal: null,  // 'https://www.paypal.com/donate/?hosted_button_id=...'
};
const RELEASES = 'https://github.com/gleimbek/Multipad/releases/latest/download/';
const DOWNLOADS = {
  windows: RELEASES + 'Multipad-Setup.exe',
  mac: RELEASES + 'Multipad.dmg',
  linux: RELEASES + 'Multipad.AppImage',
  android: RELEASES + 'Multipad.apk',
};

const EN = {
  'skip':'Skip to content', 'nav.features':'Features', 'nav.langs':'Languages', 'nav.download':'Download', 'nav.keys':'Shortcuts', 'nav.news':'News', 'nav.faq':'FAQ',
  'nav.donate':'Donate', 'nav.author':'Author',
  'don.h1':'Support Multipad', 'don.lede':'Multipad is free and will stay free. If it helps you and you want it to grow, you can donate any amount.',
  'don.howTitle':'How to donate', 'don.soon':'Donations open very soon. In the meantime, the best help is telling someone who codes about Multipad.',
  'don.otherTitle':'Other ways to help', 'don.o1':'Share Multipad with your classmates or coworkers.', 'don.o2':'Tell us what breaks or what you would like it to do.', 'don.o3':'If you teach programming, use it with your students.',
  'don.whatTitle':'What donations pay for', 'don.c1':'Domain and hosting for the site and the app', 'don.c2':'Code signing, so Windows and Mac install Multipad without security warnings', 'don.c3':'An Apple developer account, required to publish the Mac version', 'don.c4':'Time for new features and bug fixes',
  'au.h1':'Who makes Multipad', 'au.lede':'Multipad is designed and built by Gustavo Leimbek, a web developer in Las Vegas, Nevada, and is a Leimbek Web Studio product.',
  'au.bioTitle':'About the author', 'au.bio1':'Gustavo spent 15 years as head of editorial systems at the newspaper El Sol de Hidalgo in Mexico, in charge of networks, servers and newsroom equipment. Since 2016 he has provided remote technical support in the United States.',
  'au.bio2':'He studied software and web development and is now a programming teaching assistant at a college in Las Vegas. He builds websites and systems for small businesses, and tools for teaching people to code.',
  'au.otherTitle':'Other projects', 'au.p1':': prompts that help teachers create visual material with AI.', 'au.p2':': English pronunciation practice with speech recognition.',
  'au.contactTitle':'Contact', 'au.portfolio':'Portfolio',
  'au.creditsTitle':'Built with free software', 'au.creditsIntro':'Multipad uses these open source projects. Thanks to the people who maintain them.',
  'au.cr1':'The text editor', 'au.cr2':'Python in the browser', 'au.cr3':'SQLite in the browser', 'au.cr4':'Markdown preview', 'au.cr5':'Running compiled languages',
  'cta.download':'Download', 'menu':'Menu', 'chromeEdge':'Chrome or Edge', 'win1011':'Windows 10 and 11', 'foot':'Multipad is a Leimbek Web Studio product.', 'code':'Code on GitHub',
  'band.title':'Download it free for your computer, tablet or phone', 'band.btn':'Go to downloads',

  'home.h1':'Write code in several windows at once, on any device',
  'home.lede':'Multipad is a free code editor in the spirit of Notepad++. Split each window into up to four panes, open another window on your second monitor, and run HTML, JavaScript, Python and SQL without leaving the editor.',
  'home.dl':'Download Multipad', 'home.open':'Use it in the browser', 'home.fine':'Version 1.3.1. Free, no account needed, in English or Spanish.',
  'home.whyTitle':'What makes Multipad different', 'home.whyIntro':'The idea comes from Notepad++, built for people who work across more than one screen or switch devices during the day.',
  'home.h1t':'Panes and windows', 'home.h1p':'Up to four panes per window and one window on each monitor. Drag tabs from one window to another.', 'home.h1l':'See all features',
  'home.h2t':'Run your code', 'home.h2p':'HTML, JavaScript, Python and SQL run in your browser. Java, C++ and other compiled languages run on a Judge0 server.', 'home.h2l':'See the languages',
  'home.h3t':'Install it wherever you work', 'home.h3p':'Windows, Mac, Linux, Android, iPhone and iPad. Once installed it opens without internet.', 'home.h3l':'Go to downloads',
  'home.h4t':'Notepad++ shortcuts', 'home.h4p':'F5 to run, Ctrl+\\ to split the pane, Alt+M to move a tab. If you come from Notepad++, you already know how to use it.', 'home.h4l':'See the shortcuts',
  'demo.win1':'Window 1', 'demo.win2':'Window 2, right monitor', 'demo.win3':'Window 3', 'demo.run':'Run', 'demo.live':'Live', 'demo.preview':'Preview', 'demo.panes2':'2 panes', 'demo.codeLabel':'Demo HTML code',
  'demo.note':'Edit the code: the preview changes as you type. This is how the run panel works in the app.',

  'feat.h1':'Features', 'feat.lede':'Everything Multipad does in version 1.3.1.',
  'f1t':'Up to four panes per window', 'f1p':'Put two or four files side by side or stacked. Drag the dividers to size them (double-click evens them out), or clone a tab to see the same file in two places.',
  'f2t':'One window on each monitor', 'f2p':'"New window on another screen" opens Multipad straight on your second monitor (desktop Chrome and Edge). Each window remembers its tabs and panes, and you can name it, for example "Left monitor".',
  'f3t':'Tabs that travel between windows', 'f3p':'Drag a tab to another window or use "Send to another window…". If the same file is open in two windows, what you type in one shows up in the other. Close a window by mistake and get it back with Reopen closed window.',
  'f4t':'Run it and see the result next to your code', 'f4p':'F5 opens the panel with Preview and Console. With "Live" on, HTML, CSS and Markdown update as you type. The preview can open in its own window and move to the other monitor.',
  'f5t':'Errors are marked as you type', 'f5p':'A red underline, a dot in the margin and a counter in the status bar; F8 jumps to the next one. When you run, it marks the line where Python, JavaScript or the Java, C or C++ compiler failed.',
  'f6t':'What you expect from an editor', 'f6p':'Highlighting for more than 20 languages, find and replace with regular expressions, go to line, multiple cursors, code folding, autocomplete, comment and sort lines, light, dark or automatic theme.',
  'f7t':'Built for touch screens too', 'f7p':'On tablets and phones an extra row of keys appears: tab, braces, parentheses, arrows and undo.',
  'f8t':'Works offline', 'f8p':'Once installed, it opens without a connection. Python and SQL need internet only the first time you use them; Judge0 always does.',
  'files.title':'Where your files are saved', 'files.intro':'Everything you type saves in the browser storage of that device. When you save with Ctrl+S, it depends on the browser:',
  'files.th1':'Browser', 'files.th2':'Save (Ctrl+S)', 'files.th3':'Open folder',
  'files.r1':'Chrome or Edge on Windows, Mac, Linux and ChromeOS', 'files.r1b':'Writes straight to the original file', 'files.r2':'Chrome on Android', 'files.r2b':'Downloads a copy', 'files.r3':'Safari on iPhone and iPad', 'files.r3b':'Share, then Save to Files',
  'yes':'Yes', 'no':'No',
  'files.note':'What you type on your tablet does not show up on your computer by itself. To move files between devices, save them in a synced folder such as OneDrive, Google Drive or iCloud.',

  'lang.h1':'Languages and running code', 'lang.lede':'Multipad picks the language from the file extension. If it gets it wrong, change it from the Language menu or with Alt+L.',
  'thLang':'Language', 'thDoes':'What Run does', 'thWhere':'Where it runs',
  'l1':'Live preview, including the .css and .js files it links if they are open in Multipad', 'l1b':'Shows the HTML that links it, or a sample page', 'l2':'Shows the HTML that links it; otherwise runs it and prints console.log to the console',
  'l3':'Runs it with Pyodide; input() reads from the stdin box', 'l4':'Runs it in SQLite and shows the result tables', 'l5':'Preview', 'l5b':'Checks that it is valid and formats it', 'l6':'Compiles and runs', 'l7':'Editing with highlighting',
  'browser':'Your browser', 'server':'Judge0 server', 'editOnly':'Editing only',
  'lang.privTitle':'What leaves your device', 'lang.privP':'HTML, CSS, JavaScript, Python and SQL never leave your device. Compiled languages are sent to the Judge0 server to run. By default Multipad uses the public Judge0 instance; in Run, Server for Java, C++, C#… you can use Judge0 through RapidAPI with your key, or your own server.',
  'lang.inTitle':'Programs that read keyboard input', 'lang.inP':'If your program uses input(), Scanner or cin, type the answers in the stdin box, one per line, before running. In Java, the public class must be named Main.',
  'lang.imgTitle':'Images in the preview', 'lang.imgP':'If you opened a folder, Multipad looks for images in that folder following the path. Otherwise it looks for them by name in the Images section of the side panel, where you can add them by dragging them onto the window.',
  'lang.note':'Python downloads about 12 MB the first time you use it.',

  'dl.h1':'Download Multipad', 'dl.lede':'Free for Windows, Mac, Linux, Android, iPhone and iPad. Choose how to install it.',
  'dl.osUnknown':'Your device', 'dl.osHint':'We recommend installing it from the browser: it takes a minute and updates itself.', 'dl.openInstall':'Open and install',
  'dl.pwaTitle':'Install from the browser', 'dl.pwaIntro':'Open Multipad once and add it to your device. It gets its own icon, opens in its own window and works offline. When there is a new version, it tells you and updates with one tap.',
  'dl.you':'Your system',
  'i1a':'Open Multipad.', 'i1b':'Click the install icon in the address bar, or choose Install Multipad from the menu.', 'i1c':'Open it from the Start menu or Launchpad. On Windows it also shows up in "Open with…" for code files.',
  'i2a':'Open Multipad.', 'i2b':'Tap the ⋮ menu and choose Install app.', 'i2c':'Open it from your home screen.',
  'i3a':'Open Multipad in Safari.', 'i3b':'Tap Share and choose Add to Home Screen.', 'i3c':'Open it from the icon. On iPad, use Safari Split View to get two windows.',
  'dl.filesTitle':'Download the installer', 'dl.filesIntro':'If you prefer a file you install like any other program, download the one for your system.',
  'dl.thSys':'System', 'dl.thFile':'File', 'dl.thAction':'Download', 'dl.get':'Download', 'dl.notYet':'Coming soon',
  'dl.iosOnly':'Apple does not allow installers outside the App Store; use Safari',
  'dl.soon':'Grey buttons do not have a published file yet. In the meantime, install Multipad from the browser.',
  'dl.nWin':'Windows may show "Windows protected your PC". Click More info, then Run anyway.',
  'dl.nMac':'On Mac, if it says it cannot be opened, go to System Settings, Privacy & Security, and choose Open Anyway.',
  'dl.nAnd':'On Android, allow installing apps from unknown sources for your browser when it asks.',

  'keys.h1':'Keyboard shortcuts', 'keys.lede':'On Mac use Cmd instead of Ctrl. New and Close use Alt because in a browser tab the browser keeps Ctrl+N and Ctrl+W.',
  'keys.th1':'Action', 'keys.th2':'Shortcut',
  'k1':'Run or preview', 'k2':'Stop', 'k3':'Run panel', 'k4':'Change language', 'k5':'New', 'k6':'Open', 'k7':'Save / Save as', 'k8':'Close tab', 'k9':'Next tab',
  'k10':'Find / Replace', 'k11':'Go to line', 'k12':'Next error', 'k13':'Split pane', 'k14':'Move tab to the other pane', 'k15':'New window', 'k16':'Side panel', 'k17':'Word wrap',

  'news.h1':'News', 'news.lede':'New versions and changes to Multipad.',
  'n2d':'Version 1.3.1, November 2026', 'n2p':'Save all now saves new documents too: it asks where to save each one. Installers for Windows, Mac, Linux and Android arrive.',
  'n1d':'November 2026', 'n1p':'The Multipad site launches. Version 1.3.0 includes panes, multiple windows, running code and errors marked as you type.',
  'updNote':'When there is a new version, the app tells you and updates with one tap.',

  'faq.h1':'Frequently asked questions',
  'q1':'How much does it cost?', 'a1':'Nothing. Multipad is free and you don’t need an account.',
  'q2':'What is the difference between installing from the browser and downloading the installer?', 'a2':'It is the same editor. From the browser it takes a minute, uses little space and updates itself. The installer is a file you install like any program and does not depend on having Chrome or Edge.',
  'q3':'Where are my files saved?', 'a3':'Your work saves in the browser storage of that device. When you save with Ctrl+S, desktop Chrome and Edge write straight to the original file; on Android, Firefox and iPhone a copy downloads.',
  'q4':'Does my code leave my computer?', 'a4':'Only when you run a compiled language (Java, C++, C# and others), because that code is sent to the Judge0 server. HTML, CSS, JavaScript, Python and SQL run inside your device.',
  'q5':'Can I use two monitors on a tablet?', 'a5':'It depends on the system. On Android you can use split screen with two Chrome windows; on iPad, Safari Split View with two Multipad tabs.',
  'q6':'Does it work offline?', 'a6':'Yes, once installed. Python and SQL need internet the first time you use them, and compiled languages always do, because they run on Judge0.'
};

const OS_NAMES = {
  windows:{es:'Estás en Windows', en:'You are on Windows'},
  mac:{es:'Estás en Mac', en:'You are on a Mac'},
  linux:{es:'Estás en Linux', en:'You are on Linux'},
  android:{es:'Estás en Android', en:'You are on Android'},
  ios:{es:'Estás en iPhone o iPad', en:'You are on iPhone or iPad'},
};

const SAMPLE = {
  es:`<h1>Hola, Multipad</h1>
<p>Cambia este texto y mira el resultado.</p>

<style>
  body { font-family: sans-serif; padding: 16px; }
  h1 { color: #2f6bff; }
</style>`,
  en:`<h1>Hello, Multipad</h1>
<p>Change this text and watch the result.</p>

<style>
  body { font-family: sans-serif; padding: 16px; }
  h1 { color: #2f6bff; }
</style>`
};

function detectOS(){
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  if (/Windows/.test(ua)) return 'windows';
  if (/Macintosh|Mac OS X/.test(ua)) return 'mac';
  if (/Linux|CrOS/.test(ua)) return 'linux';
  return null;
}

const nodes = document.querySelectorAll('[data-i18n]');
const ES = {}; nodes.forEach(n => { ES[n.dataset.i18n] = n.textContent; });
const titleEs = document.title;
const langBtn = document.getElementById('langBtn');
const os = detectOS();
let lang = 'es';

// Demo de la portada
const code = document.getElementById('code');
const preview = document.getElementById('preview');
let edited = false;
function render(){ if (preview) preview.srcdoc = code.value; }

function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  nodes.forEach(n => { n.textContent = l === 'en' ? (EN[n.dataset.i18n] ?? ES[n.dataset.i18n]) : ES[n.dataset.i18n]; });
  langBtn.textContent = l === 'en' ? 'ES' : 'EN';
  langBtn.setAttribute('aria-label', l === 'en' ? 'Cambiar a español' : 'Switch to English');
  document.title = l === 'en' ? document.body.dataset.titleEn : titleEs;
  if (code && !edited) { code.value = SAMPLE[l]; render(); }
  applyDownloads();
  try { localStorage.setItem('mp-site-lang', l); } catch (e) {}
}

function applyDownloads(){
  document.querySelectorAll('.dl-link').forEach(a => {
    const url = DOWNLOADS[a.dataset.file];
    if (url) { a.href = url; a.removeAttribute('aria-disabled'); }
    else { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); a.textContent = lang === 'en' ? EN['dl.notYet'] : 'Muy pronto'; }
  });
  const name = document.getElementById('osName');
  if (name && os) name.textContent = OS_NAMES[os][lang];
}

if (code) {
  const live = document.getElementById('liveChk');
  const pos = document.getElementById('pos');
  const updatePos = () => {
    const before = code.value.slice(0, code.selectionStart).split('\n');
    pos.textContent = `Ln ${before.length}, Col ${before.at(-1).length + 1}`;
  };
  code.addEventListener('input', () => { edited = true; if (live.checked) render(); updatePos(); });
  code.addEventListener('click', updatePos);
  code.addEventListener('keyup', updatePos);
  code.addEventListener('keydown', e => {
    if (e.key === 'Tab' && !e.shiftKey) { e.preventDefault(); code.setRangeText('  ', code.selectionStart, code.selectionEnd, 'end'); }
    if (e.key === 'F5' || (e.key === 'Enter' && (e.ctrlKey || e.metaKey))) { e.preventDefault(); render(); }
  });
  document.getElementById('runBtn').addEventListener('click', render);
}

// Página de donaciones: muestra solo los enlaces configurados
const donateLinks = document.querySelectorAll('.donate-link');
if (donateLinks.length) {
  let any = false;
  donateLinks.forEach(a => {
    const url = DONATE[a.dataset.way];
    if (url) { a.href = url; a.rel = 'noopener'; any = true; } else { a.remove(); }
  });
  if (!any) document.getElementById('donateSoon').hidden = false;
}

// Página de descargas: marca el sistema del visitante
if (os) {
  const group = (os === 'windows' || os === 'mac' || os === 'linux') ? 'desktop' : os;
  document.querySelectorAll(`[data-os="${group}"]`).forEach(el => el.classList.add('is-you'));
  document.querySelectorAll(`[data-os-row="${os}"] td:first-child`).forEach(el => { el.style.fontWeight = '600'; });
}

const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && mainNav.classList.contains('open')) { mainNav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.focus(); } });
langBtn.addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));
document.querySelectorAll('.app-link').forEach(a => { a.href = APP_URL; a.rel = 'noopener'; });
if (REPO_URL) { const r = document.getElementById('repoLink'); r.href = REPO_URL; r.hidden = false; }

let saved = null;
try { saved = localStorage.getItem('mp-site-lang'); } catch (e) {}
setLang(saved || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'));
