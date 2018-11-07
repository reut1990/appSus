import emailList from './email-list.cmp.js'
import emailPreview from './email-preview.cmp.js'

// import emailDetails from './email-details.cmp.js'
import {emailServices} from '../email-services/email-services.js'

export default {
    template: `
        <section class="">
              
            <email-list  @selected-email="setSelectedEmail" :emails="emails"></email-list>   
        </section>
    `,

    //v-bind:class="isEmailSelected"   took out this line not sure if needed
    data() {
        return {
            emails:[],
            selectedEmail:null
        }
    },
    created(){
        emailServices.query()
            .then(emails =>{
                this.emails = emails
            })   
    },
    methods: {
        setSelectedEmail(mail) {
            this.setSelectedEmail = mail;
        }
        

    },
    computed:{

    },
    components: {
        emailList,
        emailPreview
        // emailDetails
    }
}