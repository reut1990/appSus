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
        <email-filter @filterEmails="filterEmails" @filterbyKeyword="filterbyKeyword" @sortByDate="sortByDate"></email-filter>
        <email-count :emailCount="emailCount" :totalNumOfEmails="totalNumOfEmails"></email-count>
        <button class="compose-email-btn" v-on:click="onComposeEmail">Compose New Email</button>

            <!-- <router-view :emails="emails" :email="selectedEmail"
                @email-open="openEmail"></router-view> -->
                <section class="email-wrapper">
                <email-details @deleteEmail="deleteEmail" v-if="emailId && !composeEmail" :email="selectedEmail" @email-closed="resetEmailIdtoNull"></email-details>
                <email-list v-else-if="displayedEmails.length > 0 && !composeEmail" @isEmailRead="isRead" @isRead="setOpenedEmail(email)" @deleteEmail="deleteEmail" @email-opened="setOpenedEmail" :emails="displayedEmails"></email-list>   
                <email-compose v-if="composeEmail"  @closeComposeEmail="closeComposeEmail"></email-compose>  
                </section>
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
        this.updateDisplayedEmails();
        this.getUpdatedNumOfEmails();
    },
    methods: {
        setOpenedEmail(email) {
            emailServices.updateEmailStatus(email, true);
            var prm = emailServices.query()
            prm.then(emails => this.displayedEmails = emails);
            this.selectedEmail = email;
            this.emailId = email.id;


        },
        isRead(email) {
            emailServices.updateEmailStatus(email, !email.isRead);
            this.updateDisplayedEmails();
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
            this.updateDisplayedEmails();

        },
        filterbyKeyword(keyword) {
            this.keyword = keyword;
            this.updateDisplayedEmails();

        },
        closeComposeEmail() {
            this.composeEmail = null;
        },
        getUpdatedNumOfEmails() {
            var emails = emailServices.getEmailCount();
            this.emailCount = emails.readEmails;
            this.totalNumOfEmails = emails.totalNumOfEmails;
        },
        deleteEmail(email) {
            if (this.emailId) {
                this.emailId = null;
            }
            emailServices.deleteEmail(email);
            this.updateDisplayedEmails();

        },
        sortByDate() {
            emailServices.sortByDate();
            this.updateDisplayedEmails();

        },
        updateDisplayedEmails() {
            var prm = emailServices.query(this.filter, this.keyword);
            prm.then(emails => this.displayedEmails = emails);
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