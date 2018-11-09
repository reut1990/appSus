// This is our controller it is responsible for rendering the view and action upon events



import navBar from './cmp-appSus/nav-bar.cmp.js'
import myRoutes from './routes.js';

Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes});


new Vue({
  el: '#appAsus',
  router:myRouter,
  components: {
      navBar
  }
})



