import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['limit'],
    limit: 5,

    total: function() {
        "use strict";
        return this.get('model.meta').total
    }.property('model.meta'),

    showAll: function() {
        "use strict";
        return this.get('total') > this.get('model.length')
    }.property('total', 'model')
});
