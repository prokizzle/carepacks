/*
 * This is a demo component the Eletrode app generator included
 * to show using Milligram CSS lib and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, NavbarBrand, Row, Col } from "reactstrap";

//

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sectionClasses = "bg-white border shadow p-3 my-3";
    return (
      <div className="bg-warning">
        <Container >
          <h2 className="text-shadow text-white">Why Carepacks?</h2>

          <div className={sectionClasses}>
            <p>
              Every day I walk through downtown to work or to the gym, I see
              people begging for a couple of dollars. Its my general belief that
              they actually need the money to eat, or to maintain a certain
              quality of life. Every time that Im between contracts, I cant help
              but be grateful that despite my lack of employment, I still have a
              roof over my head, heat in the winter, A/C in the summer, and food
              in the fridge. Thats not a universal privledge.
            </p>
          </div>

          <div className={sectionClasses}>
            <p>
              So what can I do to help? I can make care packs for the people
              that need them. For every donation I receive, I will source the
              contents from Amazon, pack them into a bag, and hand them out to
              people who need them who are humbling themselves on the street to
              try to make ends meet.
            </p>
          </div>

          <div className={sectionClasses}>
            <p>
              This website offers three options:
              <ol>
                <li>You can donate carepacks for me to distribute</li>
                <li>You can purchase carepacks to distribute yourself</li>
                <li>
                  You can have all the carepack contents added to your Amazon
                  cart so that you can make and distribute your own carepacks
                </li>
              </ol>
            </p>
          </div>

          <div className={`${sectionClasses}mb-4`}>
            <p>
              I will not take a profit from these carepacks. I will also offer
              the option for recurring donations via Stripe, so that you may
              continue to give every month.
            </p>
          </div>
        </Container>
        <Container className="bg-dark mt-3" fluid>
          <div className="p-5">
            <Row className="text-light">
              <Col>Footer Content 2018</Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

About.propTypes = {};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(About);
