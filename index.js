const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let search = arr.find(arr => arr.result === "O");

  if (search === undefined){
    return search;
  }else{
    return search.year;
  }
  return arr;
}
