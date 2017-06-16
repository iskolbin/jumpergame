import * as Scene from './Scene'
import * as Hero from './Hero'
import { Action } from './Action'
import * as Pixi from './backend/pixi'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

function gameReducer( state = Scene.make(), action: Action ) {
	switch ( action.type ) {
		case 'Init':
			Pixi.init()
			return state
		case 'Jump':
			return { ...state, level: {...state.level, hero: Hero.jump( state.level.hero )}}
		case 'Update':
			return Scene.update( state, action.dt )
		default:
			return state
	}
}

const store = createStore( gameReducer, undefined, composeWithDevTools())

store.subscribe( () => Pixi.render( store.getState()))
store.dispatch({ type: 'Init', width: 20, height: 10 })
