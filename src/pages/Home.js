import { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    render() {
        return (
            <Jumbotron>
                <h1 className="display-1">Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}

export default Home;