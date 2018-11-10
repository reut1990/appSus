import emailList from './email-list.cmp.js'

export default {
    props: ['email'],
    template: `
            <section class="email" v-bind:class="{isRead: email.isRead}">
            

               <span class="email-subject ">Subject: {{email.subject}}</span>
               <span class="email-body">Body:{{emailText}}</span>
               <span class="email-timestamp">{{displayDate}}</span>
               <div v-bind:class="{isReadIcon: email.isRead, isNotReadIcon: !email.isRead}" class="email-icon"  v-on:click="toggleReadStatus" ></div>
               <img src='../../email-icons/delete.png' class="delete-email-btn  email-icon" v-on:click="deleteEmail">


            </section>
    `,
// 
//src='../../email-icons/read.png'
    data() {
        return {
            emailSelected: null,
             

        }
    },
    created() {

    },
    methods: {
        toggleReadStatus() {
            this.$emit('isRead', this.email );            
        },
        deleteEmail(){
            this.$emit('deleteEmail', this.email );            
        }
       
       
    },
    computed: {
        emailText() {
            return this.email.body.substring(0, 20) + '.......';
            
        },
        displayDate(){
            var d = new Date(this.email.sentAt);
           return d.toDateString();
        },
        // getDate(){
        //     return 'yay';
        // }

    },
    watch:{

    },
    components: {
    }
}
