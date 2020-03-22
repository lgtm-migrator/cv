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
import collegeOfTourism from './img/collegeOfTourism.png';
import fitneer from './img/fitneer.svg';
import fon from './img/fon.png';
import highoutput from './img/highoutput.png';
import levi9 from './img/levi9.jpeg';
import profile from './img/profile.jpg';

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
});

function App() {
  return (
    <Grid className={css(style.container)} columns="equal">
      {/* <Grid.Row>
        <Grid.Column textAlign="center">
          <Header as="h2" icon>
            <Icon color="grey" name="laptop" />
            Mateja Petrovic
            <Header.Subheader>Full Stack Developer CV</Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row> */}
      <Grid.Row>
        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
          <Header as="h2" icon>
            <Icon color="grey" name="user" />
            Personal Info
          </Header>
        </Grid.Column>
        <Grid.Column>
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
                Colleagues describe me as passionate, trustworthy, knowledgeable
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
          <Card>
            <Image src={profile} wrapped ui={false} />
            {/* <Card.Content>
              <Card.Header>Mateja Petrovic</Card.Header>
              <Card.Meta>
                <span className="date">From Belgrade, Serbia</span>
              </Card.Meta>
              <Card.Description>Full Stack Developer</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon color="grey" name="briefcase" />3 years of experience
            </Card.Content> */}
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
          <Header as="h2" icon>
            <Icon color="grey" name="wrench" />
            Skills
          </Header>
        </Grid.Column>

        <Grid.Column>
          <List bulleted>
            <List.Item>JavaScript</List.Item>
            <List.Item>TypeScript</List.Item>
            <List.Item>React</List.Item>
            <List.Item>Angular</List.Item>
            <List.Item>VueJS</List.Item>
            <List.Item>Elm</List.Item>
            <List.Item>Redux</List.Item>
            <List.Item>RxJS</List.Item>
            <List.Item>Apollo</List.Item>
            <List.Item>Progressive Web Apps</List.Item>
            <List.Item>Sass</List.Item>
            <List.Item>CSS Flex</List.Item>
            <List.Item>CSS Grid</List.Item>
            <List.Item>Jest</List.Item>
            <List.Item>Cypress</List.Item>
            <List.Item>Enzyme</List.Item>
            <List.Item>React Testing Library</List.Item>
            <List.Item>React Native</List.Item>
            <List.Item>Material UI</List.Item>
            <List.Item>Semantic UI</List.Item>
            <List.Item>Ant Design</List.Item>
            <List.Item>Styled Components</List.Item>
            <List.Item>Semantic HTML</List.Item>
            <List.Item>UX & UI Principles</List.Item>
            <List.Item>Responsive Design</List.Item>
            <List.Item>Performance Optimization</List.Item>
            <List.Item>Google Analytics</List.Item>
            <List.Item>SEO</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <List bulleted>
            <List.Item>NodeJS</List.Item>
            <List.Item>Microservices</List.Item>
            <List.Item>RabbitMQ</List.Item>
            <List.Item>TypeORM</List.Item>
            <List.Item>GraphQL</List.Item>
            <List.Item>MongoDB</List.Item>
            <List.Item>MySQL</List.Item>
            <List.Item>MSSQL</List.Item>
            <List.Item>Redis</List.Item>
            <List.Item>Neo4j</List.Item>
            <List.Item>PostgreSQL</List.Item>
            <List.Item>Building RESTful API's</List.Item>
            <List.Item>ExpressJS</List.Item>
            <List.Item>JSON Web Token</List.Item>
            <List.Item>WebSockets</List.Item>
            <List.Item>NestJS</List.Item>
            <List.Item>Dotnet Core</List.Item>
            <List.Item>Entity Framework Core</List.Item>
            <List.Item>Linq</List.Item>
            <List.Item>Python</List.Item>
            <List.Item>Django</List.Item>
            <List.Item>F#</List.Item>
            <List.Item>Haskell</List.Item>
            <List.Item>Scala</List.Item>
            <List.Item>Firebase</List.Item>
            <List.Item>Firestore</List.Item>
            <List.Item>Google Cloud</List.Item>
            <List.Item>Regular Expressions</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <List bulleted>
            <List.Item>Functional Programming</List.Item>
            <List.Item>Object Oriented Programming</List.Item>
            <List.Item>Software Architecture</List.Item>
            <List.Item>Git</List.Item>
            <List.Item>Github</List.Item>
            <List.Item>Github Actions</List.Item>
            <List.Item>TravisCI</List.Item>
            <List.Item>Netlify</List.Item>
            <List.Item>Docker</List.Item>
            <List.Item>Vagrant</List.Item>
            <List.Item>VirtualBox</List.Item>
            <List.Item>Linux</List.Item>
            <List.Item>Bash</List.Item>
            <List.Item>Fish</List.Item>
            <List.Item>Performance Monitoring</List.Item>
            <List.Item>Visual Studio Code</List.Item>
            <List.Item>Chrome DevTools</List.Item>
            <List.Item>PhotoShop</List.Item>
            <List.Item>Illustrator</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <List bulleted>
            <List.Item>Team work</List.Item>
            <List.Item>Communication</List.Item>
            <List.Item>Leadership</List.Item>
            <List.Item>Teaching</List.Item>
            <List.Item>Planning</List.Item>
            <List.Item>Organization</List.Item>
            <List.Item>Business analysis</List.Item>
            <List.Item>Marketing</List.Item>
            <List.Item>Project Management</List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
          <Header as="h2" icon>
            <Icon color="grey" name="briefcase" />
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
            <Icon color="grey" name="book" />
            Education
          </Header>
        </Grid.Column>

        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={collegeOfTourism} />

            <Item.Content>
              <Item.Header as="a">College of Tourism</Item.Header>
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
