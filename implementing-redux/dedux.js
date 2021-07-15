export default {
  createStore,
  applyMiddleware,
}

function createStore(reducer) {
 // Init state 
 let state = reducer();

 let listeners = []

 //Update State with dispatched
 function dispatch(action) {
  if (!action || !action.type || typeof action.type !== 'string') {
    throw new Error('Action is not valid')
  }

  state = reducer(state, action)

  for (const listener of listeners) {
    listener(state)
  }
}
//Init listiner
function subscribe(listener) {
  listeners.push(listener)

  return function unSubscribe() {
    const Index = listeners.indexOf(listener)
    listeners.splice(Index, 1)
  }
}

function getState() {
  return state
}

return { dispatch, subscribe, getState }
 
}

function applyMiddleware(store, middlewares) {
  let dispatch = store.dispatch

  // FILO
      middlewares = middlewares.slice()
      middlewares.reverse()

  middlewares.forEach(middleware => {
    // hook up the middlewares
    dispatch = middleware(store)(dispatch)
  })

  //loop dispatch to middleware
  store.dispatch = dispatch
}