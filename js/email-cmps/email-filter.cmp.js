


export default {
    template: `
        <section class="">
        <input type="radio" id="one" value="all" v-model="picked">
        <label for="one">All</label>

        <input type="radio" id="two" value="read" v-model="picked">
            <label for="two">Read</label>
            <input type="radio" id="two" value="unread" v-model="picked">
            <label for="two">Unread</label>

        <span>Picked: {{ picked }}</span>

        <input v-on:keyup="" v-model.trim="userKeyword" placeholder="Search your emails" type="text">    

        </section>
    `,

    //v-bind:class="isEmailSelected"   took out this line not sure if needed
    data() {
        return {
         picked:null,
         userKeyword:null
        }
    },
    created() {
       
    
    },
    methods: {

    },
    computed: {

    },
    components: {
      
    }
}