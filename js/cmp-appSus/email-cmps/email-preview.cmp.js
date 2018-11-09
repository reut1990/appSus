import emailList from './email-list.cmp.js'

export default {
    props: ['email'],
    template: `
            <section class="email" v-bind:class="{isRead: email.isRead}"
 >

               <span class="email-subject ">Subject: {{email.subject}}</span>
               <span class="email-body">Body:{{emailText}}</span> <span class="email-timestamp">{{email.sentAt}}</span>
               <button v-on:click="toggleReadStatus" >{{email.isRead}}</button>

            </section>
    `,
            // <router-link tag="section" :to="'/email/' + email.id" class="email">

    //   </router-link>

    data() {
        return {
            emailSelected: null,

        }
    },
    created() {

    },
    methods: {
        toggleReadStatus() {
            console.log('toggleReadStatus', this.email)
            this.$emit('isRead', this.email );
            
        }
       
    },
    computed: {
        emailText() {
            return this.email.body.substring(0, 20) + '.......';
            
        },

    },
    watch:{

    },
    components: {
    }
}
