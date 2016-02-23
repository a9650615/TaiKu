//ES6
import React from 'react';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

let L10nManager = require('../../../modules/L10nManager');
let _ = L10nManager.get.bind(L10nManager);

class MenusContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  open: false
	};
  }

 /* handleToggle() {
	this.setState({open: !this.state.open});
  }
  */

  handleClick(type) {
	if(typeof this.props.MenuClose == 'function')
		this.props.MenuClose(); //Error Check
	else
	this.setState({open: false});
	switch(type){
		case 'menu_about':
		    this.props.onChange(type);
		  break;
	}

  }
  
  render() {
    return (
		    <div>
		      <LeftNav 
		        docked={false}
		        width={300}
		        open={this.props.MenuOpen}
		        onRequestChange={(open) => this.handleClick()}
		        >
		          <MenuItem name="menu_index" onTouchTap={this.handleClick.bind(this,'menu_index')}>{_('menu_index')}</MenuItem>
		          <MenuItem name="menu_about" onTouchTap={this.handleClick.bind(this,'menu_about')}>{_('menu_about')}</MenuItem>
		      </LeftNav>
		    </div>
		);
  }

}


export default MenusContainer;