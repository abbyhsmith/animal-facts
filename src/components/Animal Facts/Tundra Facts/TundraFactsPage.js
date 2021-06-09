import React, {useRef, useState} from 'react'
import tundraFacts from '../../../data/TundraFacts.js'
import './styles.scss'

const TundraFactsPage = () => {
	const [clicked, setClicked] = useState(false)
	const factRef = useRef()
	const images = []

	const handleClick = (fact) => {
		if (clicked === false) {
			setClicked(true)
		}
		displayFact(fact)
	}

	const displayFact = (fact) => {
		const animalInfo = fact.facts
		const optionIndex = Math.floor(Math.random() * fact.facts.length)
		const funFact = animalInfo[optionIndex]
		factRef.current.innerHTML = funFact
	}

	for (let animal in tundraFacts) {
		images.push({
			alt: tundraFacts[animal].name,
			src: tundraFacts[animal].image
		})
	}

	return (
		<div className="tundraDiv">
			<h1>Click an animal for a fun fact!</h1>
			<p className={clicked ? "clicked" : null} ref={factRef}></p>
			<div className="animalPics">
				{tundraFacts.map((fact) => {
					return (
						<img
							src={fact.image}
							alt={fact.name}
							onClick={() => handleClick(fact)}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default TundraFactsPage
