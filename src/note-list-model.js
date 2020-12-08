'use strict';

class NoteList {
  constructor() {
    this.list = [];
  }

  addNote(note) {
    var newNote = new Note(note)
    this.list.push(newNote)
  }

  listNotes() {
    return this.list;
  }
}