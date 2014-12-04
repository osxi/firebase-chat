import Ember from 'ember';

export default Ember.Controller.extend({
  user: 'Anonymous' + Math.floor(Math.random() * (100 + 1)),
  body: '',
  connectionStatus: function() {
    if (navigator.onLine === true) {
      return true;
    } else {
      return false;
    }
  }.property('navigator'),
  actions: {
    submitMessage: function(messageBody) {
      this.store.createRecord('chatMessage', {
        body: messageBody,
        user: this.get('user'),
        createdAt: new Date()
      }).save();
      this.set('body', '');
    },
    setUser: function(newUser) {
      this.set('user', newUser);
    }
  }
});
