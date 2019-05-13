import React from 'react';
import PropTypes from 'prop-types';



class Searchbar extends React.Component {



	handleChange = (e) => {
		this.props.onChange(e.target.value);
	}


	render () {
		return (
			<div className='search-wrapper'>
				<div className='search-icon'>

				</div>
				<div className='input-search'>
					<input type='text' name='search' placeholder='Search or start a new chat' autoComplete='off' onChange={this.handleChange}/>
				</div>
			</div>
		)
	}
}

export default Searchbar;


Searchbar.propTypes = {
	onChange: PropTypes.func.isRequired
}