

import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'
import { missKeepService } from '../services-missKeep/service-missKeep.js';
import {utilService} from '../services-missKeep/utils.js'

export default {
    // props: ['books'],
    template: `
    <section class="text-note">
        <form class="input-form">
            <div class="input-form-header">
               <input  type="text" placeholder="Title..." v-model="title"/>
               <img src="../../img/pin-icon.png">
            </div>
           <textarea id="txt-box" placeholder="Note Text..." v-model="txt"></textarea>
        </form>
        <div class="edit-text-note">
            <input type="color" id="html5colorpicker" onchange="clickColor(0, -1, -1, 5)" value="#ff0000" >
            <div class="buttons">
                <button type="button" v-on:click="close">Close</button> 
                 <button  @click="addNote" type="button" >Add note</button>  
             </div> 
        </div>  
    </section>
    `,
    data() {
        return {
            title: '',
            txt: '',
        }
    },

    methods: {
        close() {
            eventBus.$emit(CLOSE_COMPONENT);

        },
        addNote(){
            let note={
                type:'txt',
                id:utilService.makeId(),
                title:this.title,
                txt:this.txt,
            }
            missKeepService.addNote(note);
        },
 
    },
    computed: {


    },
    components: {
        missKeepService,
        utilService,
    }
}



