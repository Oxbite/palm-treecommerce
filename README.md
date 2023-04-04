# palm-treecommerce

**BACK END**

TODO:

- visitied table: saves log of user product visits
- pagination (next page wala)

- Implemented Routes
  \*POST

  - Post /login Body{email, password}
  - POST /register BODY {email, name, street, city, country, password}
  - POST /addProduct Body {name, price, discount, categoryId, order_number}
  - POST /addCategory Body{name}
  - /forgot-password params{token}, Body {password}

  * Get

  - /logout -- logs the user out clears cookie
  - /fetchUser -- fetches details of currently logged in user
  - /me -- returns the email and name of current user or error if no one is logged in
  - /delUser -- deletes and account (admin or logged in user)
  - /delCategory -- deletes a category by admin.
  - /delProducts deletes a product by admin.

  - /topProduct -- params: {page, limit} returns array of top products
  - /similarProduct/:categoryId returns array of products in same category without pagination
  - /category params: {page, limit, categoryId} // returns array of product in category with pagination
  - /product params: { productId }
  - /new params {page, limit} returns the newest product.
  - /check-token params{token}
  - /forgot-password params{email}

  \*\*FRONT END

  - Nav-Bar: use fetch('/me') to check if a user is logged in. Display their username if they are.
  - Home Page: Use fetch('/topProduct') with params [page, limit] (set limit to 3) and display the product names (any way you want for now)
  - Log-In Page : create a form that posts request to ('/login') to log a user in.
  - Register Page: create a form that posts request to ('/register') fields=[f_name, l_name, email, password, street, city, country].
