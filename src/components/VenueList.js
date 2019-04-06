import React, { Component } from 'react';
import axios from 'axios';

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYThjYmU1OTM0NmY0NDY5NWUyMzhjZSIsImlhdCI6MTU1NDU2NjQ4OSwiZXhwIjoxNTU3MTU4NDg5fQ.OsuEKjpkjh2sHXHA5cf4EmgPfLXsX8ArterQMuKvoXA';

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
			const venueData = await axios('https://partyanimals.hackeryou.com/api/v1/venue/', {
				headers: {
					'Authorization': `Bearer ${apiKey}`
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
				<div key = { id } className="venueCard">
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