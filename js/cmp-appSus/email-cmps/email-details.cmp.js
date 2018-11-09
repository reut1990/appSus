export default {
    props: ['email'],
    template: `
        <section v-if="email" class="email openedEmail">
            <button class="close-btn" v-on:click="closeEmail">Close email</button>
             <div>EMAIL DETAILS</div>
             <div>{{email.subject}}</div>
             <div>{{email.body}}</div>
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
        closeEmail(){
            this.$emit('email-closed', null)
        }
       
    },
    computed: {


    },
    components: {

    }
}
