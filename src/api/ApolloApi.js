import { gql } from '@apollo/client';

const GET_PAISES = gql`
  query {
    countries {
      code
      name
      continent {
        name
      }
      capital
      currency
      languages {
        code
        name
      }
      states {
        name
      }
    }
  }
`;

export default GET_PAISES;