import * as Obstacle from './Obstacle'
import * as Hero from './Hero'

export interface Data {
	hero: Hero.Data
	obstacles: Obstacle.Data[]
	collided: boolean
	score: number
}

export function make(): Data {
	return {
		hero: Hero.make(),
		obstacles: [],
		collided: false,
		score: 0
	}
}

export function update( scene: Data, dt: number ): Data {
	return {
		...scene,
		score: scene.score + scene.hero.velocityX * dt,
		hero: Hero.update( scene.hero, dt ),
	}
}
