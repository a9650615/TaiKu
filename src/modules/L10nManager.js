/*
 * 目前未使用 只有直接讀取
 */
var Path = require('path');
var Fs = require('fs');
var Electron = require('electron');
var Remote = Electron.remote;
var App = Remote.app;

import i18next from 'i18next';
let TaikuCore = require('./TaiKuCore');
let EventEmitter = require('events').EventEmitter;

let L10nManager = function(){
	EventEmitter.call(this);

	this._currentLanguage = 'zh-TW';

	//this.emit('language-initialized');
}

L10nManager.prototype.changeLanguage = function(newLanguage) {
  if (this._currentLanguage === newLanguage) {
    return;
  }
  else {
    var oldLanguage = this._currentLanguage;
    this._currentLanguage = newLanguage;
    this.emit('language-changed', newLanguage, oldLanguage);
  }
};

L10nManager.prototype.init = function(){
  var DataPath = Path.join(App.getAppPath(), 'src/locales', this._currentLanguage + '.json');
  var fileInfo = Fs.readFileSync(DataPath, 'utf8');
  this.params = JSON.parse(fileInfo);
  return this;
}

L10nManager.prototype._ = function( ID ){
  return this.params[ID];
}

module.exports = new L10nManager();