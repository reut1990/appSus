export default {
    props: ['email'],
    template: `
        <router-link tag="section" :to="'/email/' + email.id" class="email">
               <span class="email-subject">Subject: {{email.subject}}</span>
               <span class="email-body">Body:{{emailText}}</span> <span class="email-timestamp">{{email.sentAt}}</span>
                <button v-on:click="toggleReadStatus" >{{email.isRead}}</button>
            </router-link>
    `,
    data() {
        return {
            emailSelected: null,

        }
    },
    created() {

    },
    methods: {
        toggleReadStatus() {
            this.email.isRead = !this.email.isRead;            
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
