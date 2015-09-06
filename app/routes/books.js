import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    "use strict";
    return this.store.query('book', params);
  },

  actions: {
    showAll() {
      "use strict";
      const total = this.controllerFor('books').get('total');
      this.transitionTo({ queryParams: { limit: total }});
    },

    openCheckoutModal(book) {
      "use strict";
      this.controllerFor('application').set('showingModal', true);
      return this.render('modal', {
        outlet: 'modal',
        into: 'application',
        model: this.store.findRecord('book', book.id, { reload: true }),
        controller: 'application'
      });
    },

    closeCheckoutModal() {
      "use strict";
      this.controllerFor('application').set('showingModal', false);
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
