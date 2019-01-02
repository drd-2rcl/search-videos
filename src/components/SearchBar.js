import React, { Component } from 'react';

class SearchBar extends Component {
	state = {myInput: ''};

	onInputChange = () => {

	};

	render() {
		// const myInput = this.state;
		return (
			<div className="search-bar ui segment" >
				<form className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input 
							type="text" 
							value={this.state.myInput} 
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;