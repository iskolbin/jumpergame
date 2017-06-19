export interface Data {
	x: number
	y: number
	velocityX: number	
	velocityY: number
	distance: number
	runningFrame: number
}

export const RUN_VELOCITY = 10
export const JUMP_VELOCITY = 10
export const GRAVITY = -10

export function make(): Data {
	return {
		x: 0,
		y: 0,
		velocityX: RUN_VELOCITY,
		velocityY: 0,
		distance: 0,
		runningFrame: 0
	}
}

export function update( hero: Data, dt: number ): Data {
	const newHero = { ...hero, distance: hero.distance + dt*hero.velocityX }
	if ( hero.y > 0 ) {
		newHero.y += hero.velocityY * dt
		newHero.velocityY += GRAVITY * dt
		if ( newHero.y <= 0 ) {
			newHero.y = 0
			newHero.velocityY = 0
			newHero.runningFrame = 0
		}
	} else {
		newHero.runningFrame = (0.0005*newHero.distance | 0) % 4
	}
	newHero.x += newHero.velocityX * dt
	return newHero
}

export function jump( hero: Data ): Data {
	if ( hero.y === 0 ) {
		return { ...hero, velocityY: JUMP_VELOCITY }
	} else {
		return hero
	}
}
