import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    close() {
      "use strict";
      return this.sendAction('close');
    }
  }
});
