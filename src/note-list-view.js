class NoteListView {

  constructor(notelist) {

    this.list = notelist

}

  display() {
    var returnString = ""

    this.list.list.forEach( (note) => {

      returnString = returnString + '<li><div>' + note.getText() + '</div></li>'

    }); 

    returnString = '<ul>' +returnString + '</ul>'
    return returnString

  }

}

