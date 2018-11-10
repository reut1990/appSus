// managing the data
'use strict;'

import { utilService} from '../../utils.JS'


var notesDB=[];

function queryMissKeep() {
    var notes = storageService.load(NOTES_KEY);
    if (!notes) {
      notes = getNotesFromJson();
      utilService.store(NOTES_KEY, notes)
    }
    notesDB = notes;
    return Promise.resolve(notesDB);
  }

function addNote(note) {
    notesDB.push(note);
    // console.log(notesDB);
}

function getNotes(){
  return notesDB;
}

function editNote(note){// NOT WORKING YET
   var noteIdx=notesDB.findIndex(note.id);
   console.log(noteIdx, notesDB);
   notesDB[noteIdx]=note;
   utilService.store(NOTES_KEY, notesDB)

}

function deleteNote(note){//NOT WORKING YET
  var noteIdx=notesDB.findIndex(note.id);
  notesDB.splice(noteIdx, 1);
  utilService.store(NOTES_KEY, notesDB)


}


export const missKeepService = {
    addNote,
    queryMissKeep,
    getNotes,
    editNote,
    deleteNote,
  
  }

  // return memos.filter(memo => memo.title.toUpperCase().includes(filter.byTitle.toUpperCase()))
  //                       .filter(memo => memo.type.toUpperCase().includes(filter.byType.toUpperCase()),
