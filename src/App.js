import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { PersonSquare, PlusLg, Search } from 'react-bootstrap-icons';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="my-4">
            <span className="f-35">Americana Injuiry Clinic <PlusLg color="green" size={45} /></span>
        </Row>
        <Row  className="my-4 px-2">
          <div className="p-4 bg-white b-radius-10">
            <h4>Patient Information</h4>
            <div className="py-2">
              <h6 className="pb-2">Name</h6>
              <div class="col-6 has-search position-relative">
                <input type="text" class="form-control" placeholder="Search" />
                <Search className="form-control-search-icon" size={20} />
              </div>
            </div>
            <div className="py-2">
              <h6 className="pb-2">Name</h6>
              <div class="col-6 has-search position-relative">
                <input type="text" class="form-control" placeholder="Search" />
                <Search className="form-control-search-icon" size={20} />
              </div>
            </div>
            <div className="py-2">
              <h6 className="pb-2">Name</h6>
              <div class="col-6 has-search position-relative">
                <input type="text" class="form-control" placeholder="Search" />
                <Search className="form-control-search-icon" size={20} />
              </div>
            </div>
          </div>
        </Row>
        <Row className="my-4">
          <Col xs={3} className="p-2">
            <Card className="b-radius-10 human-card">
              <Card.Body>
                <Row>
                <Col xs={3}>
                  <PersonSquare color="green" size={45} />
                </Col>
                <Col xs={4}>
                  <h6>Head</h6>
                  <h6 className="text-green">206</h6>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} className="p-2">
          <Card className="b-radius-10 human-card">
            <Card.Body>
              <Row>
              <Col xs={3}>
                <PersonSquare color="green" size={45} />
              </Col>
              <Col xs={4}>
                <h6>Arms</h6>
                <h6 className="text-green">104</h6>
              </Col>
              </Row>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={3} className="p-2">
          <Card className="b-radius-10 human-card">
            <Card.Body>
              <Row>
              <Col xs={3}>
                <PersonSquare color="green" size={45} />
              </Col>
              <Col xs={4}>
                <h6>Hands</h6>
                <h6 className="text-green">24</h6>
              </Col>
              </Row>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={3} className="p-2">
          <Card className="b-radius-10 human-card">
            <Card.Body>
              <Row>
              <Col xs={3}>
                <PersonSquare color="green" size={50} />
              </Col>
              <Col xs={4}>
                <h6>Legs</h6>
                <h6 className="text-green">$12,174</h6>
              </Col>
              </Row>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
