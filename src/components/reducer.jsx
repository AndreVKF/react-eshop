// define all the applications level states and define actions to make
// the changes to the state

export const initialState = {
  basket: [],
};

// selector

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      console.log(state);
      const index = state.basket.findIndex((item) => {
        console.log({ item, action });
        return item.id === action.id;
      });

      console.log(index);

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        throw new Error(`Index not found ${action.id}`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return;
  }
};

export default reducer;
