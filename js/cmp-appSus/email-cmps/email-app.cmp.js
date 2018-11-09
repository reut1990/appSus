import emailList from './email-list.cmp.js'
import emailPreview from './email-preview.cmp.js'
import { emailServices } from '../../services-appSus/email-services/email-services.js'
import emailDetails from './email-details.cmp.js'
import emailFilter from './email-filter.cmp.js'
import emailCount from './email-count.cmp.js'
import emailCompose from './email-compose.cmp.js'


export default {
    template: `
        <section class="emailApp" >
        <email-filter @filterEmails="filterEmails"></email-filter>
        <email-count :emails="emails"></email-count>
        <button class="compose-email-btn" v-on:click="onComposeEmail">Compose New Email</button>

            <!-- <router-view :emails="emails" :email="selectedEmail"
                @email-open="openEmail"></router-view> -->
                <email-details v-if="emailId && !composeEmail" :email="selectedEmail" @email-closed="resetEmailIdtoNull"></email-details>
                <email-list v-else-if="emails.length > 0 && !composeEmail" @email-opened="setOpenedEmail" :emails="emails"></email-list>   
                <email-compose v-if="composeEmail"  ></email-compose>  
            
        <!-- TODO: CHANGE TO ROUNTER IF THERE IS TIME -->
        </section>
    `,

    data() {
        return {
            emails: [],
            selectedEmail: null,
            emailId: null,
            composeEmail: false,
        }
    },
    created() {
        var prmGetEmails = emailServices.query();
        prmGetEmails.then(emails => {
            this.emails = emails
            console.log('created', this.emails)
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
        resetEmailIdtoNull() {
            this.selectedEmail = null;
            this.emailId = null;
        },
        onComposeEmail() {
            this.composeEmail = true;
        },
        // setEmailFilter(filter) {
        //     console.log('email app parent', filter);
        // },
        filterEmails(filter) {
            console.log(filter, ' the filter')            
            var prmFilterEmails = emailServices.query(filter);
            prmFilterEmails.then(emails => this.emails = emails);
        },


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