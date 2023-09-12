// This controls the button for the c note.
// This variable calls the cNote audio element in the HTML.
const cNote = document.getElementById('c');
const cNoteAudio = document.getElementById('cAudio');

cNote.addEventListener('click', () => {
    cNoteAudio.currentTime = 0;
    cNoteAudio.play();
});

// This controls the button for the d note.

const dNote = document.getElementById('d');
const dNoteAudio = document.getElementById('dAudio');

dNote.addEventListener("click", () => {
    dNoteAudio.currentTime = 0;
    dNoteAudio.play();
});

// // This controls the button for the e note.
const eNote = document.getElementById('e');
const eNoteAudio = document.getElementById('eAudio');

eNote.addEventListener("click", () => {
    eNoteAudio.currentTime = 0;
    eNoteAudio.play();
});

// // This controls the button for the f note.
const fNote = document.getElementById('f');
const fNoteAudio = document.getElementById('fAudio');

fNote.addEventListener("click", () => {
    fNoteAudio.currentTime = 0;
    fNoteAudio.play();
});

// // This controls the button for the g note.
const gNote = document.getElementById('g');
const gNoteAudio = document.getElementById('gAudio');

gNote.addEventListener("click", () => {
    gNoteAudio.currentTime = 0;
    gNoteAudio.play();
});

// // This controls the button for the a note.
const aNote = document.getElementById('a');
const aNoteAudio = document.getElementById('aAudio');

aNote.addEventListener("click", () => {
    aNoteAudio.currentTime = 0;
    aNoteAudio.play();
});

// // This controls the button for the b note.
const bNote = document.getElementById('b');
const bNoteAudio = document.getElementById('bAudio');

bNote.addEventListener("click", () => {
    bNoteAudio.currentTime = 0;
    bNoteAudio.play();
});

