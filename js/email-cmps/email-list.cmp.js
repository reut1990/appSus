import emailPreview from './email-preview.cmp.js'


export default {
    props: ['emails'],
    template: `
        <section class="inbox-container">
                <input placeholder="Search your emails" type="text">    
                <ul class="email-count">
                    <li>Read Emails: <span>{{readEmails}}</span></li>
                    <li>Unread Emails: <span>{{unreadEmails}}</span></li>

                </ul>
                <div class="email-container">
                   <email-preview 
                    v-for="email in emails"
                    :email="email"
                    @click.native="selectedMail(email)"
                    :class="{selected: selectedEmail === email}"
                    @isEmailRead="setReadEmail">
                </email-preview>
                </div>  
        </section>
    `,
    data() {
        return {
            selectedEmail: '',
            readEmails: 0,
            unreadEmails: 0
            //TODO - make unreademails dynamic emails.length did not work
        }
    },
    created() {

    },
    methods: {
        selectedMail(email) {
            this.selectedEmail = email;
            // this.$emit('selected-email', this.email )
            //Emit is not in use at the moment
        },
        setReadEmail(isEmailRead) {
            if (isEmailRead) {

                this.readEmails++;
                this.unreadEmails--;
            } else {
                this.unreadEmails++;
                this.readEmails--;
            }
            this.getNumOfReadEmails();
    },
    getNumOfReadEmails() {
        console.log(this.emails.length, 'email length - in methods');
        var emails = this.emails;
        console.log('emails from in the function', emails)
        var emailCount = emails.reduce(function (acc, email) {
            if (email.isRead) {
                if (!acc[read]) {
                    acc[read] = 1
                };
            } else {
                if (!acc[unread]) {
                    acc[unread] = 1
                } else (acc[unread]++);
            }
            return acc;
        }, {})
        return emailCount;
    }

},
computed: {
    

},
components: {
    emailPreview
}
}
