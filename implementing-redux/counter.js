import Dedux from './dedux.js'
import reducer, {
	decrementCounter,
	incrementCounter,
	resetCounter,
	Middleware,
      } from './reducer.js'

const { createStore, applyMiddleware } = Dedux

const countDisplay = document.getElementById('count')

//get initial state from middleware
const store = createStore(reducer)
applyMiddleware(store, [Middleware(store)])
countDisplay.innerHTML = store.getState()
store.subscribe(count => {
  countDisplay.innerHTML = count
})

//link buttons to listeners
document.getElementById('up').addEventListener('click', () => store.dispatch(incrementCounter()))
document.getElementById('down').addEventListener('click', () => store.dispatch(decrementCounter()))
document.getElementById('reset').addEventListener('click', () => store.dispatch(resetCounter()))

