

<<<<<<< HEAD
import emailApp from './email-cmps/email-app.cmp.js'
import emailList from './email-cmps/email-list.cmp.js'
import emailDetails from './email-cmps/email-details.cmp.js';
=======
// import homePage from './pages/home-page.cmp.js';
import missKeep from '../js/cmps-missKeep/miss-keep.cmp.js';
import emailApp from '../js/email-cmps/email-app.cmp.js';


>>>>>>> f9501db9c5dbb49d500691f211220b3b23204bee

var myRoutes = [
    // {path: '/', component: homePage },
    // {path: '/home', component: homePage },
<<<<<<< HEAD
    {
        path: '/email', component: emailApp,
        // children: [
        //     { path: '', component: emailList },
        //     { path: ':emailId', component: emailDetails }
        // ]
    },
    {

        path: '/email/:emailId', component: emailApp,
    }
=======
    // {path: '/about', component: aboutPage },
    {path: '/missKeep', component: missKeep },
    {path:'/mrEmails', component:emailApp},


>>>>>>> f9501db9c5dbb49d500691f211220b3b23204bee


]

export default myRoutes;

