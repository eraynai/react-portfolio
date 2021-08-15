// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Home />
			<Project />
			<Skills />
			<ContactForm />
		</React.Fragment>
	);
}

export default App;
