import emailList from './email-list.cmp.js'
import emailPreview from './email-preview.cmp.js'

// import emailDetails from './email-details.cmp.js'
import {emailServices} from '../email-services/email-services.js'

export default {
    template: `
        <section class="">
              
            <email-list v-bind:class="isEmailSelected" @selected-email="setSelectedEmail" :emails="emails"></email-list>   
        </section>
    `,
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