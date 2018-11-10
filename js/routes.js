

// import emailList from './email-cmps/email-list.cmp.js'
// import emailDetails from './email-cmps/email-details.cmp.js';
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import missKeep from '../js/cmp-appSus/cmps-missKeep/miss-keep.cmp.js';
import emailApp from '../js/cmp-appSus/email-cmps/email-app.cmp.js';



var myRoutes = [
    {path: '/', component: homePage},
    {path: '/home', component: homePage },
    {path: '/about', component: aboutPage },
    {path: '/missKeep', component: missKeep },
    {path:'/mrEmails', component:emailApp},
     {path: '/email/:emailId', component: emailApp},
   // children: [
        //     { path: '', component: emailList },
        //     { path: ':emailId', component: emailDetails }
        // ]


];

export default myRoutes;

