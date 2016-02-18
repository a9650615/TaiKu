//ES6
import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

let L10nSpan = require('../../modules/l10nspan.js'),
	L10nManager = require('../../../modules/L10nManager');


const ToolbarContainer = () => (
   <AppBar
    title="TaiKu"
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

export default ToolbarContainer;
