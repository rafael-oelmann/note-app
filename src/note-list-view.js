class NoteListView {

  constructor(notelist) {

    this.list = notelist

}

  display() {
    var returnString = ""

    for(var i = 0; i < this.list.list.length; i++) {

      returnString = returnString + '<li><div>' + this.list.list[i].getText() + '</div></li>'

    }
    returnString = '<ul>' + returnString + '</ul>'
    return returnString

  }

}