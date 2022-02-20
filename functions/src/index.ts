import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const fcm = admin.messaging();

export const sendNewRequestMessage = functions
    .region('europe-west1')
    .database
    .ref('/requests/{requestID}')
    .onCreate((snapshot) => {
      const request = snapshot.val();

      const payload: admin.messaging.MessagingPayload = {
        notification: {
          title: (request.name || request.email) +
            ' hat dir eine Anfrage geschickt',
          body: request.content,
        },
      };

      return fcm.sendToTopic('newRequest', payload);
    });
