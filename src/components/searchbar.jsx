import React from 'react';



class Searchbar extends React.Component {


	render () {
		return (
			<div className='search-wrapper'>
				<div className='search-icon'>

				</div>
				<div className='input-search'>
					<input type="text" name="search"/>
				</div>
			</div>
		)
	}
}

export default Searchbar;