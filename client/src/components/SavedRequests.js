import React from 'react';
import Moment from 'react-moment';

const SavedRequests = (props) => {
	return (
		<div className='card'>
			<div className='card-body player'>
				<div className='article'>
					<h1>Requests You've Made</h1>
					{props.savedRequests.map((savedRequest) => {
						return (
							<li className='search-list list-group-item'>
								<div className='SearchResult row' id={savedRequest.userid} key={savedRequest.id}>
									<div className='requestinfo'>
										{props.dateForSavedRequests.map((data) => (
											<div>
												<h2 className='requestFirstName'>
													{' '}
													For The Gig With {data.bandname} On{' '}
													<Moment date={data.date} format='MM/DD/YYYY' />
												</h2>
												<h2 className='requestFirstName'> At {data.venue} </h2>
											</div>
										))}

										<hr />
										<h3 className='requestFirstName'>
											Your Name: {savedRequest.firstName} {savedRequest.lastName},{' '}
											{savedRequest.age} Years Old
										</h3>
										<h3 className='requestExperience'>Your Phone Number: {savedRequest.number}</h3>
										<h3 className='requestExperience'>
											Played on Broadway: {savedRequest.experience}
										</h3>
										<h3 className='requestReferenceName'>
											Reference Name: {savedRequest.referenceName}
										</h3>
										<h3 className='requestReferenceNumber'>
											Reference Phone Number: {savedRequest.referenceNumber}
										</h3>
										<h3 className='requestLink'>Link: {savedRequest.link}</h3>
									</div>
								</div>
								<br />
								<div className='buttonDiv '>
									<button
										className='ui red vertical animated button'
										tabindex='0'
										id={savedRequest.id}
										onClick={() => props.handleDeleteRequest(savedRequest.id)}
									>
										<div className='visible content'>Remove Request </div>
										<div className='hidden content'>DELETE</div>
									</button>
								</div>
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default SavedRequests;
