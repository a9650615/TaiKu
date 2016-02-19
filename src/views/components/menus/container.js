//ES6
import React from 'react';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

class MenusContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

 /* handleToggle() {
	this.setState({open: !this.state.open});
  }
  */

  handleClose() {
	if(typeof this.props.MenuClose == 'function')
		this.props.MenuClose();
	else
	this.setState({open: false});
  }
  
  render() {
    return (
		    <div>
		      <LeftNav 
		        docked={false}
		        width={300}
		        open={this.props.MenuOpen}
		        onRequestChange={open => this.handleClose()}
		        >
		          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
		          <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
		      </LeftNav>
		    </div>
		);
  }

}


export default MenusContainer;