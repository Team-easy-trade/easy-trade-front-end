'use strict';


export default function generatePagination(listings){

  const navNode = document.createElement('nav');
  navNode.className = "d-flex justify-content-center wow fadeIn";

  

  for (let i = 0; i<listings.totalPages; i++){
    const pageEl = generatePageEl(i+1);
    navNode.appendChild(pageEl);

  }

  <nav class="d-flex justify-content-center wow fadeIn">
        <ul class="pagination pg-blue">

          <li class="page-item active">
            <a class="page-link" href="#">1
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>

        </ul>
      </nav>
}


function generatePageEl(pageNumber){
  const liNode = document.createElement('li');
  liNode.className = 'page-item';
  liNode.id = 'pagination'+pageNumber;
  liNode.innerText = pageNumber;

  liNode.addEventListener('click', (e)=>{

  })

}