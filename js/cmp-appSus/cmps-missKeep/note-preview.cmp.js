
import textNoteTemplate from './text-note-template.cmp.js';
import imgNoteTemplate from './img-note-template.cmp.js';
import listNoteTemplate from './list-note-template.cmp.js';



export default {
    props: ['note'],
   template: `
   <section>
         <img class="pin"  src="./img/pin-icon.png">   
         <text-note-template v-if="isTextNote" v-bind:note="note"></text-note-template>
         <img-note-template v-if="isImgNote" v-bind:note="note"></img-note-template>
         <list-note-template v-if="islistNote" v-bind:note="note"></list-note-template>
   </section>
  `,

    data() {
        return{
        isTextNote:false,
        islistNote:false,
        isImgNote:false
        }
    },

    methods: {
      

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
      listNoteTemplate

    }
}

