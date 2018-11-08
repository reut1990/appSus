

import notePreview from './note-preview.cmp.js';



export default {
    props: ['notes'],
    template: `
    <section>
         <ul class="notes-created">
            <note-preview v-for="note in notes"  v-bind:note="note" > </note-preview> 
        </ul>
    </section>
    `,
    data() {
        return {
            
        }
    },
    created(){
        // console.log(this.notes);
    },
    methods: {
   
    },
    computed: {

    },
    components: {
        notePreview,
    }
}