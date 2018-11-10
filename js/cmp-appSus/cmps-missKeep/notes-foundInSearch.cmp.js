

import notePreview from './note-preview.cmp.js'


export default {
    props: ['notesFoundInSearch'],
    template: `
      <section class="notes-found">
           
            <ul>
             <h6>Notes founs:</h6>
               <li v-for="note in notesFoundInSearch">
                  <note-preview v-bind:note="note"></note-preview>
               </li>
            </ul>
       </section>
 

  `,

    data() {
        return {

        }
    },
    methods:
    {

    },
    components: {
        notePreview,
    }
}
