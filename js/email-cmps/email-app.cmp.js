import emailList from './email-list.cmp.js'
import emailPreview from './email-preview.cmp.js'
import { emailServices } from '../email-services/email-services.js'
import emailDetails from  './email-details.cmp.js'
import emailFilter from './email-filter.cmp.js'
import emailCount from './email-count.cmp.js'
import emailCompose from './email-compose.cmp.js'


export default {
    template: `
        <section class="emailApp" >
        <email-filter></email-filter>
        <email-count :emails="emails"></email-count>
        <button class="compose-email-btn" v-on:click="onComposeEmail">Compose New Email</button>

            <!-- <router-view :emails="emails" :email="selectedEmail"
                @email-open="openEmail"></router-view> -->
            <email-details v-if="emailId && !composeEmail" :email="selectedEmail" @email-closed="resetEmailIdtoNull"></email-details>
            <email-list v-else-if="emails.length > 0 && !composeEmail" @email-opened="setOpenedEmail" :emails="emails"></email-list>   
            <email-compose v-if="composeEmail" @email-opened="setOpenedEmail"></email-compose>   
        <!-- TODO: CHANGE TO ROUNTER IF THERE IS TIME -->
        </section>
    `,

    data() {
        return {
            emails: [],
            selectedEmail:null,
            emailId: null,
            composeEmail:false
        }
    },
    created() {
        // this.emailId = this.$route.params.emailId;

        // console.log('email id', this.emailId)

        var prmGetEmails = emailServices.query();
        prmGetEmails.then(emails => {
            console.log('got emails', emails)
            this.emails = emails
        })
    },
    methods: {
        setOpenedEmail(email) {
            email.isRead = true;
            emailServices.saveEmails(this.emails);
            this.selectedEmail = email;
            this.emailId = email.id;
            // this.$router.push(`/email/${email.id}`)

        },
        resetEmailIdtoNull(){
            this.selectedEmail=null;
            this.emailId = null;
        },
        onComposeEmail(){
            this.composeEmail=true;
        }
    },
    computed: {

    },
    components: {
        emailList,
        emailPreview,
        emailServices,
        emailDetails,
        emailFilter,
        emailCount,
        emailCompose
    }
}