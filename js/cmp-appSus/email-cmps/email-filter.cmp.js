


export default {
    template: `
        <section class="email-filter">

        <input type="radio" value="all" v-model="filter">
        <label for="all">All</label>
        <input type="radio"  value="read" v-model="filter">
        <label for="read">Read</label>

        <input type="radio" value="unread" v-model="filter">
        <label for="unread">Unread</label>
        <input type="checkbox" value="date" v-model="sortByDate" >
        <label for="date">Filter By Date</label>
        
        <input  v-model.trim="userKeyword" placeholder="Search your emails" type="text">    
        
        </section>
    `,

    data() {
        return {
         filter:'all',
         userKeyword:null,
         sortByDate:null,
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
        },  
        sortByDate(isChecked){
            if(isChecked){
                this.$emit('sortByDate');
            } 
        }    
    }
}