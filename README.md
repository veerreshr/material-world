
# Material World

Its a simple e-commerce site with two login types i.e., admin and normal user. Where an admin can add or remove a product or user or admin and also be able to mark the order to be delivered. This website uses PayPal checkout integration for a seamless transaction across countries.


## Badges



[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

![Dependencies](https://img.shields.io/david/veerreshr/material-world)

  
## Screenshots

![App Screenshot](https://res.cloudinary.com/dcgefz04y/image/upload/v1617304164/projects/materialworld_utg88m.png)

  
## Features

- Admin login.
- User login.
- Stripe Payment.
- Cart and Checkout Features.
- User reviews for Products.
- Ability to Add/Edit users, products, orders by Admin.

  
## Tech Stack

**Client:** React, Redux, Bootstrap

**Server:** Node, Express, MongoDB

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET`

`MONGO_URI`

`PAYPAL_CLIENT_ID`


  
## Run Locally

Clone the project

```bash
  git clone https://github.com/veerreshr/material-world.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Install Client dependencies

```bash
  cd frontend
  npm install
```

Start the both frontend and backend using nodemon from project directory

```bash
  cd .. 
  #make sure you are in project directory instead of frontend directory.
  npm run dev
```

  
## Feedback

If you have any feedback, please reach out to me at veerreshr@gmail.com

  
