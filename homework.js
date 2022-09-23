const http = require('http');

const server = http.createServer(function(req, res){

let  elephant = {
  size: 2,
  x: 4,
  y: 4,   
  move: {
      x: 2, 
      y: 3
  }
}

let ant = {
size: 1,
x: 1,
y: 1 
}

eat()
res.end()

function eat(){
if(elephant.size >= ant.size && elephant.x - elephant.move.x == 2 && elephant.y - elephant.move.y == 2)
   { 
     return  res.write("I can eat");
   } 
     else if(elephant.x - elephant.move.x == 1 && elephant.y - elephant.move.y == 2)
   {
     return res.write("I can eat");
   } 
     else if(elephant.x - elephant.move.x == 2 && elephant.y - elephant.move.y == 1)
   {
     return res.write("I can eat");

   }
     return res.write("I can't eat");
}

});

server.listen(8000);