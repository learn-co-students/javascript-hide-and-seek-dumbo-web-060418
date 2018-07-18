
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length-1];
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('.ranked-list li')
  let listItems = Array.from(rankedList)
  for (let el in listItems){
    listItems[el].innerHTML = (parseInt(listItems[el].innerHTML)+n);
  }
}
