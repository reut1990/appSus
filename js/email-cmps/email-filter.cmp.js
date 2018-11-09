


export default {
    template: `
        <section class="">

        <input type="radio" value="all" v-model="filter">
        <label for="all">All</label>
        <input type="radio"  value="read" v-model="filter">
        <label for="read">Read</label>

        <input type="radio" value="unread" v-model="filter">
        <label for="unread">Unread</label>

        <span>filter: {{ filter }}</span>

        <input v-on:keyup="" v-model.trim="userKeyword" placeholder="Search your emails" type="text">    

        </section>
    `,

    data() {
        return {
         filter:'all',
         userKeyword:null,
        }
    },
    created() {
       
    
    },
    methods: {
       
            
        
    },
    computed: {

    },
    components: {
      
    },
    watch:{
        filter(newFilter){
            this.$emit('filterEmails', newFilter);
        },
        userKeyword(newUserKeywod){
            this.$emit('filterbyKeyword', newUserKeywod);
        }
    }
}