// Actions
const INCREMENT_COUNTER = 'app/counter/INCREMENT'
const DECREMENT_COUNTER = 'app/counter/DECREMENT'
const RESET_COUNTER = 'app/counter/RESET'

export function incrementCounter() {
	return { type: INCREMENT_COUNTER }
      }
      export function decrementCounter() {
	return { type: DECREMENT_COUNTER }
      }
      export function resetCounter() {
	return { type: RESET_COUNTER }
      }

      
// Reducer Function
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    case RESET_COUNTER:
      return 0
    default:
      return state
  }
}

// Middleware
const initialState = parseInt(localStorage.getItem('count'), 10) || 0

export const Middleware = store => () => next => action => {
  localStorage.setItem('count', reducer(store.getState(), action))
  next(action)
}