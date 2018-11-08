

import emailApp from './email-cmps/email-app.cmp.js'
import emailList from './email-cmps/email-list.cmp.js'
import emailDetails from './email-cmps/email-details.cmp.js';

var myRoutes = [
    // {path: '/', component: homePage },
    // {path: '/home', component: homePage },
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


]

export default myRoutes;

