export default {
    props: ['email'],
    template: `
        <section v-if="email" class="openedEmail">
            <img src='../../email-icons/close.png'  class="close-btn email-icon" v-on:click="closeEmail">
            <img src='../../email-icons/delete.png' class="delete-email-btn  email-icon" v-on:click="deleteEmail">
            <span class="email-timestamp" >{{displayDate}}</span>
             <div class="emailSubject">{{email.subject}}</div>
             <div class="emailBody">{{email.body}}</div>
            </section>
    `,
    data() {
        return {

        }
    },
    created() {
    },
    methods: {
        closeEmail(){
            this.$emit('email-closed', null)
        },
        deleteEmail(){
            this.$emit('deleteEmail', this.email );            
        }
    },
    computed: {
        displayDate(){
            var d = new Date(this.email.sentAt);
           return d.toDateString();
        },

    },
    components: {

    }
}
