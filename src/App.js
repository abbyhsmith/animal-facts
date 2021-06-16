import './App.scss';
import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar.js'
import TundraFactsPage from './components/TundraFactsPage.js';
import ForestFactsPage from './components/ForestFactsPage.js';
import OceanFactsPage from './components/OceanFactsPage.js';
import HomePage from './components/HomePage.js'
import Footer from './components/Footer.js'

function App() {	
  return (
    <div className="App">
		<Router>
			<NavBar />
			<Switch>
				<Route path="/" exact component={() => <HomePage />} />
				<Route path="/tundra" exact component={() => <TundraFactsPage />} />
				<Route path="/forest" exact component={() => <ForestFactsPage />} />
				<Route path="/ocean" exact component={() => <OceanFactsPage />} />
			</Switch>
			<Footer />
		</Router>
	</div>
  );
}

export default App;
