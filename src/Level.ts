import * as Hero from './Hero'
import * as Obstacle from './Obstacle'

export interface Data {
	hero: Hero.Data
	obstacles: Obstacle.Data[]
}

export function make(): Data {
	return {
		hero: Hero.make(),
		obstacles: []
	}
}

export function update( {hero, obstacles}: Data, dt: number ): Data {
	return {
		hero: Hero.update( hero, dt ),
		obstacles
	}
}
