import React from 'react';
import 'tachyons';

const ImageLinkForm = ({onInputChange , onButtonSubmit }) =>{
	return (
		<div>
			<p className="f3 center"> {'This Magic Brain will Detect Faces for you.'} </p>
			<div className='center'>
				<div className=' center pa4 br3 shadow-5'>
					<input
					 onChange={onInputChange}
					 className='f4 pa2 w-70 center' 
					 type='tex' />
					<button 
					onClick={onButtonSubmit} 
					className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue center'>
					Detect
					</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;