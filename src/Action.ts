export interface Init {
	type: 'Init'
	width: number
	height: number
}

export interface Jump {
	type: 'Jump'
}

export interface Update {
	type: 'Update'
	dt: number
}

export type Action = Init | Jump | Update
