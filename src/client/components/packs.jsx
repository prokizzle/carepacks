import React, { PureComponent } from "react";
import {
  CardDeck,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

import contents from "./pack.contents";

export default class Packs extends PureComponent {
  render() {
    return (
      <CardDeck>
        {contents.cards.map(contentItem => (
          <Card key={contentItem.id} className="shadow">
            <CardBody>
              <CardTitle className="my-2">{contentItem.title}</CardTitle>
              <CardSubtitle className="my-2">{contentItem.subtitle}</CardSubtitle>
              <CardText className="my-2">{contentItem.description}</CardText>
              <Button color="secondary" className="mt-4">View more</Button>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    );
  }
}
