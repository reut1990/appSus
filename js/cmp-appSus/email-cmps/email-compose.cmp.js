
export default {
    template: `
        <section class="">
            <button class="close-compose-btn" v-on:click="closeComposeEmail">Close Draft</button>
            <input type="text" name="subject" size="30" placeholder="Subject">
            <input type="email" id="email"  size="30"  placeholder="Email" required>
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