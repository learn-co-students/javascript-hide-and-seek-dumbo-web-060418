const getFirstSelector = (selector) => document.querySelector(selector)

const nestedTarget = () => document.querySelector('#nested .target')


const deepestChild = () => {
  let node = document.getElementById('grand-node')
  let dive = node.children[0]

	while (dive){
		node = dive
		dive = node.children[0]
	}
	return node
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children

    for (let j = 0; j < children.length;  j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
