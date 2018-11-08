


export default {
    template: `
        <section class="">
        <label for="all">All</label>

        <input type="radio" value="all" v-model="filter">
        <label for="read">Read</label>

        <input type="radio"  value="read" v-model="filter">
        <label for="unread">Unread</label>

        <input type="radio" value="unread" v-model="filter">

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
        // setFilter(){
        //     console.log('the filter was set!', this.filter);
        // }
    },
    components: {
      
    },
    watch:{
        filter(newFilter){
            console.log('the filter was set!', newFilter);

        }
    }
}