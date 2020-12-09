'use strict';

function noteListviewDisplay() {
  var assert = new Assert();
  var notelist = new NoteList();

  notelist.addNote('Hello');

  var noteListview = new NoteListView(notelist)

  assert.toEqual(noteListview.display(), '<ul><li><div>Hello</div></li></ul>');

}

noteListviewDisplay();

function noteListviewDisplayMulti() {
  var assert = new Assert();
  var notelist = new NoteList();

  notelist.addNote('Hello');
  notelist.addNote('Good Morning');

  var noteListview = new NoteListView(notelist)

  assert.toEqual(noteListview.display(), '<ul><li><div>Hello</div></li><li><div>Good Morning</div></li></ul>');
  console.log(noteListview.display())
}

noteListviewDisplayMulti();