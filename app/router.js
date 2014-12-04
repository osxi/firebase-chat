import Ember from 'ember';
import ENV from 'firebase-chat/config/environment';

var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('chat');
  this.route('indexRoute');
  this.route('Index');
});

export default Router;
