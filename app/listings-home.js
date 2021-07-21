const listingsRowOne = document.getElementById("listings-row-one")
console.log(listingsRowOne)

const cards = [
 {

    name: "product name",
    imageURL: "",
    description: "",
    category: "shoes",
    price: 9.99

}]
for(var i = 0; i < 1; i++){
    listingsRowOne.innerHTML += 
`
<div class = "col-sm-3">
<div class="card" style="width: 18rem; padding-bottom: 10px; margin-bottom: 20px;">
  <img class="card-img-top" src=${cards[i].imageURL} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${cards[i].name}</h5>
    <h4>${cards[i].price}</h4>
    <p class="card-text">${cards[i].description}</p>
  </div>
</div>
</div>
`
}

