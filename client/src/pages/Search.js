import React, { Component } from 'react';
import SearchResult from '../components/SearchResults';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/SetAuthToken';

class SearchGigs extends Component {
	//create state
	state = {
		gigs: [],
		redirect: false,
		user: {},
		userid: ''
	};

	componentDidMount() {
		const token = localStorage.getItem('example-app');
		if (token) {
			setAuthToken(token);
		}

		axios.get('/api/user').then((response) => {
			this.setState({
				user: response.data,
				userid: response.data.id
			});
			console.log(response.data.id);

			axios
				.get('/api/gig')
				.then((res) => {
					this.setState({
						gigs: res.data
					});
				})
				.catch((err) => console.log(err.response));
		});
	}

	//logs out user
	handleLogout = () => {
		localStorage.removeItem('example-app');
		this.setState({
			redirect: true
		});
	};

	render() {
		const { redirect, user } = this.state;

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
						<SearchResult gigs={this.state.gigs} />
					</div>
				</div>
			</div>
		);
	}
}

export default SearchGigs;
