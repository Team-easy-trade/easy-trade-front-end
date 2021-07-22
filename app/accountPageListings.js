'use strict';
import generateUserListiingCard from './tools/userListingCardGenerator.js';

import {fakeInitData} from './fakeData.js';


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
    refreshCards(fakeInitData)
  } catch (error){
    console.log(error);
  }
}


function refreshCards(listings){
  const listingsNode = document.getElementById('userListings');
  listingsNode.innerHTML = '';
  for (let listing of listings){
    listingsNode.appendChild(generateUserListiingCard(listing));
  }
}

const userId = JSON.parse(sessionStorage.getItem('userInfo')).user._id;
fetchData(userId)
