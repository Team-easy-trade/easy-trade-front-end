'use strict';

const formNode = document.getElementById('inputForm');

formNode.innerHTML = `
  <form id="listingForm">
    <input type="text" class="form-control d-none" id="_id" >
    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="productName">Product Name</label>
        <input type="text" class="form-control" id="productName" placeholder="Product Name">
      </div>
      <div class="form-group col-md-4">
        <label for="productPrice">Price</label>
        <input type="text" class="form-control" id="productPrice" placeholder="Price">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="imageURL">Image URL</label>
        <input type="text" class="form-control" id="imageURL" placeholder="http://aaaa">
      </div>
      <div class="form-group col-md-4">
        <label for="productCategory">Price</label>
        <select id="productCategory" class="form-control">
          <option selected>Choose...</option>
          <option>Clothing</option>
          <option>Electronics</option>
          <option>Outdoor</option>
          <option>Vehicles</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  
    <div class="form-group">
      <label for="productDesc">Description</label>
      <textarea type="text" class="form-control" id="productDesc" placeholder="Please talk about your product"></textarea>
    </div>
    <button id="createNewBtn" type="submit" class="btn btn-primary">Create New Product</button>
    <button id="updateOneBtn" type="submit" class="btn btn-success d-none">Update Product</button>
  </form>
`

document.getElementById('listingForm').addEventListener('submit', async (e)=>{
  const baseURL = 'https://easy-trade-backend.herokuapp.com/api/v1/listing'
  const _id = e.target.elements['_id'].value;
  const name = e.target.elements['productName'].value;
  const price = e.target.elements['productPrice'].value;
  const image = e.target.elements['imageURL'].value;
  const category = e.target.elements['productCategory'].value;
  const description = e.target.elements['productDesc'].value;
  const userToken = JSON.parse(sessionStorage.getItem('userInfo')).token;
  
  const data = { name, price, image, category, description};

  const postConfig = {
    method: 'post',
    url: `${baseURL}`,
    data,
    headers: {
      'Authorization': 'Bearer ' + userToken
    }
  }

  const putConfig = {
    method: 'put',
    url: `${baseURL}/${_id}`,
    data,
    headers: {
      'Authorization': 'Bearer ' + userToken
    }
  }

  if (e.submitter.id === 'createNewBtn'){
    await axios(postConfig);
  } else if (e.submitter.id === 'updateOneBtn'){
    await axios(putConfig);
  }
})