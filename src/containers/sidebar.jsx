import React from 'react';

import ProfileBar from '../components/profileBar';
import Searchbar from '../components/searchbar';
import UserList from './userList';


class Sidebar extends React.Component {

	render() {
		return(
			<div className='sidebar-wrapper'>
				<ProfileBar />
				<Searchbar />
				<UserList />
			</div>
		)
	}
}

export default Sidebar;