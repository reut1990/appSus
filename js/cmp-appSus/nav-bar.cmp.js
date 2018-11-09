export default {
    props: [],
    template: `
    <section class="top-nav">
       <div class="inside-container">
            <div class="top-nav-logo logo" title="" alt="Blogin">Miss APSUS</div>
            <!-- <div class="screen" v-on:click="toggleMenu"></div> -->
            <nav class="main-nav-container" id="main-nav">
                    <router-link exact to="/home"><div  class="main-nav-item first">Home</div></router-link>
                    <router-link exact to="/about"><div  class="main-nav-item" >About</div></router-link> 
                    <router-link exact to="/missKeep"><div  class="main-nav-item" >Miss Keep</div></router-link> 
                    <router-link exact to="/mrEmails"><div class="main-nav-item" >Mr Emails</div></router-link> 
            </nav>
           <!-- <button class="menu-icon" v-on:click="toggleMenu">☰</button> -->
        </div>
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