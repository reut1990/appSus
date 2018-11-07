export default {
    props: ['email'],
  template: `
        <section class="email">
               <span class="email-subject">{{email.subject}}</span>
               <span class="email-body">{{emailText}}</span> <span class="email-timestamp">{{email.timestamp}}</span>
        </section>
    `,
    data() {
        return {
            emailSelected:null,
        }
    },
    created(){
          
    },
    methods: {

    },
    computed:{
        emailText(){
            return this.email.body.substring(0,20) +'.......';
        }
    },
    components: {

    }
}
