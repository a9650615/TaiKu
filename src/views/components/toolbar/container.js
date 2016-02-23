//ES6
import React from 'react';
//elements
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import TextField from 'material-ui/lib/text-field';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import ArrowaBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import SearchIcon from 'material-ui/lib/svg-icons/action/search';
import Colors from 'material-ui/lib/styles/colors';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
let L10nSpan = require('../../modules/l10nspan.js'),
	L10nManager = require('../../../modules/L10nManager'),
	_ = L10nManager.get.bind(L10nManager);

// handleFilterChange

class ToolbarContainer extends React.Component{
  
  constructor(props){
	super(props)
	this.state = {
		onSearch: false,
		LeftIconType: 0,
		NavColor: '#C62828',
		IconColor: Colors.red100
	};
  }

  handleLeftIconButtonClick(e) {
	if(this.state.onSearch == false)
		this.props.handleMenuToggle();//show

	this.setState({
		onSearch: false,
		LeftIconType: 0,
		NavColor: '#C62828',
		IconColor: Colors.red100
	});
  }

  handleSearchClick(){
	this.setState({
		onSearch: true,
		LeftIconType: 1,
		NavColor: Colors.red100,
		IconColor: Colors.grey900
	});
  }

  render() {
	var navLeftIcon = [
	  <MenuIcon color={this.state.IconColor} />,
	  <ArrowaBack color={this.state.IconColor} />
	];
	return(
		   <AppBar
		    title={ 
			  this.state.onSearch ? <TextField autoFocus={true} hintText={_('search_default_hint')}/>: this.props.title 
			}
		    style={{background: this.state.NavColor}}
		    iconElementLeft = {
			  <IconButton onClick={this.handleLeftIconButtonClick.bind(this)}>
			    {navLeftIcon[this.state.LeftIconType]}
			  </IconButton>
		    }
		    iconElementRight={
			<div>
				{
					(this.state.onSearch) ? '':
					(
					<IconButton onClick={this.handleSearchClick.bind(this)}>
						<SearchIcon color={this.state.IconColor} />
					</IconButton>
					)
				}
				<IconMenu
				      iconButtonElement={<IconButton><MoreVertIcon color={this.state.IconColor}/></IconButton>}
				      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
				      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
				    >
				     <MenuItem primaryText="Refresh" />
				     <MenuItem primaryText="Help &amp; feedback" />
				     <MenuItem primaryText="Settings" />
				     <MenuItem primaryText="Sign out" />
				   </IconMenu>
			</div>
		    }
		  />
	  );
  }
}

export default ToolbarContainer;
