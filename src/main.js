/* main.js */

var React = require('react');
var ReactDOM = require('react-dom');
var Electron = require('electron');

//general modules
var TaiKuCore = require('./modules/TaiKuCore');

//Main Class 

var TaiKuApp = React.createClass({
	render: function() {
    	/* jshint ignore:start */
    	return <div></div>;
    	/* jshint ignore:end */
	}
});

window.onload = function(){
		
}
ReactDOM.render(<TaiKuApp/>, document.querySelector('.loading-page'));


//console.log(TaiKuCore.isDev);