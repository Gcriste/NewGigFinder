import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const DiscussionResults = (props) => {
	let discussionsSorted = props.discussions.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});

	return (
		<div className='card'>
			<div className='card-body player'>
				<div className='article'>
					<h1>All Posts</h1>
					{discussionsSorted.map((discussion) => {
						return (
							<li className='search-list list-group-item'>
								<div className='SearchResult row' id={discussion.userid} key={discussion.id}>
									<div>
										<div className='card discussion-post'>
											<img src={discussion.avatar} style={{ width: '18rem' }} />
											<div className='container'>
												<h2 className='discussionMusician'>{discussion.name}</h2>
												<p>{discussion.text}</p>
												<p>
													<Moment date={discussion.date} format='MM/DD/YYYY hh:mm' />
												</p>
											</div>
										</div>
										<Link
											to={'/comment/' + discussion.id}
											className='ui primary animated button'
											tabindex='0'
										>
											<div className='visible content'>Comment </div>
											<div className='hidden content'>
												<i className='right arrow icon' />
											</div>
										</Link>

										<button
											className='ui red vertical animated button'
											tabindex='0'
											id={discussion.id}
											onClick={() => props.handleDeleteDiscussion(discussion.id)}
										>
											<div className='visible content'>Delete Post </div>
											<div className='hidden content'>DELETE</div>
										</button>
										<hr />
										{/* {discussion.comments.map(comment => {
                                   if(comment.text){
                                     return (
                                         <>
                                      <div className="card">
                                      <img src={comment.avatar}></img>
                                      <div className="container">
                                 <h2>{comment.name}</h2>
                                 <p>{comment.text}</p>
                                 <p><Moment date={comment.date} format="MM/DD/YYYY hh:mm"/></p>
                                 </div>
                                 </div>
                                 </>
                                     )
                                   }
                                   else{
                                       return (
                                       <h4>Comments:</h4>
                                       )
                                   }
                                 } )} */}
									</div>
								</div>
								{/* <button className="ui primary animated button" tabindex="0"
                            id={discussion._id}
                            onClick={() => props.handleCommentButton(discussion._id)}>
                                <div className = "visible content">Comment on Post </div>
                                <div className = "hidden content">
                                   Comment
                                  </div>
                                </button> */}
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default DiscussionResults;
