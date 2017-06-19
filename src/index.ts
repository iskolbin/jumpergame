import * as Scene from './Scene'
import * as Hero from './Hero'
import { Action } from './Action'
import * as Pixi from './backend/pixi'
import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store: Store<Scene.Data>

function gameReducer( state = Scene.make(), action: Action ) {
	switch ( action.type ) {
		case 'Init':
			Pixi.init(
				() => store.dispatch( {type: 'StartGame'} ),
				(dt: number) => store.dispatch( {type: 'Update', dt: dt } )
			)
			return state
		case 'StartGame':
			return state
		case 'Jump':
			return {
				...state,
				hero: Hero.jump( state.hero )
			}
		case 'Update':
			return Scene.update( state, action.dt )
		default:
			return state
	}
}

store = createStore( gameReducer, undefined, composeWithDevTools())

store.subscribe( () => Pixi.render( store.getState()))
store.dispatch({ type: 'Init', width: 20, height: 10 })
