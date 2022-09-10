import { Container, Spinner, ListGroup, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getLaunchesQuery } from '../queries';

const Launch = (props) => {

    const params = useParams();
    const { loading, error, data } = useQuery(getLaunchesQuery(params.flightNumber));

    if (loading) {
        return (<div className="text-center"><Spinner animation="border" /></div>);
    }

    if (error) {
        return (<p className="text-danger">Error</p>);
    }

    return (
        <Container>
            <h1 className="display-4">Mission: {data.launch.mission_name}</h1>
            <Container fluid className="my-3">
                <h2>Launch Details</h2>
                <ListGroup>
                    <ListGroup.Item>Flight Number: {data.launch.flight_number}</ListGroup.Item>
                    <ListGroup.Item>Launch Year: {data.launch.launch_year}</ListGroup.Item>
                    <ListGroup.Item>Launch Success: {data.launch.launch_success ? 'Yes' : 'No'}</ListGroup.Item>
                </ListGroup>
            </Container>
            <Container fluid className="my-3">
                <h2>Rocket Details</h2>
                <ListGroup>
                    <ListGroup.Item>Rocket ID: {data.launch.rocket.rocket_id}</ListGroup.Item>
                    <ListGroup.Item>Rocket Name: {data.launch.rocket.rocket_name}</ListGroup.Item>
                    <ListGroup.Item>Rocket Type: {data.launch.rocket.rocket_type}</ListGroup.Item>
                </ListGroup>
            </Container>
            <Container fluid>
                <Button as={Link} to="/" variant="primary">Back</Button>
            </Container>
        </Container>
    )
}

export default Launch;