import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  message: '',
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

  actions: {

    sendMessage() {
      alert(`Sending your message in progress...  ${this.get('emailAddress', 'message')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
