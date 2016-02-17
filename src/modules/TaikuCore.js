var Electron = require('electron');
var Remote = Electron.remote;
var EventEmitter = require('events').EventEmitter;

var Path = require('path');
var Fs = require('fs');

var TaikuCore = function(){
	EventEmitter.call(this);
	/*
	 * Object
	 * 產品模式
	 * environment Info
	 */
	this._envInfo = null; 
	this._title = '';
};

/*
 *	--定義時有效，但實體化後消失--
 */
Object.defineProperty( TaikuCore.prototype, 'title',{
	enumerable : true,
	configurable: true,
	set: function(title) {
	  this._title = title;
	  this.emit('titleUpdated', title);
	},
	get: function() {
	  return this._title;
	}
});

TaikuCore.prototype =  Object.create(EventEmitter.prototype);//不知功用
//不知功用，js new 物件會自動呼叫function()
TaikuCore.constructor = TaikuCore;

/*
 *	--定義時有效，但實體化後消失--
 */

TaikuCore.prototype.getEnvInfo = function(){
	var envFilePath = Path.join(App.getAppPath(), 'env.json');
	var envInfo = Fs.readFileSync(envFilePath, 'utf8');
	return JSON.parse(envInfo);
};


TaikuCore.prototype.isDev = function(){
	if(!this._envInfo){

	}
	return this._envInfo.env === 'development';
};


module.exports = new TaikuCore();