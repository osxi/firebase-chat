import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FirebaseChatENV.locationType
});

Router.map(function() {
  this.route('chat');
  this.route('indexRoute');
  this.route('Index');
});

export default Router;
