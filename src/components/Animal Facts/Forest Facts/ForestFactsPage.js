import React, {useRef, useState} from 'react'
import forestFacts from '../../../data/ForestFacts.js'
import './styles.scss'

const ForestFactsPage = () => {
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

	for (let animal in forestFacts) {
		images.push({
			src: animal.image,
			alt: animal.name
		})
	}

	return (
		<div className="forestDiv">
			<h1>Click an animal for a fun fact!</h1>
			<p className={clicked ? "clicked" : null} ref={factRef}></p>
			<div className="animalPics">
				{forestFacts.map((fact) => {
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

export default ForestFactsPage
