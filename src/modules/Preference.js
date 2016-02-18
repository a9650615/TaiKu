import Events from 'events';

let EventEmitter = Events.EventEmitter;

function Preference() {
  EventEmitter.call(this);
  this._preferenceStorage = window.localStorage;
}

Preference.prototype = Object.create(EventEmitter.prototype);
Preference.constructor = Preference;

Preference.prototype.setPreference = function(key, newPreference) {
  var oldPreference = this.getPreference(key);
  if (oldPreference !== newPreference) {
    this._preferenceStorage[key] = newPreference;
    this.emit('preference-updated', key, newPreference, oldPreference);
  }
};

Preference.prototype.getPreference = function(key) {
  var preference = this._preferenceStorage[key];
  if (preference === 'true') {
    return true;
  }
  else if (preference === 'false') {
    return false;
  }
  else if (typeof preference === 'undefined') {
    return false;
  }
  else {
    return preference;
  }
};

module.exports = new Preference();
