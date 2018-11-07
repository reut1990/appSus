import emailPreview from './email-preview.cmp.js'


export default {
    props: ['emails'],
    template: `
        <section class="inbox-container">
                <input placeholder="Search your emails" type="text">    
                <ul class="email-count">
                    <li>Read Emails: <span>{{ReadEmails}}</span></li>
                    <li>Unread Emails: <span>{{UnreadEmails}}</span></li>

                </ul>
                <div class="email-container">
                   <email-preview 
                    v-for="email in emails"
                    :email="email"
                    @click.native="selectedMail(email)"
                    :class="{selected: selectedEmail === email}"></email-preview>
                </div>  
        </section>
    `,
    data() {
        return {
            selectedEmail: '',
            ReadEmails:0,
            UnreadEmails:0
        }
    },
    created() {
        console.log('emails', this.emails);


    },
    methods: {
        selectedMail(email) {
            this.selectedEmail = email;
            console.log(this.email.subject, 'lets see if emit works')
            this.$emit('selected-email', this.email )
        }

    },
    components: {
        emailPreview
    }
}
