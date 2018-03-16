function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let nested = document.getElementById("grand-node");

  while (nested.children[0]){
    nested = nested.children[0];
  }
  return nested;
}

function increaseRankBy(n){
  let ranked = document.querySelectorAll("ul.ranked-list");

  for(let i = 0; i < ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked.innerHTML + n);
  }
}
