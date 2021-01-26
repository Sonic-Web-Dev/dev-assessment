import { gql } from '@apollo/client';

export default gql`
  query rocketQuery($id: ID!) {
    rocket(id: $id) {
      id
      name
    }
  }
`;
