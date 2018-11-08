import emailList from './email-list.cmp.js'
import emailPreview from './email-preview.cmp.js'
import { emailServices } from '../email-services/email-services.js'


export default {
    template: `
        <section class="">
            <button class="close-compose-btn">Close Draft</button>
                    <h1>COMPOSE EMAIL</h1>
        <textarea rows="20" cols="50">

</textarea>
        </section>
    `,

    //v-bind:class="isEmailSelected"   took out this line not sure if needed
    data() {
        return {
         
        }
    },
    created() {
       
    
    },
    methods: {

    },
    computed: {

    },
    components: {
      
    }
}