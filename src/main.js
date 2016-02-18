/* main.js */

let 
	Electron = require('electron');


//ES6
/*
 * Old Used 
 * var React = require('react');
 * var ReactDOM = require('react-dom');
 */
import React from 'react';
import ReactDOM from 'react-dom';

//import RaisedButton from 'material-ui/lib/raised-button';
import {RaisedButton} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


//general modules
let TaiKuCore = require('./modules/TaiKuCore');
let Preference = require('./modules/Preference');

/*
 * Not used 
 */
//let I18nManager = require('./modules/I18nManager');

/*
 * Not used End
 */

//View compements
import ToolbarContainer from './views/components/toolbar/container';

//View Modules


//ViewDoms
let loadingPageDom = document.querySelector('.loading-page');

//Main Class 
var title = "87";

class TaiKuApp extends React.Component {
  
  //Mount Done
  componentDidMount() {
  	this._initializeDefaultLanguage();
  }

  _initializeDefaultLanguage(){
  	let defaultLanguage = Preference.getPreference('default.language');
  	if (defaultLanguage) {
  	    L10nManager.changeLanguage(defaultLanguage);
  	}
  }

  render() {
    return <ToolbarContainer title={title}/>;
  }
}



//var TaiKuApp = React.createClass({
//	render: function() {
    	/* jshint ignore:start */
//    	return (){
//    		<RaisedButton label="Default" />
//    	};
    	/* jshint ignore:end */
//	}
//});

ReactDOM.render(<TaiKuApp />, loadingPageDom);


//console.log(TaiKuCore.getPackageInfo());