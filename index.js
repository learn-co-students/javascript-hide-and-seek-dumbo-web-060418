const getFirstSelector = (selector) => document.querySelector(selector);

const nestedTarget = () => document.querySelector('#nested .target');

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li');
  lis.forEach(function(el) { el.innerHTML = parseInt(el.innerHTML) + n })
};

function deepestChild() {
  const grandChildren = document.querySelectorAll('#grand-node div');
  return grandChildren[grandChildren.length - 1];
};
