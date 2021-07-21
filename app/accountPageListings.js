'use strict';
import generatelistingsNode from './module/listingsGenerator.js';

const fakeUserData = [
  {
     name: "I am supposed to be a user listing",
     imageURL: "",
     description: "",
     category: "shoes",
     price: 100000
 }]


async function fetchData(userId){
  console.log('userID is ', userId)
  const config = {
    method:'get',
    url:`https://easy-trade-backend.herokuapp.com/api/v1/listings/id/${userId}`,
  }

  try{
    // const {data} = await axios(config);
    // refreshCards(data);

    // for mock test only
    refreshCards(fakeUserData)
  } catch (error){
    console.log(error);
  }
}


function refreshCards(data){
  const listingsDiv = document.getElementById('userListings');
  listingsDiv.innerHTML = '';
  listingsDiv.appendChild(generatelistingsNode(data));
}

const userId = JSON.parse(sessionStorage.getItem('userInfo')).user._id;
fetchData(userId)
