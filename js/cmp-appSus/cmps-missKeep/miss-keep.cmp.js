
import eventBus, { CLOSE_COMPONENT } from '../../event-bus.js';
import textNote from '../cmps-missKeep/text-note.cmp.js';
import newImg from '../cmps-missKeep/new-img.cmp.js';
import newList from '../cmps-missKeep/new-list.cmp.js';
import { missKeepService } from '../../services-appSus/services-missKeep/service-missKeep.js';
import notesCreated from '../cmps-missKeep/notes-created.cmp.js';




export default{

 template: `
    <section class="miss-keep-app">
      <h1 class="app-title">Miss keep</h1>
      <div v-if="isShow" class="container">
          <form class="input-form">
              <input v-on:click="inputClicked('text-note')" ref="myInput" type="text" placeholder="type your note..." v-model="noteTxt">
          </form>
        
          <div class="tooltip" v-on:click="inputClicked('new-list')">
              <img class="new-list" src="./img/newList.png" alt="new List">
              <span class="tooltiptext">New List</span>
          </div>
          <div class="tooltip" >
              <img  v-on:click="inputClicked('new-img')" class="new-img"src="./img/newImage.png" alt="new Image">
              <span class="tooltiptext">New Note with Image Note</span>
          </div>
      </div>
      <form  v-if="isShow" class="input-search">
              <input ref="myInput" type="text" placeholder="search note..." v-model="search">
               <button v-on:click="showNotesBySearch" type="button">search</button>
      </form>
      <img class="pin"   v-if="!isShow" src="./img/pin-icon.png">
            <component 
               ref="noteForm"
                v-if="!isShow" 
                v-bind:is="component"></component>
       <div class="buttons"  v-if="!isShow">
        <button type="button" v-on:click="close">Close</button> 
        <button   type="button"  v-on:click="addNote">Add note</button> 
       </div> 
       <notes-created v-bind:notes="notesCreated"></notes-created>
    </section>
    `,
    data() {
        return {
            noteTxt: '',
            isShow: true,
            component: null,
            notesCreated:[],
            search:'',
        }
    },
    created() {
        eventBus.$on(CLOSE_COMPONENT, this.close)
    },
    methods: {
        inputClicked(componentName) {
            this.isShow = !this.isShow;
            this.component = componentName;

        },
            close() {
            this.isShow = true;
        },
        addNote(){
           missKeepService.addNote(this.$refs.noteForm.fromData);
            this.notesCreated= missKeepService.getNotes();
            this.isShow = true;
        },
        showNotesBySearch(){
            console.log(this.search);
        }
      

    },

    computed: {

    },
    components: {
        'text-note': textNote,
        'new-img': newImg,
        'new-list':newList,
        notesCreated,
    }
};