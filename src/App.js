import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import ContactForm from './components/ContactForm/ContactForm';
import ReactGa from 'react-ga4';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		ReactGa.initialize('G-6GGMB62N37');

		ReactGa.send('pageview');
	}, []);
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={About} path='/' exact />
				<Route component={Project} path='/project' />
				<Route component={Skills} path='/skills' />
				<Route component={ContactForm} path='/contact' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
