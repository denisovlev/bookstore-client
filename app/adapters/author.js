import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    shouldReloadRecord(store, snapshot) {
        "use strict";
        return false;
    },

    shouldBackgroundReloadRecord(store, snapshot) {
        "use strict";
        console.log('Calling shouldBackgroundReloadRecord');
        const loadedAt = snapshot.record.get('loadedAt');
        if (Date.now() - loadedAt > 3600000) {
            return true;
        } else {
            return false;
        }
    }
});
