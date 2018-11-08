// This is our controller it is responsible for rendering the view and action upon events
// import emailApp from './email-cmps/email-app.cmp.js'
import routes from './routes.js'

const router = new VueRouter({routes})


new Vue({
    el: '#app',
    router,
    // components: {
    //     emailApp
    // }
  })