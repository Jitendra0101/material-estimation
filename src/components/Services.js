import './cssfiles/Services.css'
import Modifednav from './Modifednav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo2 from './estimate1.png'
import Logo3 from './door1.png'
import Logo4 from './plumbing1.png'
import Logo5 from './electrical1.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Estimate from './Estimate';

function Mainpagebody() {
  return (
    <div>
    <Modifednav />
    <div className='outerdivservices'>
    <Row xs={1} md={2} className="g-3">

    <Col>
    <Card style={{ width: '30rem' }} className='card1' text="light">
      <img className="image1" src={Logo2} />
      <Card.Body>
        <Card.Title>Estimate</Card.Title>
        <Card.Text>
          Get estimate for materials,house cost and many more various civil services
        </Card.Text>
        <Button variant="secondary" href='./Estimate'>Calculate</Button>
      </Card.Body>
    </Card>
    </Col>

   <Col>
    <Card style={{ width: '30rem' }} className='card1' text="light">
      <img className="image1" src={Logo3} alt="Logo" />
      <Card.Body>
        <Card.Title>Doors And Windows</Card.Title>
        <Card.Text>
        All openings in a building ranging from windows to doors along with their frames.
        </Card.Text>
        <Button variant="secondary" >Calculate</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card  style={{ width: '30rem' }} className='card1' text="light">
      <img className="image1" src={Logo4} alt="Logo" />
      <Card.Body>
        <Card.Title>Plumbing</Card.Title>
        <Card.Text>
        Services involving water facets, plumbing and pipelines.
        </Card.Text>
        <Button variant="secondary">Calculate</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '30rem' }} className='card1' text="light">
      <img className="image1" src={Logo5} alt="Logo" />
      <Card.Body>
        <Card.Title>Electricals</Card.Title>
        <Card.Text>
        Service regarding the electricals of the construction phase.
        </Card.Text>
        <Button variant="secondary">Calculate</Button>
      </Card.Body>
    </Card>
    </Col>

    </Row>

    </div>
    </div>
  );
}

export default Mainpagebody;