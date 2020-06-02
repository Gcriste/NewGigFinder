import React, { Component } from 'react';
import axios from 'axios';
import { Input, PostButton, Age, Experience } from '../components/PostRequest';
import { Redirect } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import setAuthToken from '../utils/SetAuthToken';

const styles = {
	error: {
		color: 'red',
		fontSize: '0.8rem',
		margin: 0
	}
};
class PostRequest extends Component {
	state = {
		firstName: '',
		lastName: '',
		age: '',
		number: '',
		experience: '',
		referenceName: '',
		referenceNumber: '',
		link: '',
		gigid: '',
		message: '',
		userid: '',
		user: {},
		redirect: false,
		post: [],
		gigdate: '',
		errors: {}
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
		});
	}
	handlePostChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	//submit button function
	handlePostRequest = (event) => {
		event.preventDefault();
		console.log('hi');

		let errors = {};

		if (!this.state.firstName) {
			errors.firstName = 'Please type in your first name';
			this.setState({ errors });
		}
		if (!this.state.lastName) {
			errors.lastName = 'Please type in your last name';
			this.setState({ errors });
		}
		if (!this.state.age) {
			errors.age = 'Please type in your age';
			this.setState({ errors });
		}
		if (!this.state.number) {
			errors.number = 'Please type in your phone number';
			this.setState({ errors });
		}
		if (!this.state.experience) {
			errors.experience = 'Please type in your show experience';
			this.setState({ errors });
		}
		if (!this.state.referenceName) {
			errors.referenceName = 'Please type in a reference';
			this.setState({ errors });
		}

		if (!this.state.referenceNumber) {
			errors.referenceNumber = 'Please type in your reference phone number';
			this.setState({ errors });
		}
		if (!this.state.link) {
			errors.link = 'Please provide a link';
			this.setState({ errors });
		} else {
			const newRequest = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				number: this.state.number,
				age: this.state.age,
				experience: this.state.experience,
				referenceName: this.state.referenceName,
				referenceNumber: this.state.referenceNumber,
				link: this.state.link,
				userid: this.state.userid,
				gigid: this.props.match.params.id,
				gigdate: this.state.date
			};
			console.log(newRequest);
			// api call to post gig
			axios
				.post('/api/request', newRequest)
				.then(
					this.setState({
						redirect: true
						//    message: alert("Your posted a request! ")
					})
				)
				.catch((err) => console.log(err));
		}
	};

	render() {
		const { errors, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/dashboard' />;
		}

		return (
			<div>
				<div className='ui relaxed center aligned grid'>
					<div className='ten wide column'>
						<h1>Request to Play Gig</h1>
						<form className='ui big form'>
							<div className='card'>
								<div className='card-body player'>
									<div className='article'>
										<div className='four fields'>
											<div
												className={`four wide required field ${errors.firstName
													? 'error'
													: ''}`}
											>
												<label>
													<strong>First Name</strong>
												</label>
												{errors.firstName && <div style={styles.error}>{errors.firstName}</div>}
												<Input
													value={this.state.firstName}
													onChange={this.handlePostChange}
													name='firstName'
													placeholder='First Name'
												/>
											</div>
											<div
												className={`four wide required field ${errors.lastName ? 'error' : ''}`}
											>
												<label>
													<strong>Last Name</strong>
												</label>
												{errors.lastName && <div style={styles.error}>{errors.lastName}</div>}
												<Input
													value={this.state.lastName}
													onChange={this.handlePostChange}
													name='lastName'
													placeholder='Last Name'
												/>
											</div>
											<div className={`three wide required field ${errors.age ? 'error' : ''}`}>
												<label>
													<strong>Age</strong>
												</label>
												{errors.age && <div style={styles.error}>{errors.age}</div>}
												<Age
													value={this.state.age}
													onChange={this.handlePostChange}
													name='age'
													placeholder='Age'
												/>
											</div>
											<div className={`five wide required field ${errors.number ? 'error' : ''}`}>
												<label>
													<strong>Phone Number</strong>
												</label>
												{errors.number && <div style={styles.error}>{errors.number}</div>}
												<PhoneInput
													placeholder='Enter phone number'
													country='US'
													value={this.state.number}
													onChange={(number) => this.setState({ number })}
												/>
											</div>
										</div>

										<br />
										<div className='three fields'>
											<div className={`required field ${errors.experience ? 'error' : ''}`}>
												<label>
													<strong># of Gigs Played Downtown</strong>
												</label>
												{errors.experience && (
													<div style={styles.error}>{errors.experience}</div>
												)}
												<Experience
													value={this.state.experience}
													onChange={this.handlePostChange}
													name='experience'
													placeholder='Years of Experience'
												/>
											</div>
											<div className={`required field ${errors.referenceName ? 'error' : ''}`}>
												<label>
													<strong>Reference Name</strong>
												</label>
												{errors.referenceName && (
													<div style={styles.error}>{errors.referenceName}</div>
												)}
												<Input
													value={this.state.referenceName}
													onChange={this.handlePostChange}
													name='referenceName'
													placeholder='Name of Reference'
												/>
											</div>
											<div className={`required field ${errors.referenceNumber ? 'error' : ''}`}>
												<label>
													<strong>Reference Phone Number</strong>
												</label>
												{errors.referenceNumber && (
													<div style={styles.error}>{errors.referenceNumber}</div>
												)}
												<PhoneInput
													placeholder='Enter phone number'
													country='US'
													value={this.state.referenceNumber}
													onChange={(referenceNumber) => this.setState({ referenceNumber })}
												/>
											</div>
										</div>

										<br />
										<div className='one field'>
											<div className={`required field ${errors.link ? 'error' : ''}`}>
												<label>
													<strong>Link</strong>
												</label>
												{errors.link && <div style={styles.error}>{errors.link}</div>}
												<Input
													value={this.state.link}
													onChange={this.handlePostChange}
													name='link'
													placeholder='Link for video or website'
												/>
											</div>
										</div>
										<PostButton handlePostRequest={this.handlePostRequest} />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default PostRequest;
