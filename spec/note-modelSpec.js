'use strict';

// notes-model.js

function instantiatedNoteObject() {
  var assert = new Assert();
  var note = new Note('text');
  console.log('instantiatedNoteObject')
  assert.isTrue(typeof note == 'object')
}

instantiatedNoteObject();

function instantiatesWithText() {
  var assert = new Assert();
  var note = new Note('text');
  console.log('instantiatesWithText')
  assert.toEqual(note.getText(), 'text')
}

instantiatesWithText();

