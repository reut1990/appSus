import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
        <section class="inbox-container" v-if="emails">
                       
                   <email-preview  @isRead="isRead"
                   @deleteEmail="deleteEmail"
                   v-for="email in emails"
                    :email="email"
                   
                    @dblclick.native="displayEmail(email)"
                    @click.native="selectedMail(email)"
                    :class="{selected: selectedEmail === email}"     
                   
                    >
                </email-preview>
        </section>
    `,


    data() {
        return {
            selectedEmail: this.emails[0],
        }
    },
    created() {
    },
   
    methods: {
        selectedMail(email) {
            this.selectedEmail = email;
        },
        isRead(email){
            this.$emit('isEmailRead', email);
        },
        deleteEmail(email){
            this.$emit('deleteEmail', email);
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
