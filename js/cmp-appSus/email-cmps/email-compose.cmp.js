
export default {
    template: `
        <section class="compose">
            <button class="close-compose-btn" v-on:click="closeComposeEmail">Close Draft</button>
            <input type="text" name="subject"  placeholder="Subject">
            <input type="email" id="email"    placeholder="Email">
        <textarea></textarea>
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