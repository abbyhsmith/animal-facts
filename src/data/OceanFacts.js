import octoPic from '../images/octopus.webp'
import sharkPic from '../images/shark.webp'
import turtPic from '../images/turtle.webp'

const oceanFacts = [
	{
		name: 'Octopus',
		biome: 'Ocean',
		facts: ['Octopuses can regenerate a tentacle if they lose one!', 'Octopuses can taste with their tentacle suckers!', 'Octopuses can change color to hide from predators!', 'Female octopuses can lay over 100,000 eggs at once!'],
		image: octoPic
	},
	{
		name: 'Great White Shark',
		biome: 'Ocean',
		facts: ['Great white sharks can be up to 20 feet long, and weigh up to 5000 pounds!', 'Great white sharks can have thousands of teeth!', 'Great white sharks can swim up to 15 miles per hour!', 'Despite popular fears, great white sharks rarely attack humans!'],
		image: sharkPic
	},
	{
		name: 'Green Sea Turtle',
		biome: 'Ocean',
		facts: ['Green sea turtles are only two inches long when born, but can grow up to 5 feet!', 'Green sea turtles can swim up to 35 miles per hour!', 'Green sea turtles lay 100-200 eggs at a time!', 'Green sea turtles eat animals when they are babies, but become herbivores as adults!'],
		image: turtPic
	}
]

export default oceanFacts
