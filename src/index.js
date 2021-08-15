import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GA4React from 'ga-4-react';

const ga4react = new GA4React('G-6GGMB62N37');

// (async () => {
// 	await ga4react
// 		.initialize()
// 		.then((res) => console.log('Analytics Success'))
// 		.catch((err) => console.log('Analytics Failure'))
// 		.finally(() => {
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
// });
// })();
