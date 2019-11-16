import { gql } from "apollo-boost";
import { addItemToCart, getCartItemCount } from "./cart.utils";

export const typeDefs = gql`
  extend type Item {
    quantity: int!
  }

  extend type Mutation {
    ToggleHiddenButton: Boolean!
  }
`;

const GET_HIDDEN_BUTTON = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_CART_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleHiddenButton: (_root, _arg, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_HIDDEN_BUTTON
      });

      cache.writeQuery({
        query: GET_HIDDEN_BUTTON,
        data: { cartHidden: !cartHidden }
      });

      return !cartHidden;
    },

    addCartItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      });

      const newCartItems = addItemToCart(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEM_COUNT,
        data: { itemCount: getCartItemCount(newCartItems) }
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems }
      });

      return newCartItems;
    }
  }
};
