

import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'
import { missKeepService } from '../services-missKeep/service-missKeep.js';
import { utilService } from '../services-missKeep/utils.js'

export default {
    props: ['note', 'isDisabled'],
    template: ` 
    <section class="text-note" v-bind:style="style">
        <form class="input-form">
            <div  class="input-form-header">
               <input
                :disabled="isDisabled"               
               type="text"  v-on:input="$emit('input-title', $event.target.value)" placeholder="Title..." v-model="title"/>
            </div>
           <textarea 
           :disabled="isDisabled"
            id="txt-box"    v-on:input="$emit('input-txt', $event.target.value)" placeholder=" Note Text..." v-model="txt"></textarea>
        </form>
        <div  class="edit-text-note">
            <input
           :disabled="isDisabled"            
            type="color" id="html5colorpicker"  v-on:change="changeBackground" value="#ff0000" >
        </div>  
    </section>
    `,
    data() {
        return {
            id:utilService.makeId(),
            title: '',
            txt: '',
            style: {
                'background-color': '',

            },
        }
    },
    created() {
        if (this.note) {
            this.title = this.note.title;
            this.txt = this.note.txt;
            this.style=this.style['background-color'];
        }
        
    },

    methods: {
        close() {
            eventBus.$emit(CLOSE_COMPONENT);

        },
        changeBackground() {
            this.style['background-color'] = event.target.value;
            console.log(this.style['background-color']);
        },

    },
    computed: {
        fromData() {
            return {
                type: 'text-note',
                id: this.id,
                title: this.title,
                txt: this.txt,
                style:this.style,
            }
        }

    },
    components: {
        missKeepService,
        utilService,
    }
}



