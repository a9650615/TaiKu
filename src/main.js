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
let L10nManager = require('./modules/L10nManager');
let _ = L10nManager.get.bind(L10nManager);
/*
 * Not used 
 */
//let I18nManager = require('./modules/I18nManager');

/*
 * Not used End
 */

//View compements
import ToolbarContainer from './views/components/toolbar/container';
import MenusContainer from './views/components/menus/container';
import AboutContainer from './views/components/about/container';

//View Modules


//ViewDoms
let loadingPageDom = document.querySelector('.loading-page');

//Main Class 

class TaiKuApp extends React.Component {
  //wile mount
  componentWillMount(){

	this.state = {
		MenuOpen: false,
		AboutOpen: false
	};
	//load title 
	this._initializeAppTitle();
  }

  //Mount Done
  componentDidMount() {
  	this._initializeDefaultLanguage();
  }

  _initializeAppTitle() {
    TaiKuCore.title = _('app_title_normal');
  }

  _initializeDefaultLanguage(){
	let defaultLanguage = Preference.getPreference('default.language');
	if (defaultLanguage) {
	    L10nManager.changeLanguage(defaultLanguage);
	}
  }

  handleMenuToggle(){
	this.setState({MenuOpen: !this.state.MenuOpen});
  }
  
  handleMenuClose() {this.setState({MenuOpen: false});}
  
  //About 關閉
  handleAboutClose(){
	this.setState({AboutOpen: false});
  }

  _onLeftNavChange(type){
	switch(type){
		case 'menu_about':
			this.setState({AboutOpen: true});
		  break;
	}
	
  }

  render() {
	/* jshint ignore:start */
	return(
		<div className="root">
		  <ToolbarContainer 
		      title={TaiKuCore.title} 
		      handleMenuToggle={this.handleMenuToggle.bind(this)}
		      MenuOpen={this.state.MenuOpen}
		      />
		  <MenusContainer 
			  onChange={this._onLeftNavChange.bind(this)}
			  MenuOpen={this.state.MenuOpen}
			  MenuClose={this.handleMenuClose.bind(this)}
		    />
		  <AboutContainer 
			open={this.state.AboutOpen}
			AboutClose={this.handleAboutClose.bind(this)}/>
		</div>
	);
    /* jshint ignore:end */
  }
}



//var TaiKuApp = React.createClass({
//	render: function() {
  	/* jshint ignore:start */
//	return (){
//		<RaisedButton label="Default" />
//	};
  	/* jshint ignore:end */
//	}
//});

ReactDOM.render(<TaiKuApp />, loadingPageDom);


//console.log(TaiKuCore.getPackageInfo());