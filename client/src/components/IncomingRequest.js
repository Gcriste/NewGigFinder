import React from 'react';
import Moment from 'react-moment';

const IncomingRequests = (props) => {
	return (
		<div className='card'>
			<div className='card-body player'>
				<div className='article'>
					<h1>New Requests</h1>
					{props.savedRequests.map((savedrequest) => {
						return (
							<li className='search-list list-group-item'>
								<div className='SearchResult row' id={savedrequest.userid} key={savedrequest.id}>
									<div className='col-md-6 requestInfo'>
										{props.dateForSavedRequests.map((data) => (
											<h2 className='requestmusician'> You're Looking for A {data.musician} </h2>
										))}
										{props.dateForSavedRequests.map((data) => (
											<h2 className='requestFirstName'>
												{' '}
												For Your Gig On <Moment date={data.date} format='MM/DD/YYYY' />
											</h2>
										))}

										{props.dateForSavedRequests.map((data) => (
											<h2 className='requestFirstName'> At {data.venue} </h2>
										))}
										<br />
										<hr />
										<h2>Request:</h2>
										<h3 className='requestFirstName'>
											{' '}
											Name: {savedrequest.firstName} {savedrequest.lastName}
										</h3>
										<h3 className='requestAge'>Age: {savedrequest.age}</h3>
										<h3 className='requestNumber'>Phone Number: {savedrequest.number}</h3>
										<h3 className='requestExperience'>
											Played on Broadway {savedrequest.experience}
										</h3>
										<h3 className='requestReferenceName'>
											Reference Name: {savedrequest.referenceName}
										</h3>
										<h3 className='requestReferenceNumber'>
											Reference Phone Number: {savedrequest.referenceNumber}
										</h3>
										<h3 className='requestLink'>Link: {savedrequest.link}</h3>
									</div>
								</div>
								<br />
								<div className='buttonDiv '>
									<div>
										<button
											className='ui red vertical animated button'
											tabindex='0'
											id={savedrequest.id}
											onClick={() => props.handleDeleteButton(savedrequest.id)}
										>
											<div className='visible content'>Remove Request </div>
											<div className='hidden content'>DELETE</div>
										</button>
									</div>
								</div>
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default IncomingRequests;
