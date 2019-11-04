import React from "react";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";
import CartDropdown from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleHiddenButton {
    toggleHiddenButton @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleHiddenButton => (
      <Query query={GET_CART_ITEMS}>
        {({ data: { cartItems } }) => (
          <CartDropdown
            cartItems={cartItems}
            toggleCartHidden={toggleHiddenButton}
          />
        )}
      </Query>
    )}
  </Mutation>
);

export default CartDropdownContainer;
