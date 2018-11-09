'use strict'
import utilServices from './util-services.js'
import { storageService } from './storage.service.js'

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
function _createEmails(numOfEmails) {
    var emails = [];
    for (var i = 0; i < numOfEmails; i++) {
        var email = _createEmail();
        emails.push(email);
    }
    return emails;
}

function _createEmail() {
    var email = {
        id: utilServices.makeId(),
        subject: utilServices.makeLorem(20),
        body: utilServices.makeLorem(3000),
        isRead: false,
        sentAt: new Date(utilServices.getRandomInt(1472979679000, 1541322079000))
    }
    return email;
}

export const emailServices = {
    query,
    saveEmails,
    filterEmails
}