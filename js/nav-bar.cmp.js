export default {
    props: [],
    template: `
    <section class="nav">
    <div class="logo">
                <!-- <img src="/img/logo2.jpg" alt=""> -->
                <h6>Miss APSUS</h6>
            </div>
            <nav>
                    <router-link exact to="/home"><div class="home-nav">Home</div></router-link>
                    <router-link exact to="/about"><div>About</div></router-link> 
                    <router-link exact to="/missKeep"><div>Miss Keep</div></router-link> 
                    <router-link exact to="/mrEmails"><div>Mr Emails</div></router-link> 
            </nav>
    </section>
    `,
    data() {
        return {

        }
    },

    methods: {

    },
    computed: {

    },
    components: {
    }

}