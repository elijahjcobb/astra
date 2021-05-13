import React from 'react';
import ReactDOM from 'react-dom';
import {TestBed} from "./TestBed";
import {PUIApp} from "./pstdl-ui";

ReactDOM.render(
	<PUIApp>
		<TestBed/>
	</PUIApp>,
	document.getElementById('root')
);
