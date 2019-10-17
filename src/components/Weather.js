import React from 'react';

const Weather = (props) => {
	const { temperature, city, country, humidity, description, error } = props;
	return (
		<div>
			{city &&
			country && (
				<p>
					Location : {country},{city}
				</p>
			)}
			{temperature && <p>Temperature : {temperature}</p>}

			{humidity && <p>Humidity : {humidity}</p>}

			{description && <p> Condition : {description}</p>}
			{error && <p> error : {error}</p>}
		</div>
	);
};

export default Weather;
