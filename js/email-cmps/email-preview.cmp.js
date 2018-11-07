export default {
    props: ['email'],
    template: `
        <section class="email">
               <span class="email-subject">Subject: {{email.subject}}</span>
               <span class="email-body">Body:{{emailText}}</span> <span class="email-timestamp">{{email.sentAt}}</span>
                <button v-on:click="emailIsReadStatus" >{{email.isRead}}</button>
            </section>
    `,
    data() {
        return {
            emailSelected: null,

        }
    },
    created() {

    },
    methods: {
        emailIsReadStatus() {
            console.log('the button was presseed', this.email.isRead);
            var emailStatus = false;
            if (this.email.isRead === false) {
                this.email.isRead = true;
                emailStatus=true;
            } else {
                this.email.isRead = false;
            }
            
            this.$emit('isEmailRead', emailStatus )
        }
       
    },
    computed: {
        emailText() {
            return this.email.body.substring(0, 20) + '.......';
            
        },

    },
    components: {

    }
}
