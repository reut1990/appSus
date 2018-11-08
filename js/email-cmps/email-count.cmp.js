export default {
    props:['emails'],
    template: `
        <section class="email">
        <ul class="email-count">
                    <li>Read Emails: <span>{{emailReadCount}}</span></li>
                    <li>Unread Emails: <span>{{emails.length - emailReadCount}}</span></li>
                </ul>
        </section>      
    `,
    data() {
        return {

        }
    },
    created() {
        // console.log('testing', this.email.id, this.email.subject)
    },
    methods: {

       
    },
    computed: {
        emailReadCount(){
            return this.emails.filter(email=> email.isRead).length;
        }

    },
    components: {

    }
}
