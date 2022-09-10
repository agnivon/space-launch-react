import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LaunchCard = (props) => {
    return (
        <Card className="my-3 launch-card">
            <Card.Body>
                <Card.Title className="fs-2">
                    Mission: {props.launch.mission_name}
                    <Button as={Link} to={`/launch/${props.launch.flight_number}`} variant="primary" className="float-end">Launch Details</Button>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Date: {props.launch.launch_date_local}
                </Card.Subtitle>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
            </Card.Body>
        </Card>
    );
}

export default LaunchCard;