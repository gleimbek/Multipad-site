// Configuración del sitio. Cambia estas direcciones cuando estén publicadas.
const APP_URL = 'https://gleimbek.github.io/Multipad/';
const REPO_URL = ''; // por ejemplo 'https://github.com/gleimbek/multipad'
// Instaladores: deja null mientras no exista el archivo; el botón se muestra gris.
// Con GitHub Releases quedarían así:
// 'https://github.com/gleimbek/multipad/releases/latest/download/Multipad-Setup.exe'
const RELEASES = 'https://github.com/gleimbek/Multipad/releases/latest/download/';
const DOWNLOADS = {
  windows: RELEASES + 'Multipad-Setup.exe',
  mac: RELEASES + 'Multipad.dmg',
  linux: RELEASES + 'Multipad.AppImage',
  android: RELEASES + 'Multipad.apk',
};

const EN = {
  "nav.teachers":"Teachers",
  "f10t":"Classroom mode for teachers",
  "f10p":"Build HTML, CSS and JavaScript exercises with automatic tests, share them with a link and review the submissions your students upload to Canvas. Turn it on in Settings.",
  "f10l":"See classroom mode",
  "n8d":"Version 1.7.0, November 2026",
  "n8p":"In classroom mode, teachers write their solution and Multipad generates the tests from it, including ones that check the source code, such as &ndash; or &#8226;. In Review submissions, the Compare button shows the student's code next to the solution with the differences marked. Instructions have a formatting bar with bold, headings, lists, highlighting and colors.",
  "n7d":"Version 1.6.0, November 2026",
  "n7p":"In classroom exercises, students can only paste what they copy from the exercise files, and they cannot open or create other files. Multipad records how they write the code: in Review submissions you see what share they typed and can replay their work change by change. The block is on by default and can be turned off per exercise.",
  "n6d":"Version 1.5.0, November 2026",
  "n6p":"Classroom mode arrives: the teacher builds an exercise with automatic tests and shares it with a link; the student checks it and submits a .zip; the teacher reviews every submission in one table. Turn it on in Settings with Show teacher tools.",
  "tch.h1":"Multipad for teachers",
  "tch.lede":"Build an HTML, CSS and JavaScript exercise, share it with a link and collect submissions in Canvas. Automatic tests tell students what is missing before they submit.",
  "tch.video":"The whole flow in under 3 minutes: the teacher builds the exercise, a student solves and submits it, and the teacher reviews the submissions.",
  "tch.howTitle":"How it works",
  "tch.s1":"You prepare the starter files in Multipad and write the instructions.",
  "tch.s2":"You add automatic tests and check them against your own solution.",
  "tch.s3":"You copy the link and paste it into the Canvas assignment. The exercise travels inside the link: no server, no accounts.",
  "tch.s4":"The student works, presses Check until everything passes and uploads to Canvas the .zip the Submit button downloads.",
  "tch.s5":"You download the submissions from Canvas and open them in Review submissions: one row per student, with their tests and their code.",
  "tch.cta":"Turn on teacher tools",
  "tch.ctaNote":"Opens Multipad with the Classroom menu visible. Your students do not need to turn anything on: they just open your link.",
  "tch.testsTitle":"What the tests check",
  "tch.t1":"That an element exists, or at least N of them, such as three li elements.",
  "tch.t2":"That an element has a text, a CSS style or an attribute, such as an image alt.",
  "tch.t3":"That clicking a button shows a text, or that the console prints a result.",
  "tch.t4":"That the page has no JavaScript errors.",
  "tch.examTitle":"Paste block and exam mode",
  "tch.exam":"In every exercise, students can only paste what they copy from the exercise files, and Multipad records how they wrote the code: you see what share they typed and can replay their work. Exam mode also records when they leave the window. It gives you evidence to talk with the student; it does not fully prevent cheating.",
  "tch.limits":"For now the tests cover HTML, CSS and JavaScript. Python, SQL, Power BI and KNIME are not checked automatically.",
  'skip':'Skip to content', 'nav.features':'Features', 'nav.langs':'Languages', 'nav.download':'Download', 'nav.keys':'Shortcuts', 'nav.news':'News', 'nav.faq':'FAQ',
  'nav.donate':'Donate', 'nav.author':'Author',
  'don.h1':'Support Multipad', 'don.lede':'Multipad is free and will stay free. If it helps you and you want it to grow, you can donate any amount.',
  'don.howTitle':'Choose an amount (PayPal)', 'don.other':'Another amount', 'don.paypal':'Donations go through PayPal. PayPal opens in a new tab so you can confirm the amount and the payment.',
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
  'home.dl':'Download Multipad', 'home.open':'Use it in the browser', 'home.fine':'Version 1.7.0. Free, no account needed, in English, Spanish, Portuguese or French.',
  'home.whyTitle':'What makes Multipad different', 'home.whyIntro':'The idea comes from Notepad++, built for people who work across more than one screen or switch devices during the day.',
  'home.h1t':'Panes and windows', 'home.h1p':'Up to four panes per window and one window on each monitor. Drag tabs from one window to another.', 'home.h1l':'See all features',
  'home.h2t':'Run your code', 'home.h2p':'HTML, JavaScript, Python and SQL run in your browser. Java, C++ and other compiled languages run on a Judge0 server.', 'home.h2l':'See the languages',
  'home.h3t':'Install it wherever you work', 'home.h3p':'Windows, Mac, Linux, Android, iPhone and iPad. Once installed it opens without internet.', 'home.h3l':'Go to downloads',
  'home.h4t':'Notepad++ shortcuts', 'home.h4p':'F5 to run, Ctrl+\\ to split the pane, Alt+M to move a tab. If you come from Notepad++, you already know how to use it.', 'home.h4l':'See the shortcuts',
  'demo.win1':'Window 1', 'demo.win2':'Window 2, right monitor', 'demo.win3':'Window 3', 'demo.run':'Run', 'demo.live':'Live', 'demo.preview':'Preview', 'demo.panes2':'2 panes', 'demo.codeLabel':'Demo HTML code',
  'demo.note':'Edit the code: the preview changes as you type. This is how the run panel works in the app.',

  'feat.h1':'Features', 'feat.lede':'Everything Multipad does in version 1.7.0.',
  'f1t':'Up to four panes per window', 'f1p':'Put two or four files side by side or stacked. Drag the dividers to size them (double-click evens them out), or clone a tab to see the same file in two places.',
  'f2t':'One window on each monitor', 'f2p':'"New window on another screen" opens Multipad straight on your second monitor (desktop Chrome and Edge). Each window remembers its tabs and panes, and you can name it, for example "Left monitor".',
  'f3t':'Tabs that travel between windows', 'f3p':'Drag a tab to another window or use "Send to another window…". If the same file is open in two windows, what you type in one shows up in the other. Close a window by mistake and get it back with Reopen closed window.',
  'f4t':'Run it and see the result next to your code', 'f4p':'F5 opens the panel with Preview and Console. With "Live" on, HTML, CSS and Markdown update as you type. The preview can open in its own window and move to the other monitor.',
  'f5t':'Errors are marked as you type', 'f5p':'A red underline, a dot in the margin and a counter in the status bar; F8 jumps to the next one. When you run, it marks the line where Python, JavaScript or the Java, C or C++ compiler failed.',
  'f6t':'What you expect from an editor', 'f6p':'Highlighting for more than 20 languages, find and replace with regular expressions, go to line, multiple cursors, code folding, autocomplete, comment and sort lines, light, dark or automatic theme.',
  'f7t':'Built for touch screens too', 'f7p':'On tablets and phones an extra row of keys appears: tab, braces, parentheses, arrows and undo.',
  'f9t':'Folders to organize your files', 'f9p':'Create folders and subfolders in Workspace documents and move files by dragging them. Save a whole folder to disk with all its files, or download it as a .zip.',
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
  "dl.warnTitle":"If you see a warning when installing",
  "dl.warnWhy":"Multipad installers do not have a paid digital signature, so Windows, Mac and Android do not recognize them and show a warning the first time. The code is open and every installer is built automatically on GitHub from that code. These are the steps to install it anyway.",
  "dl.w1a":"Open Multipad-Setup.exe. If \"Windows protected your PC\" appears, do not press Don't run.",
  "dl.w1b":"Click the More info link, below the warning text.",
  "dl.w1c":"A Run anyway button appears. Press it and follow the installer. This only happens the first time.",
  "dl.w1d":"If the browser holds the download, in Chrome open Downloads and choose Keep; in Edge hover over the download, press ⋯ and choose Keep.",
  "dl.w2a":"Open Multipad.dmg and drag Multipad to the Applications folder.",
  "dl.w2b":"Open Multipad. If it says Apple cannot verify it, press Done; do not move it to the Trash.",
  "dl.w2c":"Go to System Settings, Privacy & Security. Under Security, press Open Anyway and confirm with your password.",
  "dl.w3a":"Open Multipad.apk from the browser downloads.",
  "dl.w3b":"If it says your browser cannot install apps, tap Settings, turn on Allow from this source and go back.",
  "dl.w3c":"Tap Install. If Google Play Protect says it does not know the app, tap More details, then Install anyway.",
  "dl.w4":"On Linux, right-click Multipad.AppImage, open Properties, Permissions, tick Allow executing file as program and open it.",
  "dl.warnPwa":"If you would rather see no warning at all, install Multipad from the browser as explained above. It is the same app and it updates itself.",

  'keys.h1':'Keyboard shortcuts', 'keys.lede':'On Mac use Cmd instead of Ctrl. New and Close use Alt because in a browser tab the browser keeps Ctrl+N and Ctrl+W.',
  'keys.th1':'Action', 'keys.th2':'Shortcut',
  'k1':'Run or preview', 'k2':'Stop', 'k3':'Run panel', 'k4':'Change language', 'k5':'New', 'k6':'Open', 'k7':'Save / Save as', 'k8':'Close tab', 'k9':'Next tab',
  'k10':'Find / Replace', 'k11':'Go to line', 'k12':'Next error', 'k13':'Split pane', 'k14':'Move tab to the other pane', 'k15':'New window', 'k16':'Side panel', 'k17':'Word wrap',

  'news.h1':'News', 'news.lede':'New versions and changes to Multipad.',
  'n5d':'Version 1.4.0, November 2026', 'n5p':'Multipad now speaks Portuguese and French, as well as Spanish and English. The language button opens a menu with all four, and the first time Multipad uses your browser language.',
  'n4d':'Version 1.3.3, November 2026', 'n4p':'If you press Open while the file picker is already open, Multipad tells you instead of showing an error.',
  'n3d':'Version 1.3.2, November 2026', 'n3p':'Folders in Workspace documents: create folders and subfolders, move files by dragging them, and save a whole folder to disk, or as a .zip on Android, Firefox and iPhone. The open-file marker is now a window icon, so it no longer looks like unsaved changes.',
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

const PT = {
  "nav.teachers":"Professores",
  "f10t":"Modo sala de aula para professores",
  "f10p":"Crie exercícios de HTML, CSS e JavaScript com testes automáticos, compartilhe-os com um link e revise as entregas que seus alunos enviam no Canvas. Ative em Configurações.",
  "f10l":"Ver o modo sala de aula",
  "n8d":"Versão 1.7.0, novembro de 2026",
  "n8p":"No modo sala de aula, o professor escreve sua solução e o Multipad gera os testes a partir dela, incluindo os que revisam o código-fonte, como &ndash; ou &#8226;. Em Revisar entregas, o botão Comparar mostra o código do aluno ao lado da solução com as diferenças marcadas. As instruções têm uma barra de formatação com negrito, títulos, listas, destaque e cores.",
  "n7d":"Versão 1.6.0, novembro de 2026",
  "n7p":"Nos exercícios do modo sala de aula, o aluno só pode colar o que copiar dos arquivos do exercício e não pode abrir nem criar outros arquivos. O Multipad registra como ele escreve o código: em Revisar entregas você vê a porcentagem que ele digitou e pode reproduzir o trabalho mudança por mudança. O bloqueio vem ativado e pode ser desligado por exercício.",
  "n6d":"Versão 1.5.0, novembro de 2026",
  "n6p":"Chega o modo sala de aula: o professor cria um exercício com testes automáticos e o compartilha com um link; o aluno o verifica e entrega um .zip; o professor revisa todas as entregas em uma tabela. Ative em Configurações, com Mostrar ferramentas para professores.",
  "tch.h1":"Multipad para professores",
  "tch.lede":"Crie um exercício de HTML, CSS e JavaScript, compartilhe com um link e receba as entregas no Canvas. Os testes automáticos dizem ao aluno o que falta antes de entregar.",
  "tch.video":"O fluxo completo em menos de 3 minutos: o professor cria o exercício, uma aluna o resolve e entrega, e o professor revisa as entregas.",
  "tch.howTitle":"Como funciona",
  "tch.s1":"Você prepara os arquivos iniciais no Multipad e escreve as instruções.",
  "tch.s2":"Você adiciona testes automáticos e os confere com sua própria solução.",
  "tch.s3":"Você copia o link e cola na tarefa do Canvas. O exercício viaja dentro do link: sem servidor nem contas.",
  "tch.s4":"O aluno resolve, aperta Verificar até tudo passar e envia no Canvas o .zip que o botão Entregar baixa.",
  "tch.s5":"Você baixa as entregas do Canvas e as abre em Revisar entregas: uma linha por aluno, com seus testes e seu código.",
  "tch.cta":"Ativar ferramentas para professores",
  "tch.ctaNote":"Abre o Multipad com o menu Sala de aula visível. Seus alunos não precisam ativar nada: só abrem seu link.",
  "tch.testsTitle":"O que os testes verificam",
  "tch.t1":"Que exista um elemento, ou pelo menos N, por exemplo três elementos li.",
  "tch.t2":"Que um elemento tenha um texto, um estilo CSS ou um atributo, como o alt de uma imagem.",
  "tch.t3":"Que ao clicar em um botão apareça um texto, ou que o console mostre um resultado.",
  "tch.t4":"Que a página não tenha erros de JavaScript.",
  "tch.examTitle":"Bloqueio de colagem e modo prova",
  "tch.exam":"Em cada exercício o aluno só pode colar o que copiar dos arquivos do exercício, e o Multipad registra como ele escreveu o código: você vê a porcentagem que ele digitou e pode reproduzir o trabalho. O modo prova também registra quando ele sai da janela. Dá evidência para conversar com o aluno; não impede totalmente a cola.",
  "tch.limits":"Por enquanto os testes cobrem HTML, CSS e JavaScript. Python, SQL, Power BI e KNIME não são verificados automaticamente.",
  'skip':'Ir para o conteúdo', 'nav.features':'Recursos', 'nav.langs':'Linguagens', 'nav.download':'Baixar', 'nav.keys':'Atalhos', 'nav.news':'Novidades', 'nav.faq':'Perguntas',
  'nav.donate':'Doar', 'nav.author':'Autor',
  'don.h1':'Apoie o Multipad', 'don.lede':'O Multipad é gratuito e vai continuar gratuito. Se ele te ajuda e você quer que ele cresça, pode doar qualquer valor.',
  'don.howTitle':'Escolha um valor (PayPal)', 'don.other':'Outro valor', 'don.paypal':'As doações passam pelo PayPal. O PayPal abre em uma nova aba para você confirmar o valor e o pagamento.',
  'don.otherTitle':'Outras formas de ajudar', 'don.o1':'Compartilhe o Multipad com seus colegas de turma ou de trabalho.', 'don.o2':'Conte o que quebra ou o que você gostaria que ele fizesse.', 'don.o3':'Se você ensina programação, use-o com seus alunos.',
  'don.whatTitle':'O que as doações pagam', 'don.c1':'Domínio e hospedagem do site e do app', 'don.c2':'Assinatura de código, para que Windows e Mac instalem o Multipad sem avisos de segurança', 'don.c3':'Uma conta de desenvolvedor da Apple, necessária para publicar a versão para Mac', 'don.c4':'Tempo para novos recursos e correções',
  'au.h1':'Quem faz o Multipad', 'au.lede':'O Multipad é projetado e desenvolvido por Gustavo Leimbek, desenvolvedor web em Las Vegas, Nevada, e é um produto da Leimbek Web Studio.',
  'au.bioTitle':'Sobre o autor', 'au.bio1':'Gustavo passou 15 anos como chefe de sistemas editoriais do jornal El Sol de Hidalgo, no México, cuidando de redes, servidores e equipamentos da redação. Desde 2016 presta suporte técnico remoto nos Estados Unidos.',
  'au.bio2':'Estudou desenvolvimento de software e web e hoje é assistente de ensino de programação em uma faculdade de Las Vegas. Cria sites e sistemas para pequenas empresas e ferramentas para ensinar a programar.',
  'au.otherTitle':'Outros projetos', 'au.p1':': prompts que ajudam professores a criar material visual com IA.', 'au.p2':': prática de pronúncia em inglês com reconhecimento de voz.',
  'au.contactTitle':'Contato', 'au.portfolio':'Portfólio',
  'au.creditsTitle':'Feito com software livre', 'au.creditsIntro':'O Multipad usa estes projetos de código aberto. Obrigado a quem os mantém.',
  'au.cr1':'O editor de texto', 'au.cr2':'Python no navegador', 'au.cr3':'SQLite no navegador', 'au.cr4':'Pré-visualização de Markdown', 'au.cr5':'Execução de linguagens compiladas',
  'cta.download':'Baixar', 'menu':'Menu', 'chromeEdge':'Chrome ou Edge', 'win1011':'Windows 10 e 11', 'foot':'O Multipad é um produto da Leimbek Web Studio.', 'code':'Código no GitHub',
  'band.title':'Baixe grátis para seu computador, tablet ou celular', 'band.btn':'Ir para os downloads',

  'home.h1':'Escreva código em várias janelas ao mesmo tempo, em qualquer dispositivo',
  'home.lede':'O Multipad é um editor de código gratuito no estilo do Notepad++. Divida cada janela em até quatro painéis, abra outra janela no seu segundo monitor e execute HTML, JavaScript, Python e SQL sem sair do editor.',
  'home.dl':'Baixar o Multipad', 'home.open':'Usar no navegador', 'home.fine':'Versão 1.7.0. Grátis, sem criar conta, em português, espanhol, inglês ou francês.',
  'home.whyTitle':'O que o Multipad tem de diferente', 'home.whyIntro':'A ideia vem do Notepad++, pensada para quem trabalha com mais de uma tela ou troca de dispositivo durante o dia.',
  'home.h1t':'Painéis e janelas', 'home.h1p':'Até quatro painéis por janela e uma janela em cada monitor. Arraste abas de uma janela para outra.', 'home.h1l':'Ver todos os recursos',
  'home.h2t':'Execute seu código', 'home.h2p':'HTML, JavaScript, Python e SQL rodam no seu navegador. Java, C++ e outras linguagens compiladas rodam em um servidor Judge0.', 'home.h2l':'Ver as linguagens',
  'home.h3t':'Instale onde você trabalha', 'home.h3p':'Windows, Mac, Linux, Android, iPhone e iPad. Depois de instalado, abre sem internet.', 'home.h3l':'Ir para os downloads',
  'home.h4t':'Atalhos do Notepad++', 'home.h4p':'F5 para executar, Ctrl+\\ para dividir o painel, Alt+M para mover uma aba. Se você vem do Notepad++, já sabe usar.', 'home.h4l':'Ver os atalhos',
  'demo.win1':'Janela 1', 'demo.win2':'Janela 2, monitor direito', 'demo.win3':'Janela 3', 'demo.run':'Executar', 'demo.live':'Ao vivo', 'demo.preview':'Pré-visualização', 'demo.panes2':'2 painéis', 'demo.codeLabel':'Código HTML de exemplo',
  'demo.note':'Edite o código: a pré-visualização muda enquanto você digita. É assim que funciona o painel de execução no app.',

  'feat.h1':'Recursos', 'feat.lede':'Tudo o que o Multipad faz na versão 1.7.0.',
  'f1t':'Até quatro painéis por janela', 'f1p':'Coloque dois ou quatro arquivos lado a lado ou empilhados. Arraste os divisores para ajustar o tamanho (clique duplo iguala), ou clone uma aba para ver o mesmo arquivo em dois lugares.',
  'f2t':'Uma janela em cada monitor', 'f2p':'"Nova janela em outra tela" abre o Multipad direto no seu segundo monitor (Chrome e Edge no computador). Cada janela lembra suas abas e painéis, e você pode dar um nome a ela, por exemplo "Monitor esquerdo".',
  'f3t':'Abas que viajam entre janelas', 'f3p':'Arraste uma aba para outra janela ou use "Enviar para outra janela…". Se o mesmo arquivo está aberto em duas janelas, o que você digita em uma aparece na outra. Fechou uma janela sem querer? Recupere-a com Reabrir janela fechada.',
  'f4t':'Execute e veja o resultado ao lado do código', 'f4p':'F5 abre o painel com Pré-visualização e Console. Com "Ao vivo" ligado, HTML, CSS e Markdown se atualizam enquanto você digita. A pré-visualização pode abrir em uma janela própria e ir para o outro monitor.',
  'f5t':'Erros marcados enquanto você digita', 'f5p':'Um sublinhado vermelho, um ponto na margem e um contador na barra de status; F8 pula para o próximo. Ao executar, marca a linha onde Python, JavaScript ou o compilador de Java, C ou C++ falhou.',
  'f6t':'O que você espera de um editor', 'f6p':'Destaque para mais de 20 linguagens, localizar e substituir com expressões regulares, ir para a linha, vários cursores, recolher código, autocompletar, comentar e ordenar linhas, tema claro, escuro ou automático.',
  'f7t':'Feito também para telas de toque', 'f7p':'Em tablets e celulares aparece uma fileira extra de teclas: tab, chaves, parênteses, setas e desfazer.',
  'f9t':'Pastas para organizar seus arquivos', 'f9p':'Crie pastas e subpastas em Documentos do espaço de trabalho e mova arquivos arrastando. Salve uma pasta inteira no disco com todos os arquivos, ou baixe como .zip.',
  'f8t':'Funciona offline', 'f8p':'Depois de instalado, abre sem conexão. Python e SQL precisam de internet só na primeira vez que você os usa; o Judge0 sempre precisa.',
  'files.title':'Onde seus arquivos ficam salvos', 'files.intro':'Tudo o que você digita fica salvo no armazenamento do navegador daquele dispositivo. Ao salvar com Ctrl+S, depende do navegador:',
  'files.th1':'Navegador', 'files.th2':'Salvar (Ctrl+S)', 'files.th3':'Abrir pasta',
  'files.r1':'Chrome ou Edge no Windows, Mac, Linux e ChromeOS', 'files.r1b':'Grava direto no arquivo original', 'files.r2':'Chrome no Android', 'files.r2b':'Baixa uma cópia', 'files.r3':'Safari no iPhone e iPad', 'files.r3b':'Compartilhar e depois Salvar em Arquivos',
  'yes':'Sim', 'no':'Não',
  'files.note':'O que você digita no tablet não aparece sozinho no computador. Para levar arquivos entre dispositivos, salve-os em uma pasta sincronizada como OneDrive, Google Drive ou iCloud.',

  'lang.h1':'Linguagens e execução', 'lang.lede':'O Multipad escolhe a linguagem pela extensão do arquivo. Se errar, mude no menu Linguagem ou com Alt+L.',
  'thLang':'Linguagem', 'thDoes':'O que Executar faz', 'thWhere':'Onde roda',
  'l1':'Pré-visualização ao vivo, incluindo os .css e .js que ele referencia se estiverem abertos no Multipad', 'l1b':'Mostra o HTML que o referencia, ou uma página de exemplo', 'l2':'Mostra o HTML que o referencia; se não houver, executa e mostra o console.log no console',
  'l3':'Executa com Pyodide; input() lê da caixa stdin', 'l4':'Executa no SQLite e mostra as tabelas de resultado', 'l5':'Pré-visualização', 'l5b':'Verifica se é válido e formata', 'l6':'Compila e executa', 'l7':'Edição com destaque',
  'browser':'Seu navegador', 'server':'Servidor Judge0', 'editOnly':'Só edição',
  'lang.privTitle':'O que sai do seu dispositivo', 'lang.privP':'HTML, CSS, JavaScript, Python e SQL nunca saem do seu dispositivo. As linguagens compiladas são enviadas ao servidor Judge0 para rodar. Por padrão o Multipad usa a instância pública do Judge0; em Executar, Servidor para Java, C++, C#… você pode usar o Judge0 pelo RapidAPI com sua chave, ou seu próprio servidor.',
  'lang.inTitle':'Programas que leem o teclado', 'lang.inP':'Se seu programa usa input(), Scanner ou cin, digite as respostas na caixa stdin, uma por linha, antes de executar. Em Java, a classe pública deve se chamar Main.',
  'lang.imgTitle':'Imagens na pré-visualização', 'lang.imgP':'Se você abriu uma pasta, o Multipad procura as imagens nessa pasta seguindo o caminho. Se não, procura pelo nome na seção Imagens do painel lateral, onde você pode adicioná-las arrastando-as para a janela.',
  'lang.note':'O Python baixa cerca de 12 MB na primeira vez que você o usa.',

  'dl.h1':'Baixar o Multipad', 'dl.lede':'Grátis para Windows, Mac, Linux, Android, iPhone e iPad. Escolha como instalar.',
  'dl.osUnknown':'Seu dispositivo', 'dl.osHint':'Recomendamos instalar pelo navegador: leva um minuto e se atualiza sozinho.', 'dl.openInstall':'Abrir e instalar',
  'dl.pwaTitle':'Instalar pelo navegador', 'dl.pwaIntro':'Abra o Multipad uma vez e adicione-o ao seu dispositivo. Ele ganha um ícone próprio, abre em janela própria e funciona offline. Quando há uma nova versão, ele avisa e se atualiza com um toque.',
  'dl.you':'Seu sistema',
  'i1a':'Abra o Multipad.', 'i1b':'Clique no ícone de instalar na barra de endereços, ou escolha Instalar Multipad no menu.', 'i1c':'Abra-o pelo menu Iniciar ou pelo Launchpad. No Windows ele também aparece em "Abrir com…" para arquivos de código.',
  'i2a':'Abra o Multipad.', 'i2b':'Toque no menu ⋮ e escolha Instalar app.', 'i2c':'Abra-o pela tela inicial.',
  'i3a':'Abra o Multipad no Safari.', 'i3b':'Toque em Compartilhar e escolha Adicionar à Tela de Início.', 'i3c':'Abra-o pelo ícone. No iPad, use o Split View do Safari para ter duas janelas.',
  'dl.filesTitle':'Baixar o instalador', 'dl.filesIntro':'Se você prefere um arquivo que se instala como qualquer outro programa, baixe o do seu sistema.',
  'dl.thSys':'Sistema', 'dl.thFile':'Arquivo', 'dl.thAction':'Download', 'dl.get':'Baixar', 'dl.notYet':'Em breve',
  'dl.iosOnly':'A Apple não permite instaladores fora da App Store; use o Safari',
  'dl.soon':'Os botões cinza ainda não têm arquivo publicado. Enquanto isso, instale o Multipad pelo navegador.',
  'dl.nWin':'O Windows pode mostrar "O Windows protegeu o computador". Clique em Mais informações e depois em Executar assim mesmo.',
  'dl.nMac':'No Mac, se aparecer que não pode ser aberto, vá em Ajustes do Sistema, Privacidade e Segurança, e escolha Abrir Mesmo Assim.',
  'dl.nAnd':'No Android, permita instalar apps de fontes desconhecidas para o seu navegador quando ele pedir.',
  "dl.warnTitle":"Se aparecer um aviso ao instalar",
  "dl.warnWhy":"Os instaladores do Multipad não têm uma assinatura digital paga, então Windows, Mac e Android não os reconhecem e mostram um aviso na primeira vez. O código é aberto e cada instalador é gerado automaticamente no GitHub a partir desse código. Estes são os passos para instalar mesmo assim.",
  "dl.w1a":"Abra o Multipad-Setup.exe. Se aparecer \"O Windows protegeu o computador\" (\"Windows protected your PC\"), não aperte Não executar.",
  "dl.w1b":"Clique no link Mais informações (More info), abaixo do texto do aviso.",
  "dl.w1c":"Aparece o botão Executar assim mesmo (Run anyway). Aperte e siga o instalador. Isso só acontece na primeira vez.",
  "dl.w1d":"Se o navegador segurar o download, no Chrome abra Downloads e escolha Manter; no Edge passe o cursor sobre o download, aperte ⋯ e escolha Manter.",
  "dl.w2a":"Abra o Multipad.dmg e arraste o Multipad para a pasta Aplicativos.",
  "dl.w2b":"Abra o Multipad. Se disser que a Apple não pode verificá-lo, aperte OK; não o mande para o Lixo.",
  "dl.w2c":"Vá em Ajustes do Sistema, Privacidade e Segurança. Em Segurança, aperte Abrir Mesmo Assim e confirme com sua senha.",
  "dl.w3a":"Abra o Multipad.apk pelos downloads do navegador.",
  "dl.w3b":"Se disser que o navegador não pode instalar apps, toque em Configurações, ative Permitir desta fonte e volte.",
  "dl.w3c":"Toque em Instalar. Se o Google Play Protect disser que não conhece o app, toque em Mais detalhes e depois em Instalar mesmo assim.",
  "dl.w4":"No Linux, clique com o botão direito em Multipad.AppImage, abra Propriedades, Permissões, marque Permitir executar o arquivo como programa e abra.",
  "dl.warnPwa":"Se preferir não ver nenhum aviso, instale o Multipad pelo navegador, como explicado acima. É o mesmo app e ele se atualiza sozinho.",

  'keys.h1':'Atalhos de teclado', 'keys.lede':'No Mac use Cmd em vez de Ctrl. Novo e Fechar usam Alt porque, em uma aba do navegador, o navegador fica com Ctrl+N e Ctrl+W.',
  'keys.th1':'Ação', 'keys.th2':'Atalho',
  'k1':'Executar ou pré-visualizar', 'k2':'Parar', 'k3':'Painel de execução', 'k4':'Mudar a linguagem', 'k5':'Novo', 'k6':'Abrir', 'k7':'Salvar / Salvar como', 'k8':'Fechar aba', 'k9':'Próxima aba',
  'k10':'Localizar / Substituir', 'k11':'Ir para a linha', 'k12':'Próximo erro', 'k13':'Dividir painel', 'k14':'Mover aba para o outro painel', 'k15':'Nova janela', 'k16':'Painel lateral', 'k17':'Quebra de linha',

  'news.h1':'Novidades', 'news.lede':'Novas versões e mudanças do Multipad.',
  'n5d':'Versão 1.4.0, novembro de 2026', 'n5p':'O Multipad agora está em português e francês, além de espanhol e inglês. O botão de idioma abre um menu com os quatro, e na primeira vez o Multipad usa o idioma do seu navegador.',
  'n4d':'Versão 1.3.3, novembro de 2026', 'n4p':'Se você aperta Abrir enquanto o seletor de arquivos já está aberto, o Multipad avisa em vez de mostrar um erro.',
  'n3d':'Versão 1.3.2, novembro de 2026', 'n3p':'Pastas em Documentos do espaço de trabalho: crie pastas e subpastas, mova arquivos arrastando e salve uma pasta inteira no disco, ou como .zip no Android, Firefox e iPhone. O indicador de arquivo aberto agora é um ícone de janela, para não ser confundido com alterações sem salvar.',
  'n2d':'Versão 1.3.1, novembro de 2026', 'n2p':'Salvar tudo agora salva também os documentos novos: pergunta onde salvar cada um. Chegam os instaladores para Windows, Mac, Linux e Android.',
  'n1d':'Novembro de 2026', 'n1p':'Lançamento do site do Multipad. A versão 1.3.0 traz painéis, várias janelas, execução de código e erros marcados enquanto você digita.',
  'updNote':'Quando há uma nova versão, o app avisa e se atualiza com um toque.',

  'faq.h1':'Perguntas frequentes',
  'q1':'Quanto custa?', 'a1':'Nada. O Multipad é gratuito e você não precisa de conta.',
  'q2':'Qual a diferença entre instalar pelo navegador e baixar o instalador?', 'a2':'É o mesmo editor. Pelo navegador leva um minuto, ocupa pouco espaço e se atualiza sozinho. O instalador é um arquivo que se instala como qualquer programa e não depende de ter Chrome ou Edge.',
  'q3':'Onde meus arquivos ficam salvos?', 'a3':'Seu trabalho fica salvo no armazenamento do navegador daquele dispositivo. Ao salvar com Ctrl+S, Chrome e Edge no computador gravam direto no arquivo original; no Android, Firefox e iPhone uma cópia é baixada.',
  'q4':'Meu código sai do meu computador?', 'a4':'Só quando você executa uma linguagem compilada (Java, C++, C# e outras), porque esse código é enviado ao servidor Judge0. HTML, CSS, JavaScript, Python e SQL rodam dentro do seu dispositivo.',
  'q5':'Posso usar dois monitores em um tablet?', 'a5':'Depende do sistema. No Android você pode usar a tela dividida com duas janelas do Chrome; no iPad, o Split View do Safari com duas abas do Multipad.',
  'q6':'Funciona sem internet?', 'a6':'Sim, depois de instalado. Python e SQL precisam de internet na primeira vez que você os usa, e as linguagens compiladas sempre, porque rodam no Judge0.'
};

const FR = {
  "nav.teachers":"Enseignants",
  "f10t":"Mode classe pour les enseignants",
  "f10p":"Créez des exercices HTML, CSS et JavaScript avec des tests automatiques, partagez-les par un lien et corrigez les rendus que vos élèves déposent sur Canvas. À activer dans les Réglages.",
  "f10l":"Voir le mode classe",
  "n8d":"Version 1.7.0, novembre 2026",
  "n8p":"En mode classe, l'enseignant écrit sa solution et Multipad génère les tests à partir d'elle, y compris ceux qui vérifient le code source, comme &ndash; ou &#8226;. Dans Corriger les rendus, le bouton Comparer affiche le code de l'élève à côté de la solution avec les différences marquées. Les consignes ont une barre de mise en forme avec gras, titres, listes, surlignage et couleurs.",
  "n7d":"Version 1.6.0, novembre 2026",
  "n7p":"Dans les exercices du mode classe, l'élève ne peut coller que ce qu'il copie depuis les fichiers de l'exercice, et il ne peut ni ouvrir ni créer d'autres fichiers. Multipad enregistre la façon dont il écrit le code : dans Corriger les rendus, vous voyez la part qu'il a tapée et pouvez rejouer son travail modification par modification. Le blocage est activé par défaut et se désactive par exercice.",
  "n6d":"Version 1.5.0, novembre 2026",
  "n6p":"Arrivée du mode classe : l'enseignant crée un exercice avec des tests automatiques et le partage par un lien ; l'élève le vérifie et rend un .zip ; l'enseignant corrige tous les rendus dans un tableau. À activer dans les Réglages avec Afficher les outils enseignant.",
  "tch.h1":"Multipad pour les enseignants",
  "tch.lede":"Créez un exercice HTML, CSS et JavaScript, partagez-le par un lien et recevez les rendus sur Canvas. Les tests automatiques indiquent à l'élève ce qui manque avant de rendre.",
  "tch.video":"Tout le parcours en moins de 3 minutes : l'enseignant crée l'exercice, une élève le résout et le rend, et l'enseignant corrige les rendus.",
  "tch.howTitle":"Comment ça marche",
  "tch.s1":"Vous préparez les fichiers de départ dans Multipad et rédigez les consignes.",
  "tch.s2":"Vous ajoutez des tests automatiques et les vérifiez avec votre propre solution.",
  "tch.s3":"Vous copiez le lien et le collez dans le devoir Canvas. L'exercice voyage dans le lien : ni serveur ni comptes.",
  "tch.s4":"L'élève travaille, appuie sur Vérifier jusqu'à ce que tout passe et dépose sur Canvas le .zip téléchargé par le bouton Rendre.",
  "tch.s5":"Vous téléchargez les rendus depuis Canvas et les ouvrez dans Corriger les rendus : une ligne par élève, avec ses tests et son code.",
  "tch.cta":"Activer les outils enseignant",
  "tch.ctaNote":"Ouvre Multipad avec le menu Classe visible. Vos élèves n'ont rien à activer : ils ouvrent simplement votre lien.",
  "tch.testsTitle":"Ce que vérifient les tests",
  "tch.t1":"Qu'un élément existe, ou au moins N, par exemple trois éléments li.",
  "tch.t2":"Qu'un élément ait un texte, un style CSS ou un attribut, comme l'alt d'une image.",
  "tch.t3":"Qu'un clic sur un bouton affiche un texte, ou que la console affiche un résultat.",
  "tch.t4":"Que la page n'ait pas d'erreurs JavaScript.",
  "tch.examTitle":"Blocage du collage et mode examen",
  "tch.exam":"Dans chaque exercice, l'élève ne peut coller que ce qu'il copie depuis les fichiers de l'exercice, et Multipad enregistre la façon dont il a écrit le code : vous voyez la part qu'il a tapée et pouvez rejouer son travail. Le mode examen enregistre aussi quand il quitte la fenêtre. Cela vous donne des éléments pour en parler avec l'élève ; cela n'empêche pas complètement la triche.",
  "tch.limits":"Pour l'instant, les tests couvrent HTML, CSS et JavaScript. Python, SQL, Power BI et KNIME ne sont pas vérifiés automatiquement.",
  'skip':'Aller au contenu', 'nav.features':'Fonctionnalités', 'nav.langs':'Langages', 'nav.download':'Télécharger', 'nav.keys':'Raccourcis', 'nav.news':'Nouveautés', 'nav.faq':'Questions',
  'nav.donate':'Faire un don', 'nav.author':'Auteur',
  'don.h1':'Soutenir Multipad', 'don.lede':'Multipad est gratuit et le restera. S\'il vous est utile et que vous voulez qu\'il progresse, vous pouvez donner le montant de votre choix.',
  'don.howTitle':'Choisissez un montant (PayPal)', 'don.other':'Autre montant', 'don.paypal':'Les dons passent par PayPal. PayPal s\'ouvre dans un nouvel onglet pour que vous confirmiez le montant et le paiement.',
  'don.otherTitle':'Autres façons d\'aider', 'don.o1':'Parlez de Multipad à vos camarades ou à vos collègues.', 'don.o2':'Dites-nous ce qui ne marche pas ou ce que vous aimeriez qu\'il fasse.', 'don.o3':'Si vous enseignez la programmation, utilisez-le avec vos élèves.',
  'don.whatTitle':'À quoi servent les dons', 'don.c1':'Le domaine et l\'hébergement du site et de l\'application', 'don.c2':'La signature du code, pour que Windows et Mac installent Multipad sans alerte de sécurité', 'don.c3':'Un compte développeur Apple, nécessaire pour publier la version Mac', 'don.c4':'Du temps pour de nouvelles fonctions et des corrections',
  'au.h1':'Qui fait Multipad', 'au.lede':'Multipad est conçu et développé par Gustavo Leimbek, développeur web à Las Vegas, dans le Nevada. C\'est un produit de Leimbek Web Studio.',
  'au.bioTitle':'À propos de l\'auteur', 'au.bio1':'Gustavo a été pendant 15 ans responsable des systèmes éditoriaux du journal El Sol de Hidalgo, au Mexique, chargé des réseaux, des serveurs et du matériel de la rédaction. Depuis 2016, il fait du support technique à distance aux États-Unis.',
  'au.bio2':'Il a étudié le développement logiciel et web et il est aujourd\'hui assistant d\'enseignement en programmation dans un college de Las Vegas. Il crée des sites et des systèmes pour de petites entreprises, et des outils pour apprendre à coder.',
  'au.otherTitle':'Autres projets', 'au.p1':' : des prompts qui aident les enseignants à créer du matériel visuel avec l\'IA.', 'au.p2':' : entraînement à la prononciation anglaise avec reconnaissance vocale.',
  'au.contactTitle':'Contact', 'au.portfolio':'Portfolio',
  'au.creditsTitle':'Conçu avec des logiciels libres', 'au.creditsIntro':'Multipad utilise ces projets open source. Merci aux personnes qui les maintiennent.',
  'au.cr1':'L\'éditeur de texte', 'au.cr2':'Python dans le navigateur', 'au.cr3':'SQLite dans le navigateur', 'au.cr4':'Aperçu Markdown', 'au.cr5':'Exécution des langages compilés',
  'cta.download':'Télécharger', 'menu':'Menu', 'chromeEdge':'Chrome ou Edge', 'win1011':'Windows 10 et 11', 'foot':'Multipad est un produit de Leimbek Web Studio.', 'code':'Code sur GitHub',
  'band.title':'Téléchargez-le gratuitement pour votre ordinateur, tablette ou téléphone', 'band.btn':'Aller aux téléchargements',

  'home.h1':'Écrivez du code dans plusieurs fenêtres à la fois, sur n\'importe quel appareil',
  'home.lede':'Multipad est un éditeur de code gratuit dans l\'esprit de Notepad++. Divisez chaque fenêtre en quatre volets maximum, ouvrez une autre fenêtre sur votre deuxième écran et exécutez HTML, JavaScript, Python et SQL sans quitter l\'éditeur.',
  'home.dl':'Télécharger Multipad', 'home.open':'L\'utiliser dans le navigateur', 'home.fine':'Version 1.7.0. Gratuit, sans compte, en français, espagnol, anglais ou portugais.',
  'home.whyTitle':'Ce qui distingue Multipad', 'home.whyIntro':'L\'idée vient de Notepad++, pensée pour les personnes qui travaillent sur plusieurs écrans ou changent d\'appareil dans la journée.',
  'home.h1t':'Volets et fenêtres', 'home.h1p':'Jusqu\'à quatre volets par fenêtre et une fenêtre par écran. Faites glisser les onglets d\'une fenêtre à l\'autre.', 'home.h1l':'Voir toutes les fonctionnalités',
  'home.h2t':'Exécutez votre code', 'home.h2p':'HTML, JavaScript, Python et SQL s\'exécutent dans votre navigateur. Java, C++ et les autres langages compilés s\'exécutent sur un serveur Judge0.', 'home.h2l':'Voir les langages',
  'home.h3t':'Installez-le là où vous travaillez', 'home.h3p':'Windows, Mac, Linux, Android, iPhone et iPad. Une fois installé, il s\'ouvre sans Internet.', 'home.h3l':'Aller aux téléchargements',
  'home.h4t':'Les raccourcis de Notepad++', 'home.h4p':'F5 pour exécuter, Ctrl+\\ pour diviser le volet, Alt+M pour déplacer un onglet. Si vous venez de Notepad++, vous savez déjà l\'utiliser.', 'home.h4l':'Voir les raccourcis',
  'demo.win1':'Fenêtre 1', 'demo.win2':'Fenêtre 2, écran de droite', 'demo.win3':'Fenêtre 3', 'demo.run':'Exécuter', 'demo.live':'En direct', 'demo.preview':'Aperçu', 'demo.panes2':'2 volets', 'demo.codeLabel':'Code HTML de démonstration',
  'demo.note':'Modifiez le code : l\'aperçu change pendant la saisie. C\'est ainsi que fonctionne le panneau d\'exécution dans l\'application.',

  'feat.h1':'Fonctionnalités', 'feat.lede':'Tout ce que fait Multipad dans la version 1.7.0.',
  'f1t':'Jusqu\'à quatre volets par fenêtre', 'f1p':'Placez deux ou quatre fichiers côte à côte ou empilés. Faites glisser les séparateurs pour régler la taille (un double-clic les égalise), ou clonez un onglet pour voir le même fichier à deux endroits.',
  'f2t':'Une fenêtre par écran', 'f2p':'"Nouvelle fenêtre sur un autre écran" ouvre Multipad directement sur votre deuxième écran (Chrome et Edge sur ordinateur). Chaque fenêtre garde ses onglets et ses volets, et vous pouvez lui donner un nom, par exemple "Écran de gauche".',
  'f3t':'Des onglets qui voyagent entre les fenêtres', 'f3p':'Faites glisser un onglet vers une autre fenêtre ou utilisez "Envoyer vers une autre fenêtre…". Si le même fichier est ouvert dans deux fenêtres, ce que vous tapez dans l\'une apparaît dans l\'autre. Une fenêtre fermée par erreur se récupère avec Rouvrir une fenêtre fermée.',
  'f4t':'Exécutez et voyez le résultat à côté du code', 'f4p':'F5 ouvre le panneau avec Aperçu et Console. Avec "En direct" activé, HTML, CSS et Markdown se mettent à jour pendant la saisie. L\'aperçu peut s\'ouvrir dans sa propre fenêtre et passer sur l\'autre écran.',
  'f5t':'Les erreurs sont signalées pendant la saisie', 'f5p':'Un soulignement rouge, un point dans la marge et un compteur dans la barre d\'état ; F8 passe à la suivante. À l\'exécution, la ligne où Python, JavaScript ou le compilateur Java, C ou C++ a échoué est signalée.',
  'f6t':'Ce qu\'on attend d\'un éditeur', 'f6p':'Coloration pour plus de 20 langages, recherche et remplacement avec expressions régulières, aller à la ligne, curseurs multiples, repli du code, autocomplétion, commenter et trier les lignes, thème clair, sombre ou automatique.',
  'f7t':'Pensé aussi pour les écrans tactiles', 'f7p':'Sur tablette et téléphone, une rangée de touches supplémentaire apparaît : tabulation, accolades, parenthèses, flèches et annuler.',
  'f9t':'Des dossiers pour organiser vos fichiers', 'f9p':'Créez des dossiers et sous-dossiers dans Documents de l\'espace de travail et déplacez les fichiers en les faisant glisser. Enregistrez un dossier entier sur le disque avec tous ses fichiers, ou téléchargez-le en .zip.',
  'f8t':'Fonctionne hors ligne', 'f8p':'Une fois installé, il s\'ouvre sans connexion. Python et SQL n\'ont besoin d\'Internet que la première fois ; Judge0 en a toujours besoin.',
  'files.title':'Où vos fichiers sont enregistrés', 'files.intro':'Tout ce que vous tapez est enregistré dans le stockage du navigateur de cet appareil. Quand vous enregistrez avec Ctrl+S, cela dépend du navigateur :',
  'files.th1':'Navigateur', 'files.th2':'Enregistrer (Ctrl+S)', 'files.th3':'Ouvrir un dossier',
  'files.r1':'Chrome ou Edge sur Windows, Mac, Linux et ChromeOS', 'files.r1b':'Écrit directement dans le fichier d\'origine', 'files.r2':'Chrome sur Android', 'files.r2b':'Télécharge une copie', 'files.r3':'Safari sur iPhone et iPad', 'files.r3b':'Partager, puis Enregistrer dans Fichiers',
  'yes':'Oui', 'no':'Non',
  'files.note':'Ce que vous tapez sur votre tablette n\'apparaît pas tout seul sur votre ordinateur. Pour passer des fichiers d\'un appareil à l\'autre, enregistrez-les dans un dossier synchronisé comme OneDrive, Google Drive ou iCloud.',

  'lang.h1':'Langages et exécution', 'lang.lede':'Multipad choisit le langage d\'après l\'extension du fichier. S\'il se trompe, changez-le dans le menu Langage ou avec Alt+L.',
  'thLang':'Langage', 'thDoes':'Ce que fait Exécuter', 'thWhere':'Où il s\'exécute',
  'l1':'Aperçu en direct, avec les .css et .js qu\'il lie s\'ils sont ouverts dans Multipad', 'l1b':'Affiche le HTML qui le lie, ou une page d\'exemple', 'l2':'Affiche le HTML qui le lie ; sinon l\'exécute et affiche console.log dans la console',
  'l3':'L\'exécute avec Pyodide ; input() lit la zone stdin', 'l4':'L\'exécute dans SQLite et affiche les tables de résultats', 'l5':'Aperçu', 'l5b':'Vérifie qu\'il est valide et le met en forme', 'l6':'Compile et exécute', 'l7':'Édition avec coloration',
  'browser':'Votre navigateur', 'server':'Serveur Judge0', 'editOnly':'Édition seulement',
  'lang.privTitle':'Ce qui quitte votre appareil', 'lang.privP':'HTML, CSS, JavaScript, Python et SQL ne quittent jamais votre appareil. Les langages compilés sont envoyés au serveur Judge0 pour s\'exécuter. Par défaut, Multipad utilise l\'instance publique de Judge0 ; dans Exécuter, Serveur pour Java, C++, C#…, vous pouvez utiliser Judge0 via RapidAPI avec votre clé, ou votre propre serveur.',
  'lang.inTitle':'Programmes qui lisent le clavier', 'lang.inP':'Si votre programme utilise input(), Scanner ou cin, tapez les réponses dans la zone stdin, une par ligne, avant d\'exécuter. En Java, la classe publique doit s\'appeler Main.',
  'lang.imgTitle':'Images dans l\'aperçu', 'lang.imgP':'Si vous avez ouvert un dossier, Multipad cherche les images dans ce dossier en suivant le chemin. Sinon, il les cherche par leur nom dans la section Images du panneau latéral, où vous pouvez les ajouter en les faisant glisser sur la fenêtre.',
  'lang.note':'Python télécharge environ 12 Mo la première fois que vous l\'utilisez.',

  'dl.h1':'Télécharger Multipad', 'dl.lede':'Gratuit pour Windows, Mac, Linux, Android, iPhone et iPad. Choisissez comment l\'installer.',
  'dl.osUnknown':'Votre appareil', 'dl.osHint':'Nous conseillons de l\'installer depuis le navigateur : cela prend une minute et il se met à jour tout seul.', 'dl.openInstall':'Ouvrir et installer',
  'dl.pwaTitle':'Installer depuis le navigateur', 'dl.pwaIntro':'Ouvrez Multipad une fois et ajoutez-le à votre appareil. Il a sa propre icône, s\'ouvre dans sa propre fenêtre et fonctionne hors ligne. Quand une nouvelle version sort, il vous prévient et se met à jour en un geste.',
  'dl.you':'Votre système',
  'i1a':'Ouvrez Multipad.', 'i1b':'Cliquez sur l\'icône d\'installation dans la barre d\'adresse, ou choisissez Installer Multipad dans le menu.', 'i1c':'Ouvrez-le depuis le menu Démarrer ou le Launchpad. Sous Windows, il apparaît aussi dans "Ouvrir avec…" pour les fichiers de code.',
  'i2a':'Ouvrez Multipad.', 'i2b':'Touchez le menu ⋮ et choisissez Installer l\'application.', 'i2c':'Ouvrez-le depuis l\'écran d\'accueil.',
  'i3a':'Ouvrez Multipad dans Safari.', 'i3b':'Touchez Partager et choisissez Sur l\'écran d\'accueil.', 'i3c':'Ouvrez-le depuis l\'icône. Sur iPad, utilisez Split View de Safari pour avoir deux fenêtres.',
  'dl.filesTitle':'Télécharger l\'installeur', 'dl.filesIntro':'Si vous préférez un fichier qui s\'installe comme n\'importe quel programme, téléchargez celui de votre système.',
  'dl.thSys':'Système', 'dl.thFile':'Fichier', 'dl.thAction':'Téléchargement', 'dl.get':'Télécharger', 'dl.notYet':'Bientôt',
  'dl.iosOnly':'Apple n\'autorise pas les installeurs hors de l\'App Store ; utilisez Safari',
  'dl.soon':'Les boutons gris n\'ont pas encore de fichier publié. En attendant, installez Multipad depuis le navigateur.',
  'dl.nWin':'Windows peut afficher "Windows a protégé votre ordinateur". Cliquez sur Informations complémentaires, puis sur Exécuter quand même.',
  'dl.nMac':'Sur Mac, s\'il indique qu\'il ne peut pas être ouvert, allez dans Réglages Système, Confidentialité et sécurité, et choisissez Ouvrir quand même.',
  'dl.nAnd':'Sur Android, autorisez l\'installation d\'applications de sources inconnues pour votre navigateur quand il le demande.',
  "dl.warnTitle":"Si un avertissement apparaît à l'installation",
  "dl.warnWhy":"Les installeurs de Multipad n'ont pas de signature numérique payante : Windows, Mac et Android ne les reconnaissent pas et affichent un avertissement la première fois. Le code est ouvert et chaque installeur est généré automatiquement sur GitHub à partir de ce code. Voici comment l'installer quand même.",
  "dl.w1a":"Ouvrez Multipad-Setup.exe. Si \"Windows a protégé votre ordinateur\" (\"Windows protected your PC\") apparaît, n'appuyez pas sur Ne pas exécuter.",
  "dl.w1b":"Cliquez sur le lien Informations complémentaires (More info), sous le texte de l'avertissement.",
  "dl.w1c":"Le bouton Exécuter quand même (Run anyway) apparaît. Appuyez dessus et suivez l'installeur. Cela n'arrive que la première fois.",
  "dl.w1d":"Si le navigateur retient le téléchargement, dans Chrome ouvrez Téléchargements et choisissez Conserver ; dans Edge survolez le téléchargement, appuyez sur ⋯ et choisissez Conserver.",
  "dl.w2a":"Ouvrez Multipad.dmg et faites glisser Multipad dans le dossier Applications.",
  "dl.w2b":"Ouvrez Multipad. S'il indique qu'Apple ne peut pas le vérifier, appuyez sur Terminé ; ne le mettez pas à la corbeille.",
  "dl.w2c":"Allez dans Réglages Système, Confidentialité et sécurité. Sous Sécurité, appuyez sur Ouvrir quand même et confirmez avec votre mot de passe.",
  "dl.w3a":"Ouvrez Multipad.apk depuis les téléchargements du navigateur.",
  "dl.w3b":"S'il indique que votre navigateur ne peut pas installer d'applications, touchez Paramètres, activez Autoriser cette source et revenez.",
  "dl.w3c":"Touchez Installer. Si Google Play Protect dit qu'il ne connaît pas l'application, touchez Plus de détails, puis Installer quand même.",
  "dl.w4":"Sur Linux, faites un clic droit sur Multipad.AppImage, ouvrez Propriétés, Permissions, cochez Autoriser l'exécution du fichier comme un programme et ouvrez-le.",
  "dl.warnPwa":"Si vous préférez ne voir aucun avertissement, installez Multipad depuis le navigateur comme expliqué plus haut. C'est la même application et elle se met à jour toute seule.",

  'keys.h1':'Raccourcis clavier', 'keys.lede':'Sur Mac, utilisez Cmd au lieu de Ctrl. Nouveau et Fermer utilisent Alt, car dans un onglet de navigateur, le navigateur garde Ctrl+N et Ctrl+W.',
  'keys.th1':'Action', 'keys.th2':'Raccourci',
  'k1':'Exécuter ou prévisualiser', 'k2':'Arrêter', 'k3':'Panneau d\'exécution', 'k4':'Changer de langage', 'k5':'Nouveau', 'k6':'Ouvrir', 'k7':'Enregistrer / Enregistrer sous', 'k8':'Fermer l\'onglet', 'k9':'Onglet suivant',
  'k10':'Rechercher / Remplacer', 'k11':'Aller à la ligne', 'k12':'Erreur suivante', 'k13':'Diviser le volet', 'k14':'Déplacer l\'onglet vers l\'autre volet', 'k15':'Nouvelle fenêtre', 'k16':'Panneau latéral', 'k17':'Retour à la ligne',

  'news.h1':'Nouveautés', 'news.lede':'Nouvelles versions et changements de Multipad.',
  'n5d':'Version 1.4.0, novembre 2026', 'n5p':'Multipad est maintenant en portugais et en français, en plus de l\'espagnol et de l\'anglais. Le bouton de langue ouvre un menu avec les quatre, et la première fois Multipad prend la langue de votre navigateur.',
  'n4d':'Version 1.3.3, novembre 2026', 'n4p':'Si vous appuyez sur Ouvrir alors que le sélecteur de fichiers est déjà ouvert, Multipad vous prévient au lieu d\'afficher une erreur.',
  'n3d':'Version 1.3.2, novembre 2026', 'n3p':'Des dossiers dans Documents de l\'espace de travail : créez des dossiers et sous-dossiers, déplacez les fichiers en les faisant glisser et enregistrez un dossier entier sur le disque, ou en .zip sur Android, Firefox et iPhone. L\'indicateur de fichier ouvert est maintenant une icône de fenêtre, pour ne plus le confondre avec des modifications non enregistrées.',
  'n2d':'Version 1.3.1, novembre 2026', 'n2p':'Tout enregistrer enregistre aussi les nouveaux documents : il demande où enregistrer chacun. Arrivée des installeurs pour Windows, Mac, Linux et Android.',
  'n1d':'Novembre 2026', 'n1p':'Lancement du site de Multipad. La version 1.3.0 apporte les volets, plusieurs fenêtres, l\'exécution du code et les erreurs signalées pendant la saisie.',
  'updNote':'Quand une nouvelle version sort, l\'application vous prévient et se met à jour en un geste.',

  'faq.h1':'Questions fréquentes',
  'q1':'Combien ça coûte ?', 'a1':'Rien. Multipad est gratuit et ne demande pas de compte.',
  'q2':'Quelle différence entre installer depuis le navigateur et télécharger l\'installeur ?', 'a2':'C\'est le même éditeur. Depuis le navigateur, cela prend une minute, occupe peu de place et se met à jour tout seul. L\'installeur est un fichier qui s\'installe comme n\'importe quel programme et ne dépend pas de Chrome ou d\'Edge.',
  'q3':'Où mes fichiers sont-ils enregistrés ?', 'a3':'Votre travail est enregistré dans le stockage du navigateur de cet appareil. Quand vous enregistrez avec Ctrl+S, Chrome et Edge sur ordinateur écrivent directement dans le fichier d\'origine ; sur Android, Firefox et iPhone, une copie est téléchargée.',
  'q4':'Mon code quitte-t-il mon ordinateur ?', 'a4':'Seulement quand vous exécutez un langage compilé (Java, C++, C# et d\'autres), car ce code est envoyé au serveur Judge0. HTML, CSS, JavaScript, Python et SQL s\'exécutent sur votre appareil.',
  'q5':'Puis-je utiliser deux écrans sur une tablette ?', 'a5':'Cela dépend du système. Sur Android, vous pouvez utiliser l\'écran partagé avec deux fenêtres Chrome ; sur iPad, Split View de Safari avec deux onglets Multipad.',
  'q6':'Est-ce que ça marche hors ligne ?', 'a6':'Oui, une fois installé. Python et SQL ont besoin d\'Internet la première fois, et les langages compilés toujours, car ils s\'exécutent sur Judge0.'
};

const DICTS = { en: EN, pt: PT, fr: FR };

const OS_NAMES = {
  windows:{es:'Estás en Windows', en:'You are on Windows', pt:'Você está no Windows', fr:'Vous êtes sur Windows'},
  mac:{es:'Estás en Mac', en:'You are on a Mac', pt:'Você está no Mac', fr:'Vous êtes sur Mac'},
  linux:{es:'Estás en Linux', en:'You are on Linux', pt:'Você está no Linux', fr:'Vous êtes sur Linux'},
  android:{es:'Estás en Android', en:'You are on Android', pt:'Você está no Android', fr:'Vous êtes sur Android'},
  ios:{es:'Estás en iPhone o iPad', en:'You are on iPhone or iPad', pt:'Você está no iPhone ou iPad', fr:'Vous êtes sur iPhone ou iPad'},
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
</style>`,
  pt:`<h1>Olá, Multipad</h1>
<p>Mude este texto e veja o resultado.</p>

<style>
  body { font-family: sans-serif; padding: 16px; }
  h1 { color: #2f6bff; }
</style>`,
  fr:`<h1>Bonjour, Multipad</h1>
<p>Modifiez ce texte et regardez le résultat.</p>

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
  // Video de la página Para docentes en el idioma elegido.
  const vid = document.querySelector('.tch-video');
  if (vid && vid.dataset.lang !== l) { vid.dataset.lang = l; vid.src = 'media/multipad-modo-aula-' + l + '.mp4'; }
  const dict = DICTS[l];
  nodes.forEach(n => { n.textContent = dict ? (dict[n.dataset.i18n] ?? EN[n.dataset.i18n] ?? ES[n.dataset.i18n]) : ES[n.dataset.i18n]; });
  langBtn.value = l;
  const titles = { en: document.body.dataset.titleEn, pt: document.body.dataset.titlePt, fr: document.body.dataset.titleFr };
  document.title = titles[l] || titleEs;
  if (code && !edited) { code.value = SAMPLE[l]; render(); }
  applyDownloads();
  try { localStorage.setItem('mp-site-lang', l); } catch (e) {}
}

function applyDownloads(){
  document.querySelectorAll('.dl-link').forEach(a => {
    const url = DOWNLOADS[a.dataset.file];
    if (url) { a.href = url; a.removeAttribute('aria-disabled'); }
    else { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); a.textContent = DICTS[lang] ? DICTS[lang]['dl.notYet'] : 'Muy pronto'; }
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
langBtn.addEventListener('change', () => setLang(langBtn.value));
document.querySelectorAll('.app-link').forEach(a => { a.href = APP_URL; a.rel = 'noopener'; });
document.querySelectorAll('.teacher-link').forEach(a => { a.href = APP_URL + '#docente'; a.rel = 'noopener'; });
if (REPO_URL) { const r = document.getElementById('repoLink'); r.href = REPO_URL; r.hidden = false; }

let saved = null;
try { saved = localStorage.getItem('mp-site-lang'); } catch (e) {}
function browserLang(){
  for (const l of navigator.languages || [navigator.language || 'es']) {
    const c = String(l).slice(0, 2).toLowerCase();
    if (c === 'es' || DICTS[c]) return c;
  }
  return 'en';
}
setLang(saved && (saved === 'es' || DICTS[saved]) ? saved : browserLang());
