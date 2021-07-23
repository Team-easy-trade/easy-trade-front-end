'use strict';

export default function generatePagination(pages){

  const ulNode = document.createElement('ul');
  ulNode.className = "pagination pg-blue";
  
  for (let i = 0; i<pages; i++){
    const liNode = generatePageEl(i+1);
    ulNode.appendChild(liNode);
  }

  document.getElementById('paginationNav').appendChild(ulNode);
}


function generatePageEl(pageNumber){
  const liNode = document.createElement('li');
  liNode.className = 'page-item';
  liNode.id = 'pagination'+pageNumber;
  liNode.innerHTML = `
    <a class="page-link">${pageNumber}</a>
  `;
  return liNode;
}