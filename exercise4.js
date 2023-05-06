// 4

function printNumbers(from,to){
  function go () {
  console.log(from);
   if(from == to){
    clearInterval (timerId);
   }
   from++
  }
  go()
  let timerId = setInterval(go,1000);
}
printNumbers(5,9);