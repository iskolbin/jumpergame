import * as Scene from '../../Scene'
import {extras,Texture,Sprite,Application,loader} from 'pixi.js'
const {AnimatedSprite} = extras

const app = new Application( 400, 300, {
	view: document.getElementById( 'gameview' ) as HTMLCanvasElement,
	backgroundColor: 0xffffff,
})

let loaded = false

loader.add( 'spritesheet.json' )

const sprites = {
	hero: new AnimatedSprite([Texture.EMPTY]),
	obstacles: [new Sprite(), new Sprite(), new Sprite(), new Sprite()]
}

export function init(
	onInitFinished: () => void,
	doUpdate: (dt: number) => void
) {
	loader.load( () => {
		loaded = true
		app.ticker.add( () => doUpdate( app.ticker.elapsedMS ))
		const textures = ([0,1,2,3].map( i => `run_${i}.png` ))
			.concat(['jump.png'])
			.map( path => Texture.fromFrame( path ))
		console.log( textures )
		sprites.hero = new AnimatedSprite( textures )
		app.stage.addChild( sprites.hero )
		onInitFinished() 
	})
}

export function render( scene: Scene.Data ) {	
	if ( loaded ) {
		//const cameraX = scene.hero.x
		sprites.hero.x = 0
		//scene.hero.x
		sprites.hero.y = scene.hero.y
		if ( scene.hero.y > 0 ) {
			sprites.hero.gotoAndStop( 4 )
		} else {
			sprites.hero.gotoAndStop( scene.hero.runningFrame )
		}
	}
}
