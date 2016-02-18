var Electron = require('electron');
var Remote = Electron.remote;
var App = Remote.app;

var EventEmitter = require('events').EventEmitter;
/*
 * Node Modules
 */
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
 *	--Block End--
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
 *	--Block End--
 */

TaikuCore.prototype.getEnvInfo = function(){
	var envFilePath = Path.join(App.getAppPath(), 'env.json');
	var envInfo = Fs.readFileSync(envFilePath, 'utf8');
	return JSON.parse(envInfo);
};


TaikuCore.prototype.isDev = function(){
	if(!this._envInfo){
		this._envInfo = this.getEnvInfo();
	}
	return this._envInfo.env === 'development';
};

TaikuCore.prototype.isProduction = function(){
	if(!this._envInfo){
		this._envInfo = this.getEnvInfo();
	}
	return this._envInfo.env === 'production';
};

TaikuCore.prototype.getPackageInfo = function() {
  var packageFilePath = Path.join(App.getAppPath(), 'package.json');
  var packageInfo = Fs.readFileSync(packageFilePath, 'utf8');
  return JSON.parse(packageInfo);
};

TaikuCore.prototype.getInfoData = function( filename ){
	var DataPath = Path.join(App.getAppPath(), 'data', filename);
	var fileInfo = Fs.readFileSync(DataPath, 'utf8');
	return JSON.parse(fileInfo);
}



module.exports = new TaikuCore();