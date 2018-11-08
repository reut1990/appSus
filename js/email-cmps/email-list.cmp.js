import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
        <section class="inbox-container" v-if="emails">
                       
                   <email-preview 
                    v-for="email in emails"
                    :email="email"
                    @dblclick.native="displayEmail(email)"
                    @click.native="selectedMail(email)"
                    :class="{selected: selectedEmail === email}">
                </email-preview>
        </section>
    `,
    data() {
        return {
            selectedEmail: this.emails[0],
            openedEmail: null,
        }
    },
    created() {
    },
   
    methods: {
        selectedMail(email) {
            this.selectedEmail = email;

        },

        displayEmail(email){
            this.$emit('email-opened', email);
        },
    },
    computed: {

    },

    components: {
        emailPreview,
    }
}
