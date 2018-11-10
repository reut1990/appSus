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
        <email-filter @filterEmails="filterEmails" @filterbyKeyword="filterbyKeyword"></email-filter>
        <email-count :emailCount="emailCount" :totalNumOfEmails="totalNumOfEmails"></email-count>
        <button class="compose-email-btn" v-on:click="onComposeEmail">Compose New Email</button>

            <!-- <router-view :emails="emails" :email="selectedEmail"
                @email-open="openEmail"></router-view> -->
                <email-details v-if="emailId && !composeEmail" :email="selectedEmail" @email-closed="resetEmailIdtoNull"></email-details>
                <email-list v-else-if="displayedEmails.length > 0 && !composeEmail" @isEmailRead="isRead" @isRead="setOpenedEmail(email)" @email-opened="setOpenedEmail" :emails="displayedEmails"></email-list>   
                <email-compose v-if="composeEmail"  @closeComposeEmail="closeComposeEmail"></email-compose>  
            
        <!-- TODO: CHANGE TO ROUNTER IF THERE IS TIME -->
        </section>
    `,

    data() {
        return {

            totalNumOfEmails: 0,
            emailCount: 0,
            displayedEmails: [],
            selectedEmail: null,
            emailId: null,
            composeEmail: false,
            filter: 'all',
            keyword: ''
        }
    },
    created() {
        var prmGetEmails = emailServices.query();
        prmGetEmails.then(emails => this.displayedEmails = emails).then(emails => this.displayedEmails = emails);
        this.getUpdatedNumOfEmails();
    },
    methods: {
        setOpenedEmail(email) {
            emailServices.updateEmailStatus(email, true);
            var prm = emailServices.query()
            prm.then(emails => this.displayedEmails = emails);
            this.selectedEmail = email;
            this.emailId = email.id;

            // this.$router.push(`/email/${email.id}`)

        },
        isRead(email) {
            emailServices.updateEmailStatus(email, !email.isRead);
            var prm = emailServices.query()
            prm.then(emails => this.displayedEmails = emails);
        },
        resetEmailIdtoNull() {
            this.selectedEmail = null;
            this.emailId = null;
        },
        onComposeEmail() {
            this.composeEmail = true;
        },

        filterEmails(filter) {
            this.filter = filter;
            var prmFilterEmails = emailServices.query(filter);
            prmFilterEmails.then(emails => this.displayedEmails = emails);
        },
        filterbyKeyword(keyword) {
            this.keyword = keyword;
            var prmFilterEmailsbyKeyword = emailServices.query(this.filter, keyword);
            prmFilterEmailsbyKeyword.then(emails => this.displayedEmails = emails);
        },
        closeComposeEmail() {
            this.composeEmail = null;
        },
        getUpdatedNumOfEmails() {
            var emails = emailServices.getEmailCount();
            this.emailCount = emails.readEmails;
            this.totalNumOfEmails = emails.totalNumOfEmails;
            console.log(this.emailCount, this.totalNumOfEmails)
        }
    },
    computed: {

    },
    watch: {
        displayedEmails() {
            this.getUpdatedNumOfEmails();
        }
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