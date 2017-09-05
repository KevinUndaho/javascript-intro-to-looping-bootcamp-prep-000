function forLoop(list){
    for(var i=0; i<25; i++){
      if (i==0){
        list.push("I am a strange loop.")
      }else if (i==1){
        list.push("I am 1 strange loop.")
      } else {
        list.push(`I am ${i} strange loops`)
      }
    }
    return list
}


function whileLoop(number){
  while (number > 0) {
    --number
    console.log(number)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(list){
  do {
    list.pop()
    var condition = maybeTrue()
  } while(condition && list.length > 0)

  return list
}

// //test
// list=[]
// console.log(forLoop(list))
// console.log(whileLoop(5))
// var long_list = forLoop(list)
// console.log(doWhileLoop(long_list))
