
import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'
import { missKeepService } from '../services-missKeep/service-missKeep.js';
import { utilService } from '../services-missKeep/utils.js'

import textNote from './text-note.cmp.js';


export default {
    props: ['note', 'isDisabled'],
    template: `
    <section class="new-imgList">
    <div class="upload-img-container">
         <div class="img-container" v-bind:style="style"></div>
         <form class="input-src" @submit.prevent="updateImgSrc">
              <input :disabled="isDisabled"  placeholder="Insert img url" v-model="imgUrl">
              <button type="sumbit" >Upload Pic</button>
         </form>
    </div>
    <text-note v-on:input-title="updateTitle"  :disabled="isDisabled"  v-on:input-txt="updateTxt"></text-note>
     </section>
    `,
    data() {
        return {
            imgUrl: '',
            title: '',
            txt: '',
            style:{},
        }
    },
    created(){
        if(this.note){
            this.title=this.note.title;
            this.txt=this.note.txt;
            this.imgUrl=this.note.imgUrl;
            this.style=this.note.style;
          }
    },
    methods: {
        close() {
            eventBus.$emit(CLOSE_COMPONENT);

        },
        updateImgSrc(){
            this.style = {'background-image': `url('${this.imgUrl}')`}
        },
        updateTitle(title){
            this.title=title;
        },
        updateTxt(txt){
           this.txt=txt;
        }
        

    },
    computed: {

        fromData() {
            return {
                type: 'new-img',
                id: utilService.makeId(),
                imgUrl: this.imgUrl,
                title: this.title,
                txt: this.txt,
                style:this.style
            }
        },
    },
    components: {
        textNote,
        missKeepService,
        utilService,
    }
}