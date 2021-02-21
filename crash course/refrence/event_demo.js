const EventEmiiter=require('events')

//Create Class

class MyEmitter extends EventEmiiter{ }

//Init object
const myEmitter=new MyEmitter()

//EventListenr

myEmitter.on('event',()=>{
    console.log('Event Fired')
})


//Init Event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')