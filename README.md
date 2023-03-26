# palm-treecommerce


**BACK END**

TODO:
* visitied table: saves log of user product visits
* pagination (next page wala)

* Routes {paginate in all pages}
  - homePage: products: LOGO FIRST THEN FEATURED PRODUCTS. newest for 1 row, top products, category wise, fyp, featured
  - Sign up table: email verification
  - Login.If user is not logged in then: buy garne bela ask info {like tavis}. if not verified ask to verify
  - forgot pass word token system.
  - cart: if no loggedin: store in cookie, if logged in later then store in table (ask if they want to store cart from prev sesssion)
  
  - categoryPage : category wise product, top sold products, left side: advanced search
  - productPage: photo, price, description, same category wise product (top sold)
  - checkout: payment gateway 
  - logout 
  
  
  
  
  **FRONT END
    - Nav-Bar:  use fetch('/me') to check if a user is logged in. Display their username if they are. 
    - Home Page: Use fetch('/topProduct') with params [page, limit] (set limit to 3) and display the product names (any way you want for now)
    - Log-In Page : create a form that posts request to ('/login') to log a user in. 
    - Register Page: create a form that posts request to ('/register') fields=[f_name, l_name, email, password, street, city, country].
