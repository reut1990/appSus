


export default {
    template: `
        <section class="">
        <label for="all">All</label>

        <input type="radio" value="all" v-model="picked">
        <label for="read">Read</label>

        <input type="radio"  value="read" v-model="picked">
        <label for="unread">Unread</label>

        <input type="radio" value="unread" v-model="picked">

        <span>Picked: {{ picked }}</span>

        <input v-on:keyup="" v-model.trim="userKeyword" placeholder="Search your emails" type="text">    

        </section>
    `,

    data() {
        return {
         picked:'all',
         userKeyword:null,
         filter:'all'
        }
    },
    created() {
       
    
    },
    methods: {
       
            
        
    },
    computed: {
        // setFilter(){
        //     console.log('the filter was set!', this.picked);
        // }
    },
    components: {
      
    },
    watch:{
        picked(newPick){
            console.log('the filter was set!', newPick);
        }
    }
}