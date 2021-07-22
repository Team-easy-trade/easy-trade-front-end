'use strict';
import formBaseUrl from './tools/serverUrl.js'
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
  e.preventDefault();
  const _id = e.target.elements['_id'].value;
  const name = e.target.elements['productName'].value;
  const price = e.target.elements['productPrice'].value;
  const image = e.target.elements['imageURL'].value;
  const category = e.target.elements['productCategory'].value;
  const description = e.target.elements['productDesc'].value;

  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  const userToken = userInfo.token;
  const userID = userInfo.user._id;
  
  const data = { name, price, image, category, description};
  const postData = {
    ...data,
    owner: userID,
  }
  const postConfig = {
    method: 'post',
    url: `${formBaseUrl}/listing`,
    data:postData,
    headers: {
      'Authorization': 'Bearer ' + userToken
    },
  }

  const patchConfig = {
    method: 'patch',
    url: `${formBaseUrl}/listing/${_id}`,
    data,
    headers: {
      'Authorization': 'Bearer ' + userToken
    }
  }

  if (e.submitter.id === 'createNewBtn'){
    try {
      await axios(postConfig);
      window.location.href = 'account.html';
      return;
    } catch (error){
      console.log(error);
    }
  } else if (e.submitter.id === 'updateOneBtn'){
    try {
      await axios(patchConfig);
      window.location.href = 'account.html';
      return;
    } catch (error){
      console.log(error);
    }  
  }

  
})