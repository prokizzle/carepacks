import React, { PureComponent } from "react";
import { Container, Row, Col } from "reactstrap";
import Packs from "./packs";

class Home extends PureComponent {
  render() {
    return (
      <div className="bg-warning w-100 h-100">
        <Container>
          <Row className="bg-white my-4">
            <h1 className="p-4">Buy a carepack for a homeless person!</h1>
          </Row>
          <Row className="bg-white my-4 py-5">
            <Col md="4">Image</Col>
            <Col md="8">
              <p className="h5">
                Homeless people need help! Even those who aren't homeless are
                out there trying to get by, and it's not easy! Help out!
              </p>
            </Col>
          </Row>
          <Row>
            <Packs />
      </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
