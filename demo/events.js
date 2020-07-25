const EventEmitter = require('events')
// const { emit } = require('process')

const emitter = new EventEmitter()

emitter.on('anything', data => {
  console.log('ON: anything:', data)
})

// emitter.emit('anything', {a: 1, b: 2}) // this calls anything event... second parameter is data

setTimeout(() => {
  // emitter.emit('anything', {c: 3})
}, 1000);

/**
 * we write this class to attach own method 
 */
class Dispatcher extends EventEmitter {
  subscribe(eventName, cb){
    console.log('[Subscrbe...]')
    this.on(eventName, cb)
  }

  dispatch(eventName, data){
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}


const dis = new Dispatcher()

dis.dispatch('aa', {aa: 22})  // this will not work because before subscribe

dis.subscribe('aa', data => {
  console.log('ON: aa', data)
})
dis.dispatch('aa', {aa: 33})  // this will not work because before subscribe