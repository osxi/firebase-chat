import DS from 'ember-data';
import ENV from 'firebase-chat/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + ENV.myFirebase + '.firebaseio.com')
});
