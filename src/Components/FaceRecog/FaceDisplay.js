import React from 'react';
import './FaceDisplay.css';
import 'tachyons';

  const FaceDisplay = ({input, box}) => {
  	box=Array.from(box);
  	console.log(box);
      return (
     <div className='center ma'>
     <div className='absolute mt2'>
     <img id='inputimage' alt='' src={input} width='500px' height='auto' />
     	{
     	     		box.map((box,i) => {
     	     			const { topRow,rightCol,bottomRow,leftCol } = box;
     	     			return (<div key={i} 
     	     						 id='face' 
     	     						 className='bounding-box' 
     	     						 style={{top:topRow , right:rightCol , bottom:bottomRow , left:leftCol}} > 
     	     					</div>);
     	     		})
     	
     	     	}
     	   
     </div>
    </div>
     );
    }
	/* return(
		<div className=' center'>
			<div className='absolute mt2 '>
				<img 
				id='inputimage' 
				src = {input} 
				alt=' ' 
				className='pa3 ' 
				style={{height: 'auto' , width: '300px'}} />
					
					<div 
						className="bounding-box"
						style={{top:box.topRow, 
								right: box.rightCol, 
								bottom:box.bottomRow, 
								left: box.leftCol }} />
					
			</div>
		</div>
		
	);
}*/

export default FaceDisplay ;