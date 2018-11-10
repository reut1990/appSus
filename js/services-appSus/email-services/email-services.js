'use strict'
import {utilService} from '../../utils.js'
import { storageService } from '../email-services/storage.service.js'

const EMAILS_KEY = 'emails';
const numOfEmails = 30;
var emailsDB = [];

function query(filter = 'all', keyword) {


    var emails = storageService.load(EMAILS_KEY);
    if (!emails) {
        emails = _createEmails(numOfEmails);
        storageService.store(EMAILS_KEY, emails)
    }
    // emailsDB = emails;
    var filteredEmails = filterEmails(emails, filter);
    if (keyword) {
        var currKeyword = keyword.toLowerCase();
        filteredEmails = filterByKeyword(filteredEmails, currKeyword)
    }

    return Promise.resolve(filteredEmails);
}

function saveEmails(emails) {
    storageService.store(EMAILS_KEY, emails);
}

function filterByKeyword(emails, keyword) {
    console.log('the filter by function is working', keyword);

    var filteredEmails = emails.filter(email =>{
       var subject = email.subject.toLowerCase();
       var body = email.body.toLowerCase();
        return subject.includes(keyword) || body.includes(keyword);
    })
    return filteredEmails;
} 
function filterEmails(emails, emailFilter) {
    var filteredEmails = emails.filter(function (email) {
        return emailFilter === 'all' ||
            (emailFilter === 'read' && email.isRead) ||
            (emailFilter === 'unread' && !email.isRead)
    });
    return filteredEmails;
}

function updateEmailStatus(email, isEmailRead){
    var emailID = email.id;
   
    var emails = storageService.load(EMAILS_KEY);
    var email = emails.find(function(currEmail) {
        return currEmail.id === emailID;
    })
    email.isRead = isEmailRead;
    console.log(email, 'services')
    storageService.store(EMAILS_KEY, emails);
    // console.log('service', emails, email)
    // return Promise.resolve(emails);
}
function _createEmails(numOfEmails) {
    var emails = [];
    for (var i = 0; i < numOfEmails; i++) {
        var email = _createEmail();
        emails.push(email);
    }
    return emails;
}

function sortByDate(){
    var emails = storageService.load(EMAILS_KEY);
    emails.sort(function(emailA, emailB){
        return emailA.sentAt-emailB.sentAt;
    });
   storageService.store(EMAILS_KEY, emails)
}

function _createEmail() {
    var emailLength = utilService.getRandomInt(1000, 3000)
    var email = {
        id: utilService.makeId(),
        subject: utilService.makeLorem(20),
        body: utilService.makeLorem(emailLength),
        isRead: false,
        sentAt: utilService.getRandomInt(1472979679000, 1541322079000)
    }
    return email;
}

function getEmailCount(){
    var emails = storageService.load(EMAILS_KEY);
    var readEmails = emails.filter(email=> email.isRead).length
    return {readEmails:readEmails, totalNumOfEmails: emails.length };
}

function deleteEmail(email){
    var emailID = email.id;
    var emails = storageService.load(EMAILS_KEY);
    var idx = emails.findIndex(function(email){
        return email.id === emailID;
    })
    emails.splice(idx, 1);
    storageService.store(EMAILS_KEY, emails);
}
export const emailServices = {
    query,
    saveEmails,
    updateEmailStatus,
    getEmailCount,
    deleteEmail,
    sortByDate
}