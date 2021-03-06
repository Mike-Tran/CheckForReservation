import React from 'react';
import {Button, Input, Typography} from "@material-ui/core/es/index";

function AboutThisApp(){

	const handleSubmitFile = (event) => {
		console.log(event.target);
	};


	return (
		<div>
		<Typography variant='h2' color="primary">
			Want to translate your audio files into editable transcripts?
		</Typography>

			<Typography variant='h2'  color="primary">
				Upload your blueprint here
			</Typography>
			<Input type="file" onChange={handleSubmitFile}/>
			<div>
				<Button>Button</Button>
			</div>
	</div>)
}

export default AboutThisApp;
