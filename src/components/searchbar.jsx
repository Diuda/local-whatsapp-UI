import React from 'react';



class Searchbar extends React.Component {


	constructor(){
		super();
		this.state = {
			userFilter: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			userFilter: e.target.value
		})
		this.props.onChange(e.target.value);
	}


	render () {
		return (
			<div className='search-wrapper'>
				<div className='search-icon'>

				</div>
				<div className='input-search'>
					<input type="text" name="search" onChange={this.handleChange}/>
				</div>
			</div>
		)
	}
}

export default Searchbar;