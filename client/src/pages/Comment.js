import React, { Component } from 'react';
import axios from 'axios';
import { InputBox, PostComment } from '../components/Comment';
import CommentResults from '../components/CommentResults';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/SetAuthToken';

const styles = {
	error: {
		color: 'red',
		fontSize: '0.7rem',
		margin: 0
	}
};

class Comment extends Component {
	//create state
	constructor(props) {
		super(props);
		this.state = {
			userid: '',
			user: {},
			redirect: false,
			date: '',
			comments: [],
			likes: [ {} ],
			avatar: '',
			name: '',
			text: '',
			errors: {},
			savedDiscussions: [],
			id: props.match.params.id,
			discussionId: ''
		};
	}

	handleLogout = () => {
		localStorage.removeItem('example-app');
		this.setState({
			redirect: true
		});
	};

	componentDidMount() {
		const token = localStorage.getItem('example-app');
		if (token) {
			setAuthToken(token);
		}
		this.loadDiscussions();
		axios
			.get('/api/user')
			.then((response) => {
				this.setState({
					user: response.data,
					userid: response.data.id,
					avatar: response.data.avatar
				});
				console.log(response.data.id);
			})
			.catch((err) => console.log(err.response));
	}

	loadDiscussions = () => {
		let newid = this.state.id;

		axios
			.get('/api/discussion/' + newid)
			.then((res) => {
				let newDiscussionId = res.data.id;
				this.setState({
					savedDiscussions: res.data,
					discussionId: res.data.id
				});
				console.log(newDiscussionId);
				console.log(res.data);
				axios.get('/api/comment/discussion/' + newDiscussionId).then((res) => {
					console.log(res.data);
					this.setState({
						comments: res.data
					});
				});
			})
			.catch((err) => console.log(err));
	};

	handlePostChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	//submit button function
	handlePostSubmit = (event) => {
		event.preventDefault();
		let errors = {};

		if (!this.state.text) {
			errors.text = 'Please enter text before submitting!!';
			this.setState({ errors });
		} else {
			let newComment = {
				text: this.state.text,
				name: this.state.user.firstName,
				avatar: this.state.user.avatar,
				discussionId: this.state.discussionId,
				userid: this.state.userid
			};
			console.log(newComment);
			// api call to post comment
			axios
				.post('/api/comment', newComment)
				// API.updateCommentById({newid},newDiscussion)
				.then((res) => this.componentDidMount())
				.catch((err) => console.log(err));
		}

		this.setState({
			text: ''
		});
	};

	handleDeleteComment = (id) => {
		axios.delete('/api/comment/' + id).then((res) => this.componentDidMount()).catch((err) => console.log(err));
	};

	//logs out user
	handleLogout = () => {
		localStorage.removeItem('example-app');
		this.setState({
			redirect: true
		});
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
					<div className='ui relaxed center aligned grid'>
						<div className='fourteen wide column'>
							<h1>Comment On This Post</h1>
							<form className='ui big form'>
								<div className='card'>
									<div className='card-body player'>
										<div className='article'>
											<CommentResults
												savedDiscussions={this.state.savedDiscussions}
												comments={this.state.comments}
												handleDeleteComment={this.handleDeleteComment}
											/>
											<br />
											<PostComment handlePostSubmit={this.handlePostSubmit} />

											<hr />
											<div className={`sixteen wide field ${errors.text ? 'error' : ''}`}>
												{errors.text && <div style={styles.error}>{errors.text}</div>}
												<InputBox
													value={this.state.text}
													onChange={this.handlePostChange}
													name='text'
													placeholder='Type Your Discussion Here'
												/>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Comment;
