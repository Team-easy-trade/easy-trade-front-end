# easy-trade-front-end

This is the mini project required by TLG training.

Click here to see the deployed site:

<https://team-easy-trade.github.io/easy-trade-front-end/>

## Team members

Peng Chen

Jauric Flowers

Nicholas Babcock

## Project details

“Craig’s List” style e-commerce website. Made for buying and selling users’ stuff.

### User stories

Authenticated Users are able to post items for sale.

Users are able to view other items for sale.

Authenticated Users can delete their own listings.

Authenticated Users can update their own listings.

Admin can do all CRUD operations to every listings / user

### Project MVP

1. Web site has at least 3 pages: home page, product detail page
2. Backend will support user registration and login.
3. Users can post items to buy/sell.
4. Users can only update their own listings.
5. The home page will display all of the listings from every user.

### Project stretch goals

1. Add an account page to let users update their username/email/password.
2. Update backed authentication logic to support user account CRUD operations.
3. Home page supports search function to locate specific listings with keyword.
4. Add logic to make admin user able to edit everything.

## Data model

### User Model

- username: required
- password: requried
- email:requred, validation attached
- phone: required
- role: required, either user or admin
- location: required

### Listing Model

- name
- category
- price
- desc
- photo
- owner :  user_id
- location : user_location
