import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const CommentResults = (props) => {
	return (
		<div className='card'>
			<div className='card-body player'>
				<div className='article'>
                    <div className="container">
					
						<div className='row' id={props.savedDiscussions.userid} key={props.savedDiscussions.id}>
						<div className='card' >
							<img style={{display: 'block',
										marginLeft: 'auto',
										marginRight: 'auto',
                                        width: '12rem'}}
                                src={props.savedDiscussions.avatar}  />
							<div className='container'>
								<h2>{props.savedDiscussions.name}</h2>
								<p className='savedDiscussionMusician'>{props.savedDiscussions.text}</p>
                              
								{/* <p>
												<Moment date={savedDiscussion.date} format='MM/DD/YYYY hh:mm' />
											</p> */}
							</div>
						
                        <li className='search-list list-group-item'>
						<div className='row'> 
							<div className='savedDiscussionInfo'>
								{props.comments.map((comment) => {
                                     return (
                                        <>

                                      <div className="card" style={{width:'50rem'}}>
                                      <img style={{display: 'block',
										marginLeft: 'auto',
										marginRight: 'auto',
                                        width: '12rem'}}
                                        src={comment.avatar}></img>
                                      <div className="container">
                                 <h2>{comment.name}</h2> 
                                 <p>{comment.text}</p>
                                 <p><Moment date={comment.date} format="MM/DD/YYYY hh:mm"/></p>
                                 </div>
                                 
                                 
						<button
                                    className='ui red vertical animated button'
									tabindex='0'
									id={comment.id}
									onClick={() => props.handleDeleteComment(comment.id)}
								>
									<div className='visible content'>Delete Comment</div>
									<div className='hidden content'>DELETE</div>
								</button> 
                                </div>
                          
                   
                    </>
                    )
                })}
                                        </div>
						            </div>
                                </li>
                             </div>
                            <hr></hr>
					    </div>
				    </div>
                </div>
			</div>
		</div>
	);
};
export default CommentResults;
