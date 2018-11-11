// managing the data
'use strict;'

import { utilService} from '../../utils.js'
const NOTES_KEY = 'notes';


var notesDB=[];

function queryMissKeep() {
    var notes = utilService.getFromStorage(NOTES_KEY);
    if (!notes)  notes=notesDB;
    utilService.store(NOTES_KEY, notes)
    return Promise.resolve(notes);
  }

function addNote(note) {
    notesDB.push(note);
    utilService.saveToStorage(NOTES_KEY, notesDB);
  }

function getNotes(){
  return notesDB;
}

function editNote(note){// NOT activated YET
   var noteIdx=notesDB.findIndex(note.id);
   console.log(noteIdx, notesDB);
   notesDB[noteIdx]=note;
   utilService.saveToStorage(NOTES_KEY, notesDB)

}

function deleteNote(note){//NOT activated YET
  var noteIdx=notesDB.findIndex(note.id);
  notesDB.splice(noteIdx, 1);
  utilService.saveToStorage(NOTES_KEY, notesDB)
}

function pinNote (note){// not activated yet
  var noteIdx=notesDB.findIndex(note.id);
  notesDB.splice(noteIdx, 1);
  notesDB.unshift(note);
  utilService.saveToStorage(NOTES_KEY, notesDB)
}



export const missKeepService = {
    addNote,
    queryMissKeep,
    getNotes,
    editNote,
    deleteNote,
    pinNote,
  
  }
