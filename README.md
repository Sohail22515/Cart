# Shopping Cart Application

This is a simple **Shopping Cart Application** built using **React.js** and **Redux** for state management. It allows users to add, remove, and adjust the quantity of items in their cart while calculating the total price, including shipping and tax.

## Features

- **Add items to cart**: Users can add items to their shopping cart.
- **Increment and decrement item quantities**: Easily increase or decrease the quantity of any product in the cart.
- **Remove items**: Remove items completely from the cart.
- **Real-time subtotal calculation**: The subtotal is updated in real-time based on the items and quantities in the cart.
- **Shipping and Tax calculation**: Fixed shipping and tax amounts are applied to the total.
- **Responsive design**: The layout adjusts to different screen sizes using **CSS** and **SCSS**.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Redux**: For managing the application's state across different components.
- **SCSS**: Used for styling the application.
- **React Icons**: Icons used in the cart for the delete button.
- **React-Redux**: For integrating Redux into the React components.

## Project Structure

The project is structured into the following components:

### Cart Component
This is the main component that renders the shopping cart. It shows a list of items and calculates the total price, shipping, and tax.

- **Cart Items**: The items in the cart are rendered with the item name, price, quantity, and an image of the product.
- **Subtotal Calculation**: The subtotal is calculated based on the price and quantity of each item.
- **Shipping and Tax**: Fixed values for shipping and tax are added to the total.

### CartItem Component
This component is responsible for rendering each item in the cart. It includes buttons to increase/decrease the quantity or remove the item entirely.

### Redux Store
This project uses **Redux** for state management. The cart items are stored in the Redux state, and actions like incrementing, decrementing, and deleting items dispatch events to update the store.

- **Actions**: Actions such as `incrementQuantity`, `decrementQuantity`, and `deleteQuantity` are used to update the Redux state.
- **Reducers**: The reducer handles the logic of updating the state when actions are dispatched.

## State Management with Redux

Redux is used in this project to manage the cart state globally. By using Redux, the cart data can be accessed and updated from any component, making the application scalable and maintainable. Here’s how Redux is used:

- **Store**: The global state store keeps track of cart items.
- **Actions**: Actions are dispatched when the user interacts with the cart (e.g., increment, decrement, delete).
- **Reducers**: Reducers handle the logic of how the state should change based on actions.

### Sample State Structure
```js
const initialState = {
  cart: {
    cartItems: [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 1,
        imgSrc: 'url-to-image'
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 2,
        imgSrc: 'url-to-image'
      }
    ]
  }
};
```
## Getting Started

**To get started with this project, follow these steps:**

-**Clone the repository:**
```bash
git clone https://github.com/yourusername/shopping-cart-app.git
cd shopping-cart-app
```

-**Install dependencies:**
```bash
npm install
```
-**Run the Application:**
```bash
npm start
```
The application should now be running on http://localhost:3000.



