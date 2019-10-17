import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Mutation {
    ToggleHiddenButton: Boolean!
  }
`;

const GET_HIDDEN_BUTTON = gql`
  {
    cartHidden @client
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
    }
  }
};
