

import textNote from '../cmps-missKeep/text-note.cmp.js';
import newImg from '../cmps-missKeep/new-img.cmp.js';
import newList from '../cmps-missKeep/new-list.cmp.js';

export default {
    props: ['note'],
    template: `
      <li>
         <keep-alive>
            <component 
                :is="component"
                :isDisabled="isDisabled" 
                v-bind:note="note"
                @dblclick.native="handleDblClick"   
            ></component>
         </keep-alive>
      </li>

  `,
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
        handleDblClick(){
            console.log('double click happened')
            this.isDisabled = ! this.isDisabled
        }
    },
    created() {
        this.showNotes(this.note.type)
    },
    computed: {

    },
    components: {
        'text-note': textNote,
        'new-img': newImg,
        'new-list': newList,
    }
}