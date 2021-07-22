'use strict';

import {fakeProductOwner} from './fakeData.js';

sessionStorage.setItem('productOwnerInfo', JSON.stringify(fakeProductOwner));

const productContainerNode = document.getElementById('productContainer');

const productObj = JSON.parse(sessionStorage.getItem('productInfo'));

const productOwner = JSON.parse(sessionStorage.getItem('productOwnerInfo'));

productContainerNode.innerHTML = `

  <div class="row wow fadeIn">
    <div class="col-md-6 mb-4">
      <img src="${productObj.image}" class="img-fluid" alt="">
    </div>

    <div class="col-md-6 mb-4">

      <div class="p-4">
        <div class="mb-3">
          <h4>${productObj.category.toUpperCase()}</h4>
        </div>

        <p class="lead">$${productObj.price}</p>

        <p class="lead font-weight-bold">Description</p>

        <p>${productObj.description}</p>

        <div class="d-none" id="productOwnerInfo">
        <p >Send Owner an Email: 
          <a href="mailto:${productOwner.email}">${productOwner.email}</a>
        </p>
        <p>Call the owner: ${productOwner.phone}</p>
        </div>

        <p id="showProductOwnerInfo" class="btn btn-outline-secondary mr-3 mt-1">Please Log In to see product owner contact info</p>
      </div>

    </div>

  </div>

`

function toggleProductOwnerInfo(){
  const productOwnerInfoNode = document.getElementById('productOwnerInfo');
  const productOwnerInfoNotice = document.getElementById('showProductOwnerInfo');

  if (sessionStorage.getItem('userInfo')){
    productOwnerInfoNode.classList.remove('d-none');
    productOwnerInfoNotice.classList.add('d-none');
  }else {
    productOwnerInfoNode.classList.add('d-none');
    productOwnerInfoNotice.classList.remove('d-none');
  }
}

toggleProductOwnerInfo();