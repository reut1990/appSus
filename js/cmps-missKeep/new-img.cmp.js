
import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'
import { missKeepService } from '../services-missKeep/service-missKeep.js';
import {utilService} from '../services-missKeep/utils.js'

import textNote from './text-note.cmp.js';


export default {
    // props: ['books'],
    template: `
    <section class="new-imgList">
      
    <div class="upload-img-container">
         <div class="img-container"><p>Picture goes here</p></div>
         <form class="input-src">
              <input placeholder="Insert img url" v-model="imgUrl">
              <button type="button" v-on:click="close">Upload Pic</button>
              <!-- v-on:click="uploadPic"  -->
         </form>
    </div>
    <text-note></text-note>
    <div class="buttons">
        <button type="button" v-on:click="close">Close</button> 
        <button  @click="addNote" type="button" >Add note</button> 
    </div> 
    </section>
    `,
    data() {
        return {
            imgUrl: ''
        }
    },

    methods: {
        close() {
            eventBus.$emit(CLOSE_COMPONENT);

        },
        addNote(){
            let note={
                type:'img',
                id:utilService.makeId(),
                imgUrl:this.imgUrl,
                // title:this.title,
                // txt:this.txt,// check how to had it from the component
            }
            missKeepService.addNote(note);
        },
    },
    computed: {

    },
    components: {
        textNote,
        missKeepService,
        utilService,
    }
}