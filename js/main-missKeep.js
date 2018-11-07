


import myRoutes from './routes.js'
import'../js/cmps-missKeep/miss-keep.cmp.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes})

new Vue({
    el: '#appMissKeep',
    router: myRouter,
    data: {

    },
    methods: {
             
    },
    components: {

    }
})