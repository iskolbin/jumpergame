import * as Level from './Level'

export interface Data {
	level: Level.Data
}

export function make(): Data {
	return {
		level: Level.make()
	}
}

export function update( scene: Data, dt: number ): Data {
	return {
		level: Level.update( scene.level, dt )
	}
}
