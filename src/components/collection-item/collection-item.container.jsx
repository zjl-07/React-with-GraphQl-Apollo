import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionItem from "./collection-item.component";

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: item!) {
    addCartItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = props => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {addCartItemToCart => (
      <CollectionItem
        {...props}
        addItem={item => addCartItemToCart({ variables: { item } })}
      />
    )}
  </Mutation>
);

export default CollectionItemContainer;
