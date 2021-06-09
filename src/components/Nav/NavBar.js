import React from 'react'
import './styles.scss'
import {Link, withRouter} from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className="nav">
			<nav>
				<div className="container">
					<Link to="/" className="homeLink">Home</Link>
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
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default withRouter(NavBar)
