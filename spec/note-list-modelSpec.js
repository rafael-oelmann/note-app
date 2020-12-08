// note-list-model.js

function instantiatedNoteListObject() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('instantiatedNoteListObject')
  assert.isTrue(typeof noteList == 'object')
}

instantiatedNoteListObject();

function instantiatedWithEmptyArray() {
  var assert = new Assert();
  var noteList = new NoteList();
  console.log('instantiatedWithEmptyArray')
  assert.toEqual(noteList.listNotes(), Array.isArray())
}

instantiatedWithEmptyArray();

function addListNote() {
  var assert = new Assert();
  var noteList = new NoteList();
  noteList.addNote('hello world!');

  assert.toEqual(noteList.list[0].getText(), 'hello world!')

}

addListNote();
  