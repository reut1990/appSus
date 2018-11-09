// This is our controller it is responsible for rendering the view and action upon events
// import emailApp from './email-cmps/email-app.cmp.js'
import routes from './routes.js'

// const router = new VueRouter({routes})


import navBar from './nav-bar.cmp.js'
import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes});


new Vue({
  el: '#appAsus',
  router:myRouter,
  components: {
      navBar
  }
})



// import emailApp from './email-cmps/email-app.cmp.js'
// import'../js/cmps-missKeep/miss-keep.cmp.js'


// new Vue({
//   el: '#appMissKeep',
//   router: myRouter,
//   data: {

//   },
//   methods: {
           
//   },
//   components: {

//   }
// })
// ' use strict'
// new Vue({
//     el: '#app',
//     // router,
//     components: {
//         emailApp
//     }
//   })
