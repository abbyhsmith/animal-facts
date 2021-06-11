import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import SvgTree from './Svgs/SvgTree.js'

const NavBar = (props) => {
	return (
		<div className="nav">
			<nav>
				<div className="container">
					<div className="homeButton">
						<SvgTree />
						<Link to="/" className="homeLink">Home</Link>
					</div>
					<ul>
						<li>
							<Link to="/tundra">Tundra</Link>
						</li>
						<li>
							<Link to="/forest">Forest</Link>
						</li>
						<li>
							<Link to="/ocean">Ocean</Link>
						</li>
						<li><SvgTree /></li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default withRouter(NavBar)
