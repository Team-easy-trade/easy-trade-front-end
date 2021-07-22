'use strict';
import generateCard from './module/listingsGenerator.js';

const fakeUserData = [
  {
      name: "init data",
      imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
      description: "desc",
      category: "shoes",
      price: 9.99
  },
  {
    name: "init data",
    imageURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQrZ-ho_sEMRQDs0Bo46g9B0SmB_C8g-eO8zIziEvlWD6Tjs7fLznlsS1IblHmbOdbYDpnTfiKOg7BMQHskar5Js2z2SnM9HwMLjS8QhHrgsFyaYOFJOojWjQ&usqp=CAE",
    description: "desc",
    category: "shoes",
    price: 9.99
  },
   {
    name: "init data",
    imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
    description: "desc",
    category: "shoes",
    price: 9.99
  },
  {
   name: "init data",
   imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
   description: "desc",
   category: "shoes",
   price: 9.99
  },
  {
    name: "init data",
    imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
    description: "desc",
    category: "shoes",
    price: 9.99
  },
  {
   name: "init data",
   imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
   description: "desc",
   category: "shoes",
   price: 9.99
  }
]


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


function refreshCards(listings){
  const listingsNode = document.getElementById('userListings');
  listingsNode.innerHTML = '';
  for (let listing of listings){
    listingsNode.appendChild(generateCard(listing));
  }
}

const userId = JSON.parse(sessionStorage.getItem('userInfo')).user._id;
fetchData(userId)
