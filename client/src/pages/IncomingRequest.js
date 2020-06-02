import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import IncomingRequests from '../components/IncomingRequest';
import setAuthToken from '../utils/SetAuthToken';

class IncomingRequest extends Component {
	state = {
		savedGigs: [],
		userid: '',
		savedRequests: [],
		gigid: '',
		dateForSavedRequests: [],
		redirect: false
	};

	componentDidMount() {
		const token = localStorage.getItem('example-app');
		if (token) {
			setAuthToken(token);
		}

		axios.get('/api/user').then((response) => {
			let userId = response.data.id;
			this.setState({
				user: response.data,
				userid: response.data.id
			});

			let postedGigId = [];
			axios.get('/api/gig/' + userId).then((res) => {
				for (var i = 0; i < res.data.length; i++) {
					postedGigId.push(res.data[i].id);
				}
				console.log(postedGigId);
				this.setState({
					savedGigs: res.data
				});

				//
				console.log(res.data);

				axios
					.get('/api/request')
					.then((res) => {
						let gigId = [];
						for (var i = 0; i < res.data.length; i++) {
							gigId.push(res.data[i].gigid);
						}

						let requestGigId = postedGigId.filter((element) => gigId.includes(element));

						console.log(requestGigId);
						for (var i = 0; i < requestGigId.length; i++) {
							axios.get('/api/request/gig/' + requestGigId[i]).then((res) => {
								this.setState({
									savedRequests: res.data
								});
							});
							axios.get('/api/gig/id/' + requestGigId[i]).then((res) => {
								console.log(res.data);
								this.setState({
									dateForSavedRequests: res.data
								});
							});
						}
					})
					.catch((err) => console.log(err.response));
			});
		});
	}

	//logs out user
	handleLogout = () => {
		localStorage.removeItem('example-app');
		this.setState({
			redirect: true
		});
	};

	handleDeleteButton = (id) => {
		console.log(id);
		axios.delete('/api/request/' + id).then((res) => this.componentDidMount()).catch((err) => console.log(err));
	};

	render() {
		const { redirect, errors } = this.state;
		if (redirect) {
			return <Redirect to='/' />;
		}
		return (
			<div className='container'>
				<div className='card'>
					<button className='btn btn-danger' style={{ width: '5rem' }} onClick={this.handleLogout}>
						Logout
					</button>
					<br />
					<div>
						<IncomingRequests
							savedRequests={this.state.savedRequests}
							dateForSavedRequests={this.state.dateForSavedRequests}
							handleDeleteButton={this.handleDeleteButton}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default IncomingRequest;
