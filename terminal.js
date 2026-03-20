
const page = window.location.pathname.split('/').pop() || 'index.html';
const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

function file(prefix, href, name) {
    if (href === page) {
        return { type: 'html', content: `${prefix} 🗋 <b>${name}</b>` };
    }
    return { type: 'html', content: `${prefix} 🗋 <a href="${href}">${name}</a>` };
}

const intros = {
    'index.html': [
        {type: 'text', content: 'Loading index.html... done'},
        {type: 'text', content: 'Filename: index.html'},
        {type: 'text', content: 'Size: 1.2 KB'},
        {type: 'text', content: 'Prepared by: Fred Ayala'},
        {type: 'text', content: 'Welcome to Fred Ayala\'s portfolio'},
        {type: 'text', content: 'Click on the files below to explore.'},
        {type: 'text', content: 'Today is: ' + date},
    ],

    'bio.html': [
        {type: 'text', content: 'Loading bio.html... done'},
        {type: 'text', content: 'Filename: bio.html'},
        {type: 'text', content: 'Size: 2.5 KB'},
        {type: 'text', content: 'Prepared by: Fred Ayala'},
    ],

    'inspo.html': [
        {type: 'text', content: 'Loading inspo.html... done'},
        {type: 'text', content: 'Filename: inspo.html'},
        {type: 'text', content: 'Size: 3.1 KB'},
        {type: 'text', content: 'Prepared by: Fred Ayala'},
    ],

    'amtrak.html': [
        {type: 'text', content: 'Loading amtrak.html... done'},
        {type: 'text', content: 'Filename: amtrak.html'},
        {type: 'text', content: 'Size: 3.1 KB'},
        {type: 'text', content: 'Prepared by: Fred Ayala'},
    ],

    'favs.html': [
        {type: 'text', content: 'Loading favs.html... done'},
        {type: 'text', content: 'Filename: favs.html'},
        {type: 'text', content: 'Size: 3.1 KB'},
        {type: 'text', content: 'Prepared by: Fred Ayala'},
    ],

    'gallery.html': [
        {type: 'text', content: 'Loading gallery.html... done'},
        {type: 'text', content: 'Filename: gallery.html'},
        {type: 'text', content: 'Size: 3.1 KB'},
        {type: 'text', content: 'Prepared by: Fred Ayala'},
    ],

    'statement.html': [
        {type: 'text', content: 'Loading statement.html... done'},
        {type: 'text', content: 'Filename: statement.html'},
        {type: 'text', content: 'Size: 3.1 KB'},
        {type: 'text', content: 'Prepared by: Fred Ayala'},
    ],
};

const nav = [
    {type: 'directory', content: 'Structure/'},
    {type: 'directory', content: '└── Nav/'},
    file('    ├──', 'index.html',     'index.html'),
    {type: 'directory', content: '    ├── AboutMe/'},
    file('    │   ├──', 'bio.html',   'bio.html'),
    file('    │   └──', 'inspo.html', 'inspo.html'),
    {type: 'directory', content: '    ├── Portfolio/'},
    {type: 'directory', content: '    │   └── UXDesign/'},
    file('    │       └──', 'amtrak.html', 'amtrak.html'),
    {type: 'directory', content: '    └── Photography/'},
    file('        ├──', 'favs.html',      'favs.html'),
    file('        ├──', 'all.html',       'all.html'),
    file('        └──', 'statement.html', 'statement.html'),
];

const intro = intros[page] ?? intros['index.html'];
const filesCount = nav.filter(item => item.type === 'html').length;
const dirsCount = nav.filter(item => item.type === 'directory').length;

const segments = [
    ...intro,
    ...nav,
    {content: `${dirsCount} directories, ${filesCount} files found`},
    {type: 'end', content: `User@UWC:~$`},
];

const output = document.getElementById('output');
const cursor = document.querySelector('.cursor');

let segID = 0;
let charID = 0;

function tick() {
const seg = segments[segID];
const content = seg.type === 'end' ? seg.content : seg.content + '\n';

if (seg.type === 'html') {
    const span = document.createElement('span');
    span.innerHTML = content;
    output.appendChild(span);
    segID++;
    charID = 0;
    setTimeout(tick);
    } else if (charID < content.length) {
        output.appendChild(document.createTextNode(content[charID]));
        charID++;
        setTimeout(tick);
    } else {
        segID++;
        charID = 0;
        setTimeout(tick);
    } 

    if (segID >= segments.length) {
        output.appendChild(cursor);
        cursor.classList.add('active');
        return;
    }
}
setTimeout(tick, 700); // Initial delay before starting