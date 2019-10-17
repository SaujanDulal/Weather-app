import React, { Component } from 'react';

class Form extends Component {
	render() {
		const { getWeather } = this.props;
		return (
			<form onSubmit={getWeather}>
				<input type="text" name="city" placeholder="City..." />
				<input type="text" name="country" placeholder="Country..." />
				<button>Get Weather</button>
			</form>
		);
	}
}

export default Form;
