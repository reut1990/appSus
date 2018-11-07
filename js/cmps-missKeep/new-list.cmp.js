



import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'


export default {

   template: `
    <section class="new-list">
   
             <button type="button" v-on:click="close">Close</button>     
       
    </section>
    `,
    data() {
        return {
         
        }
    },

    methods: {
        close(){
            eventBus.$emit(CLOSE_COMPONENT);
           },
    
      },
    computed: {
     
       
    },
    components: {
    }
}

