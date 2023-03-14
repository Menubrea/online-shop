export const initialState = { cart: [], total: 0 };

export function CartReducer(state, action) {
  let dataIndex;
  let newTotal;
  let cart;

  switch (action.type) {
    // Adding a data
    case 'addProduct':
      // Create a new cart so we don't mutate our state
      cart = [...state.cart];
      // Get the data index
      dataIndex = cart.findIndex((data) => data.id === action.payload.id);
      if (dataIndex === -1) {
        // If dataIndex is -1, it doesn't exist so we add it
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        // The data does exist so we increase the quantity
        // We do not want to mutate quantity so we are creating a new array with
        // quantity incremented.
        cart = [...cart.slice(0, dataIndex), { ...cart[dataIndex], quantity: cart[dataIndex].quantity + 1 }, ...cart.slice(dataIndex + 1)];
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, data) => {
        currentTotal += data.discountedPrice * data.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    // Removing data
    case 'removeProduct':
      cart = [...state.cart];
      // Get the data index
      dataIndex = cart.findIndex((data) => data.id === action.payload.id);
      // If the data index is not -1 then it exists
      if (dataIndex !== -1) {
        if (cart[dataIndex].quantity > 1) {
          // Remove 1 from quantity is quantity is higher than 1
          // We do not want to mutate cart so we recreate it
          cart = [
            ...cart.slice(0, dataIndex),
            {
              ...cart[dataIndex],
              quantity: cart[dataIndex].quantity - 1,
            },
            ...cart.slice(dataIndex + 1),
          ];
        } else {
          // Remove the item entirely if quantity is going to be 0
          cart = [...cart.slice(0, dataIndex), ...cart.slice(dataIndex + 1)];
        }
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, data) => {
        currentTotal += data.discountedPrice * data.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    // Clearing a cart
    case 'clearCart':
      return { cart: [], total: 0 };

    // Fetch stored cart from local storage.
    case 'storedCart':
      return { ...action.payload };

    default:
      return state;
  }
}
