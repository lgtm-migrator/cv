import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  List,
} from 'semantic-ui-react';
import collageOfTourism from './img/collageOfTourism.png';
import fitneer from './img/fitneer.svg';
import fon from './img/fon.png';
import highoutput from './img/highoutput.png';
import levi9 from './img/levi9.jpeg';
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
    <Grid className={css(style.container)} columns="equal">
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
        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
          <Header as="h2" icon>
            <Icon name="user" />
            Personal Info
          </Header>
        </Grid.Column>
        <Grid.Column width={10}>
          <Grid.Row>
            <Header>
              About
              <br />
              <br />
              <Header.Subheader>
                I love Functional Programming, Linux, OSS, the Web and Data
                Science.
              </Header.Subheader>
              <Header.Subheader>
                Colleagues perceive me as passionate, trustworthy, knowledgeable
                and as a good teacher.
              </Header.Subheader>
            </Header>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Header>Links</Header>
            <List>
              <List.Item>
                <List.Icon name="user" />
                <List.Content>Mateja Petrovic</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>Belgrade, Serbia</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:mateja176@gmail.com">mateja176@gmail.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a href="https://github.com/mateja176">Github Profile</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkedin" />
                <List.Content>
                  <a href="https://linkedin.com/in/mateja-petrović-a5a07ab2">
                    LinkedIn Profile
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="bolt" />
                <List.Content>
                  <a href="https://stackblitz.com/@mateja176">
                    Stackblitz Profile
                  </a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="pencil" />
                <List.Content>
                  <a href="https://codepen.io/mateja176">CodePen Profile</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
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
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
          <Header as="h2" icon>
            <Icon name="wrench" />
            Skills
          </Header>
        </Grid.Column>

        <Item.Group></Item.Group>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
          <Header as="h2" icon>
            <Icon name="briefcase" />
            Career
          </Header>
        </Grid.Column>

        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={levi9} />

            <Item.Content>
              <Item.Header as="a">Levi9</Item.Header>
              <Item.Meta>Technology Services</Item.Meta>
              <Item.Description>JavaScript Developer</Item.Description>
              <Item.Extra>2019 February - Preset</Item.Extra>
            </Item.Content>
          </Item>
          <br />
          <Item>
            <Item.Image size="tiny" src={highoutput} />

            <Item.Content>
              <Item.Header as="a">HighOutput</Item.Header>
              <Item.Meta>Ventures</Item.Meta>
              <Item.Description>JavaScript Developer</Item.Description>
              <Item.Extra>2018 October - 2019 February</Item.Extra>
            </Item.Content>
          </Item>
          <br />
          <Item>
            <Item.Image size="tiny" src={fitneer} />

            <Item.Content>
              <Item.Header as="a">Fitneer</Item.Header>
              <Item.Meta>Find your fitness peer</Item.Meta>
              <Item.Description>FullStack Developer</Item.Description>
              <Item.Extra>2017 July - 2018 October</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
          <Header as="h2" icon>
            <Icon name="book" />
            Education
          </Header>
        </Grid.Column>

        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={collageOfTourism} />

            <Item.Content>
              <Item.Header as="a">Collage of Tourism</Item.Header>
              <Item.Meta>In Belgrade</Item.Meta>
              <Item.Description>Economist</Item.Description>
              <Item.Extra>2014 - 2017</Item.Extra>
            </Item.Content>
          </Item>
          <br />
          <Item>
            <Item.Image size="tiny" src={fon} />

            <Item.Content>
              <Item.Header as="a">
                Faculty of Organizational Sciences
              </Item.Header>
              <Item.Meta>In Belgrade</Item.Meta>
              <Item.Description>Manager</Item.Description>
              <Item.Extra>2014 - 2016</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Row>
    </Grid>
  );
}

export default App;
