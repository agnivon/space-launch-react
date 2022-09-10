import { gql } from '@apollo/client';

export const getLaunchesQuery = (flightNumber) => {
    return gql`
    query Query {
       launch(flight_number : ${flightNumber}) {
           flight_number
           mission_name
           launch_year
           launch_success
           launch_date_local
           rocket {
                rocket_id
                rocket_name
                rocket_type 
           }
       }
    }
   `;
}

export const GET_ALL_LAUNCHES = gql`
query Query{
    allLaunches {
        flight_number
        mission_name
        launch_date_local
    }
  }
`;