import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  responseMessage: 'email is sent',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.empty('emailAddress'),

  actions: {
    sendInvitation() {

    }
  }
});
