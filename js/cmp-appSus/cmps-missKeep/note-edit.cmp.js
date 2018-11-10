

import textNote from './text-note.cmp.js';
import newImg from './new-img.cmp.js';
import newList from './new-list.cmp.js';

export default {
    props: ['note'],
   template: `
      <li class="note-item">
      <img class="pin"  src="../../img/pin-icon.png">
            <component 
                :is="component"
                :style="note.style"  
            ></component>
      </li>

  `,
//                 :isDisabled="isDisabled" 
// v-bind:note="note"
// @dblclick.native="handleDblClick" 
    data() {
        return {
            component: '',
            isDisabled: true
        }
    },

    methods: {
        showNotes(componentName) {
            this.component = componentName;
            console.log(this.component);
        },
        // handleDblClick(){
        //     console.log('double click happened')
        //     this.isDisabled = ! this.isDisabled
        // }
    },
    created() {
        // if(this.note) this.showNotes(this.note.type)
    },
    computed: {

    },
    components: {
        'text-note': textNote,
        'new-img': newImg,
        'new-list': newList,
    }
}