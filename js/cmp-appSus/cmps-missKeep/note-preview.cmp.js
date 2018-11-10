
import textNoteTemplate from './text-note-template.cmp.js';
import imgNoteTemplate from './img-note-template.cmp.js';
import listNoteTemplate from './list-note-template.cmp.js';
import noteEdit from './note-edit.cmp.js';



export default {
    props: ['note'],
   template: `
   <section>
         <img class="pin"  src="./img/pin-icon.png"> 
         <button type="button" v-if="showEdit" v-on:click="close">Close</button>
         <button type="button"  v-if="showEdit" v-on:click="saveEdit" >Save Editing</button>
          <note-edit v-if="showEdit" v-bind:note="noteToEdit" > </note-edit> 
          <!-- v-on:newData="newData" -->
          <text-note-template v-if="isTextNote && !showEdit"  v-on:editNote="edit"    v-bind:note="note"></text-note-template>
         <img-note-template v-if="isImgNote && !showEdit"  v-on:editNote="edit" v-bind:note="note"></img-note-template>
         <list-note-template v-if="islistNote && !showEdit"  v-on:editNote="edit" v-bind:note="note"></list-note-template>

    </section>
  `,

    data() {
        return{
        isTextNote:false,
        islistNote:false,
        isImgNote:false,
        showEdit:false,
        noteToEdit:{},
        // nwData:{}
        }
    },

    methods: {
      edit(noteToEdit){
          console.log('note preivew got the emit,' , noteToEdit)
         this.showEdit=true;
         this.noteToEdit=noteToEdit;

      },
      close(){
        this.showEdit=false;
      },
    //   newData(newData){
    //       this.nwData=newData;
    //   },
      saveEdit(){
        missKeepService.editNote(this.newData);
      },
    },
    created() {
        console.log('note brought to note preview', this.note);
       if(this.note.type==='text-note') this.isTextNote=true;
       else if(this.note.type==='new-list') this.islistNote=true;
       else if(this.note.type==='new-img') this.isImgNote=true;
    },
    computed: {

    },
    components: {
      textNoteTemplate,
      imgNoteTemplate,
      listNoteTemplate,
      noteEdit

    }
}

