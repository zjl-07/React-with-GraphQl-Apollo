import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleHiddenButton {
    toggleHiddenButton @client
  }
`;

const CartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleHiddenButton => <CartIcon toggleCartHidden={toggleHiddenButton} />}
  </Mutation>
);

export default CartIconContainer;
