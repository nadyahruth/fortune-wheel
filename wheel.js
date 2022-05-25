

function rotatewheel(){
  let x =  Math.floor(Math.random()* 20 );
  if(x == 0) {
    rotatewheel();
  }
  else{
    console.log(x)
  }
    
}
