export default {
    props:['emailCount', 'totalNumOfEmails'],
    template: `
        <section class="email">
        <ul class="email-count">
                    <li>Read Emails: <span>{{+emailCount}}</span></li>
                    <li>Unread Emails: <span>{{+totalNumOfEmails - +emailCount}}</span></li>
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
        

    },
    components: {

    }
}
