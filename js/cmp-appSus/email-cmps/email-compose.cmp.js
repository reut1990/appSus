
export default {
    template: `
        <section class="">
            <button class="close-compose-btn" v-on:click="closeComposeEmail">Close Draft</button>
                    <h1>COMPOSE EMAIL</h1>
        <textarea rows="20" cols="50"></textarea>
        </section>
    `,

    data() {
        return {
         
        }
    },
    created() {
       
    
    },
    methods: {
        closeComposeEmail(){
            this.$emit('closeComposeEmail', null)
        }
    },
    computed: {

    },
    components: {
      
    }
}