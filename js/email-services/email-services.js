'use strict'
import utilServices from './util-services.js'
import { storageService } from './storage.service.js'

const EMAILS_KEY = 'emails';
const numOfEmails = 30;
var emailsDB = [];

function query() {
    var emails = storageService.load(EMAILS_KEY);
    if (!emails) {
        emails = _createEmails(numOfEmails);
        storageService.store(EMAILS_KEY, emails)
    }
    emailsDB = emails;
    return new Promise((res) => {
        res(emails)
    })
}

function saveEmails(emails){
    storageService.store(EMAILS_KEY, emails);

}

function _createEmails(numOfEmails) {
    var emails = [];
    for (var i = 0; i < numOfEmails; i++) {
        var email = _createEmail();
        emails.push(email);
    }
    console.log(emails);
    return emails;
}

function _createEmail() {
    var email = {
        id: utilServices.makeId(),
        subject: utilServices.makeLorem(20),
        body: utilServices.makeLorem(1000),
        isRead: false,
        sentAt: new Date(utilServices.getRandomInt(1472979679000, 1541322079000))
    }
    return email;
}

export const emailServices =  {
    query,
    saveEmails
}