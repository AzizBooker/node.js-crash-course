const EventEmiiter = require('events');
const uuid=require('uuid');

console.log(uuid.v4())

class Logger extends EventEmiiter{

    log(msg){
        //Call Event
        this.emit('message',{id: uuid.v4(),msg})
    }
}
const logger=new Logger()


logger.on('message',(data)=>{
    console.log('Called Listener:',data)
});

logger.log('Hello World')
logger.log('Hi!')
logger.log('Hi how are you!')

