

import textNote from './text-note.cmp.js';
import newImg from './new-img.cmp.js';
import newList from './new-list.cmp.js';

export default {
    props: ['note'],
   template: `

      <li class="note-item" >  
            <component 
                :is="component"
                :style="note.style" 
                :note='note'
            ></component>
      </li>

  `,
                // ref="noteForm", 

    data() {
        return {
            component: '',
        }
    },

    methods: {
        showNotes(componentName) {
            this.component = componentName;
            console.log(this.component); 

        },
        // newData(){
        // this.$emit('newData',this.$refs.noteForm.fromData);
        // }
        
    },
    created() {
        if(this.note) this.showNotes(this.note.type);

    },

    
    computed: {

    },
    components: {
        'text-note': textNote,
        'new-img': newImg,
        'new-list': newList,
    }
}