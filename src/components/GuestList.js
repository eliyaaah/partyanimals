import React, { Component } from 'react';
import axios from 'axios';

import { PARTYANIMALS_API_KEY, PARTYANIMALS_API_URL } from '../constants.js';

//import constants from '../constants.js';

class GuestList extends Component	{

	constructor(props)	{
		super(props);

		this.state = {
			guests: []
		}
	}

	componentDidUpdate(prevProps, prevState)	{

		const { selectedVenueId } = this.props;

		if (selectedVenueId && selectedVenueId !== prevProps.selectedVenueId)	{
			this.getGuestData();
		}

	}

	async getGuestData()	{
		try	{
			const guestData = await axios.get(`${PARTYANIMALS_API_URL}/animals/${this.props.selectedVenueId}`,	{
				headers:	{
					'Authorization': `Bearer ${PARTYANIMALS_API_KEY}` 
				}
			});

			const { data: guests } = guestData;
			console.log(guestData);

			this.setState({
				guests
			});

		}	catch(err)	{
			console.error(err.message);
		}
	}

	renderGuests()	{
		const guestHtml = this.state.guests.map(item =>	{
			const { name, image, dance, id } = item;
			return(
				<div className="animalDetails">
					<img src={ image } alt=''/>
					<p>Name: { name }</p>
					<p>Fave Dance: { dance }</p>
				</div>
			);
		});

		return (
			<div className="animalList">{ guestHtml }</div>
		);
	}

	render()	{
		return (
			<section className="venueDetailComponent">
				<h2>Guest List</h2>
				{
					this.state.guests.length
					? this.renderGuests()
					:	(
							<p>Please select a venue</p>
					) 
				}
			</section>
		);
	}
}

export default GuestList;