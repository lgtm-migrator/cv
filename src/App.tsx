import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Grid, Header, Icon, Image } from 'semantic-ui-react';
import profile from './img/profile.jpg';

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    margin: 'auto',
  },
});

function App() {
  return (
    <Grid className={css(style.container)}>
      {/* <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h2" icon>
            <Icon name="laptop" />
            Mateja Petrovic
            <Header.Subheader>Full Stack Developer CV</Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row> */}
      <Grid.Row>
        <Card className={css(style.card)}>
          <Image src={profile} wrapped ui={false} />
          <Card.Content>
            <Card.Header>Mateja Petrovic</Card.Header>
            <Card.Meta>
              <span className="date">From Belgrade, Serbia</span>
            </Card.Meta>
            <Card.Description>Full Stack Developer</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="briefcase" />3 years of experience
          </Card.Content>
        </Card>
      </Grid.Row>
    </Grid>
  );
}

export default App;
