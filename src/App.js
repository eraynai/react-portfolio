import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={About} path='/about' />
				<Route component={Project} path='/project' />
				<Route component={Skills} path='/skills' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
