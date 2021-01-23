import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Segment,
  Header,
  Icon,
  Modal,
  List,
  Image,
} from "semantic-ui-react";

export default function Contact() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Segment placeholder>
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
          trigger={<Button secondary>Confirm This App</Button>}
        >
          <Header icon>
            <Icon name="archive" />
            Confirm this app if routing successfully
          </Header>
          <Modal.Content>
            <p>
              Your inbox is getting full, would you like us to enable automatic
              archiving of old messages?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" inverted onClick={() => setOpen(false)}>
              <Icon name="remove" /> No
            </Button>
            <Button color="green" inverted onClick={() => setOpen(false)}>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
        <List>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
            />
            <List.Content>
              <Link to="/card/rachel">Rachel</Link>
              <List.Description>
                Last seen watching{" "}
                  <b>Arrested Development</b>{" "}
                just now.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
            />
            <List.Content>
              <Link to="/card/lindsay" >Lindsay</Link>
              <List.Description>
                Last seen watching{" "}
                  <b>Bob's Burgers</b>{" "}
                10 hours ago.
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </div>
  );
}
