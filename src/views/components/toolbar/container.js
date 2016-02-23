//ES6
import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import Colors from 'material-ui/lib/styles/colors';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
let L10nSpan = require('../../modules/l10nspan.js'),
	L10nManager = require('../../../modules/L10nManager');

// handleFilterChange

class ToolbarContainer extends React.Component{
  
  constructor(props){
	super(props)
  }

  handleLeftIconButtonClick(e) {
	this.props.handleMenuToggle();//show
  }

  render() {
	return(
		   <AppBar
		    title={ this.props.title }
		    style={{background: '#C62828'}}
		    iconElementLeft = {
			  <IconButton onClick={this.handleLeftIconButtonClick.bind(this)}>
			    <MenuIcon color={Colors.red100} />
			  </IconButton>
		    }
		    iconElementRight={
			<IconMenu
			      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
			      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
			      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
			    >
			     <MenuItem primaryText="Refresh" />
			     <MenuItem primaryText="Help &amp; feedback" />
			     <MenuItem primaryText="Settings" />
			     <MenuItem primaryText="Sign out" />
			   </IconMenu>
		    }
		  />
	  );
  }
}

export default ToolbarContainer;
