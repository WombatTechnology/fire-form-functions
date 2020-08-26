import * as functions from 'firebase-functions';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const { IncomingWebhook } = require('@slack/webhook');
const webhook = new IncomingWebhook("https://hooks.slack.com/services/your_incoming_url_here");

export const onCreateContact = functions.database.ref('/contacts/{id}')
  .onCreate(async (snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const { name, companyName, email, content } = snapshot.val();
    console.log(`NewContact: ${name}, ${companyName}, ${email}, ${content}`)

    // Send to webhook
    await webhook.send({
      text: `
:incoming_envelope: Contact comming! :incoming_envelope: 
Name: ${name}
CompanyName: ${companyName}
Email: ${email}
InquiryDetail: ${content}
        `
    });
  });
