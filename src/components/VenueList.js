import React, { Component } from 'react';
import axios from 'axios';

import { PARTYANIMALS_API_KEY, PARTYANIMALS_API_URL } from '../constants.js';

class VenueList extends Component	{

	constructor()	{
		super(); //configuration

		this.state = {
			venues: []
		};
	}

	componentDidMount()	{  //runs after compnent is mounted
		// Make our data request here
		this.getVenueData();
	}

	async getVenueData()	{
		try	{
			const venueData = await axios(PARTYANIMALS_API_URL, {
				headers: {
					'Authorization': `Bearer ${PARTYANIMALS_API_KEY}`
				}
			});
			const { data: venues } = venueData; //rename data to venues
			this.setState({
				venues
			});
		}	catch(err)	{
			console.error(err.message);
		}
	}

	renderLoader()	{
		return <p>...Loading</p>;
	}

	renderVenues()	{
		const { venues } = this.state;
		const venueHtml = venues.map(item => {
			const { 
				_id: id, 
				name, 
				image, 
				description, 
				venuetype 
			} = item;
			
			return (
				<div 
					key = { id } 
					className="venueCard" 
					onClick= { () => { this.props.setSelectedVenue(id) } 
				}>
					<img src = { image } alt = "" />
					<p className = "venueName">{ name }</p>
					<p className = "venueType">{ venuetype }</p>
					<p className = "venueDescription">{ description }</p>
				</div>
			);

		});

		return venueHtml;
	}

	render()	{
		return (
			<section className="venueListComponent">
				<h2>Venue List</h2>
				<div className="venueList">
					{/* our venue items go here*/}
					{
						this.state.venues.length 
						?	this.renderVenues()
						:	this.renderLoader()
					}
				</div>
			</section>
		);
	}
}

export default VenueList;