
import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'


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
    </section>
    `,
    data() {
        return {
            imgUrl: ''
        }
    },

    methods: {
      close(){
        eventBus.$emit(CLOSE_COMPONENT);

      }
    },
    computed: {

    },
    components: {
        textNote
    }
}