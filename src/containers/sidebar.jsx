import React from 'react';

import { loadUsers } from '../actions/index';

import { connect } from 'react-redux';

import ProfileBar from '../components/profileBar';
import Searchbar from '../components/searchbar';
import UserList from './userList';


class Sidebar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			users: this.props.users,
			filteredUsers: this.props.users
		}

	}


	//receive all the users on mount
	componentDidMount() {
		this.props.fetchUsers();

	}


	//updating props if users not recieved from state
	componentWillReceiveProps(nextProps) {
		const users = nextProps.users;
		this.setState({
			users: users,
			filteredUsers: users
		})
	}


	//basic search handler using fiter and indexOf
	filteredUsers = (usersFilter) => {
		let filteredUsers = this.state.users; 

		filteredUsers = filteredUsers.filter((users) => {
			let username = users.name.toLowerCase();
			return username.indexOf(
				usersFilter.toLowerCase()) !== -1
		})

		this.setState({
			filteredUsers
		})
	};

	render() {
		return(
			<div className='sidebar-wrapper'>
				<ProfileBar />
				<Searchbar onChange = {this.filteredUsers} />
				<UserList users={this.state.filteredUsers} />
			</div>
		)
	}
}

const matchDispatchToProps = dispatch => {
	return {
		fetchUsers: () => dispatch(loadUsers())
	};
};

const mapStateToProps = state => {
	return { users: state.chat.users };
}

export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);