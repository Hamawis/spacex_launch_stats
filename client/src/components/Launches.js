import React, { Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name,
            launch_date_local
            launch_success
        }
    }
`;
// The cache automatically adds __typename fields to all outgoing queries, removing the need to add them manually.
function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <h1>Loading...</h1>
    if (error) {
        console.log(JSON.stringify(error));
        return <h1>{error.message}</h1>
    }
    return (
        <Fragment>
            <h1 className="display-4 my-3">Launches</h1>
                <Fragment>
                {data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch}/>
                ))}
            </Fragment>
        </Fragment>
    )
}

export default Launches
