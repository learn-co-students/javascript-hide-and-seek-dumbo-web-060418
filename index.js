
function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
	const rankedList = document.querySelectorAll('.ranked-list')
	
	for (let i = 0; i < rankedList.length; i++) {
		let children = rankedList[i].children
	

	for (let k = 0; k < children.length; k++) {
		children[k].innerHTML = parseInt(children[k].innerHTML) + n 
	}
 }
}

// function deepestChild() {
// 	let grandNode = document.querySelector('#grand-node')
// 	grandNode.children[0].children[0]
// }

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div')
  return nodes[nodes.length-1]
 }


let nodes = document.querySelectorAll('#grand-node div')