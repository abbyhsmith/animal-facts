import './App.scss';
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/Nav/NavBar.js'
import TundraFactsPage from './components/Animal Facts/Tundra Facts/TundraFactsPage';
import ForestFactsPage from './components/Animal Facts/Forest Facts/ForestFactsPage';
import OceanFactsPage from './components/Animal Facts/Ocean Facts/OceanFactsPage';
import HomePage from './components/Home Page/HomePage.js'
import Footer from './components/Footer/Footer.js'

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
