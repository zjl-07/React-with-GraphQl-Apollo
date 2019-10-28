import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Header from "./header.component";

const GET_HIDDEN_BUTTON = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => (
  <Query query={GET_HIDDEN_BUTTON}>
    {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
  </Query>
);

export default HeaderContainer;
