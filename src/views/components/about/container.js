//ES6
import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

let L10nManager = require('../../../modules/L10nManager'),
  _ = L10nManager.get.bind(L10nManager);

class AboutContainer extends React.Component{
  
  constructor(props){
	super(props);
  }

  handleClose(){
	if(typeof this.props.AboutClose == 'function')
	this.props.AboutClose();
  }
  
  render(){
	const actions = [
	      <FlatButton
	        label={_('ok')}
	        secondary={true}
	        keyboardFocused={true}
	        onTouchTap={this.handleClose.bind(this)}
	      />
	    ];
	return(
		<div>
		       <Dialog
		         title={_('about_title')}
		         actions={actions}
		         modal={false}
		         open={this.props.open}
		         onRequestClose={this.handleClose.bind(this)}
		       >
		         {_('about_context')}
		       </Dialog>
		     </div>
	  );
  }

}

export default AboutContainer;