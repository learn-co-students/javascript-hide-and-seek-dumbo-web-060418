
const getFirstSelector = function (selector) {
  return document.querySelector(selector)
}

const nestedTarget =  function () {
  return document.querySelector('#nested .target')
}

const deepestChild =  function () {
  return document.querySelector('#grand-node div div div div')
}



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
