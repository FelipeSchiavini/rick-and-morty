import { gql } from '@apollo/client';

export const GetCharacterInfo = gql`
  query GetCharacterInfo($page: Int!, $gender: String){
    characters(page: $page, filter: { gender: $gender })  {
      info {
        count
      }
      results {
        id
        name
        status
        gender
        image
        species
        type
        episode {
          name
        }
      }
    }
  }
`
