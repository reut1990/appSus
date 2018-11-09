// managing the data
'use strict;'



var notesDB=[];

function queryMissKeep() {
    var notes = storageService.load(NOTES_KEY);
    if (!notes) {
      notes = getNotesFromJson();
      storageService.store(NOTES_KEY, notes)
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


export const missKeepService = {
    addNote,
    queryMissKeep,
    getNotes,
  
  }