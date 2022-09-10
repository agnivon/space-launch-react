import { Container, Spinner } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import * as queries from '../queries';

import LaunchCard from '../components/LaunchCard';

const Home = () => {
    const { loading, error, data } = useQuery(queries.GET_ALL_LAUNCHES);

    if(loading) {
        return (<div className="text-center"><Spinner animation="border" /></div>);
    } 

    if(error) {
        return (<p className="text-danger">Error</p>);
    }

    const launches = data.allLaunches.map((launch, idx) => {
        return (
            <LaunchCard launch={launch} key={idx}/>
        );
    })

    return (
        <Container>
            <h1 className="display-4">Launches</h1>
            <Container fluid className="my-3">
                Green = Success
                <br />
                Red = Fail
            </Container>
            <Container fluid className="my-3">
                {launches}
            </Container>
        </Container>
    );
}

export default Home;