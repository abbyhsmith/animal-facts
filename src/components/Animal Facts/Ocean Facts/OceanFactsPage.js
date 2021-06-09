import React, {useRef, useState} from 'react'
import oceanFacts from '../../../data/OceanFacts.js'
import './styles.scss'

const OceanFactsPage = () => {
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

	for (let animal in oceanFacts) {
		images.push({
			src: oceanFacts[animal].image,
			alt: oceanFacts[animal].name
		})
	}

	return (
		<div className="oceanDiv">
			<h1>Click an animal for a fun fact!</h1>
			<p className={clicked ? "clicked" : null} ref={factRef}></p>
			<div className="animalPics">
				{oceanFacts.map((fact) => {
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

export default OceanFactsPage
