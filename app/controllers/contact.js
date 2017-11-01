import Ember from 'ember';

export default Ember.Controller.extend({

  // emailAddress: '',
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  // message: '',
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

  // actions: {
  //
  //
  //   saveMessage() {
  //     const email = this.get("emailAddress");
  //     const message = this.get("message");
  //     const newMessage = this.store.createRecord('contact', {email, message})
  //     newMessage.save().then(response => {
  //       this.set('responseMessage', `Thank you! We have just saved your message: ${this.get('message')}`);
  //       this.set('emailAddress', 'message');
  //     });
  //   }
  // }
});
