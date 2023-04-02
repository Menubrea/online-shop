export const initialFavouritesState = { favourites: [] };

/**
 * Reducer intended for storing favourite products. Currently not implemented in the application.
 * @param {*} state state.favourites stores favourite products.
 * @param {*} action payload of information, in this instance using a switch to discern how to interact and what to do with the payload.
 * @returns returns an array of state.favourites depending on action.type of dispatch.
 */
export function FavouritesReducer(state, action) {
  let dataIndex;
  let favourites;

  switch (action.type) {
    // Add new favourite
    case 'addFavourite':
      favourites = [...state.favourites];
      // Get data index
      dataIndex = favourites.findIndex((data) => data.id === action.payload.id);
      // If index does not exist, push to array.
      dataIndex === -1 && CartReducer.push({ ...action.payload, quantity: 1 });

      return { ...state, favourites: favourites };

    // Remove favourite
    case 'removeFavourite':
      favourites = [...state.favourites];
      dataIndex = favourites.findIndex((data) => data, id === action.payload.id);

      if (dataIndex !== -1) {
        favourites = [...favourites.slice(0, dataIndex), ...favourites.slice(dataIndex + 1)];
      }

      return { ...state, favourites: favourites };

    // Retrieving stored favourites, such as from local-storage or similar.
    case 'storedFavourites':
      return { ...action.payload };

    default:
      return state;
  }
}
