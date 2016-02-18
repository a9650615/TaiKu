import React from 'react';
var L10nManager = require('../../modules/L10nManager').init();


class l10nspan extends React.Component{

	componentDidMount(){

	}

	render(){
		return <span></span>;
	}

}

l10nspan.propTypes = { 
	l10nID : React.PropTypes.string.isRequired,
	l10nParams: React.PropTypes.object
};

l10nspan.defaultProps = {
	l10nId: '',
	l10nParams: {}
};


module.exports = l10nspan;