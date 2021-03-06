import React from 'react';

export function Input(props) {
	return (
		<div className='form-group'>
			<input className='form-control' {...props} />
		</div>
	);
}

export function Venue(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Venue</option>
				<option value='Acme Feed and Seed'>Acme Feed and Seed</option>
				<option value='Tootsies'>Tootsies</option>
				<option value='Famous Saloon'>Famous Saloon</option>
				<option value='Legends Corner'>Legends Corner</option>
				<option value='Honky Tonk Central'>Honky Tonk Central</option>
				<option value='The Stage'>The Stage</option>
				<option value='Robert&#39;s Western World'>Robert's Western World</option>
				<option value='Tin Roof'>Tin Roof</option>
				<option value='Tequila Cowboy'>Tequila Cowboy</option>
				<option value='Rippy&#39;s Bar and Grill'>Rippy's Bar and Grill</option>
				<option value='Layla&#39;s'>Layla's</option>
				<option value='Nudie&#39;s Honky Tonk'>Nudie's Honky Tonk</option>
				<option value='Dierks Bentley&#39;s Whiskey Row'>Dierks Bentley's Whiskey Row</option>
				<option value='Redneck Riviera Bar and BBQ'>Redneck Riviera Bar and BBQ</option>
				<option value='Margaritaville Restaurant Nashville'>Margaritaville Restaurant Nashville</option>
				<option value='Nashville Underground'>Nashville Underground</option>
				<option value='Jason Aldean&#39;s Kitchen + Rooftop Bar'>Jason Aldean's Kitchen + Rooftop Bar</option>
				<option value='Hard Rock Cafe'>Hard Rock Cafe</option>
				<option value='BB King&#39;s Blues Club'>BB King's Blues Club</option>
				<option value='Bourbon Street Blues and Boogie Bar'>Bourbon Street Blues and Boogie Bar</option>
				<option value='Bailey&#39;s Sports Grille'>Bailey's Sports Grille</option>
				<option value='Kid Rock&#39;s Big Honky Tonk Rock N&#39; Roll Steakhouse'>
					Kid Rock's Big Honky Tonk Rock N' Roll Steakhouse
				</option>
				<option value='Other'>Other</option>
			</select>
		</div>
	);
}

export function Musician(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Instrument</option>
				<option value='Guitarist'>Guitar</option>
				<option value='Bassist'>Bass</option>
				<option value='Drummer'>Drums</option>
				<option value='Fiddle Player'>Fiddle</option>
				<option value='Mandolin'>Mandolin</option>
				<option value='Keyboard Player'>Keys</option>
				<option value='Saxophone Player'>Saxophone</option>
				<option value='Trumpet Player'>Trumpet</option>
				<option value='Other'>Other</option>
			</select>
		</div>
	);
}

export function MusicType(props) {
	return (
		<div className='required field'>
			<select className='ui fluid search dropdown' {...props}>
				<option value=''>Genre</option>
				<option value='Standard Broadway Tunes'>Standard Broadway Tunes</option>
				<option value='Old Country'>Old Country</option>
				<option value='Pop Country'>Pop Country</option>
				<option value='Rock'>Rock</option>
				<option value='Jazz'>Jazz</option>
				<option value='Blues'>Blues</option>
				<option value='Funk'>Funk</option>
				<option value='Bluegrass'>Bluegrass</option>
				<option value='Hip Hop'>Hip-Hop</option>
				<option value='Heavy Metal'>Heavy Metal</option>
				<option value='Original'>Original</option>
				<option value='Other'>Other</option>
			</select>
		</div>
	);
}

export function PostButton(props) {
	return (
		<button
			className='ui violet vertical animated button'
			tabindex='0'
			onClick={(event) => props.handlePostSubmit(event)}
		>
			<div className='visible content'>Post Gig </div>
			<div className='hidden content'>Submit</div>
		</button>
	);
}
