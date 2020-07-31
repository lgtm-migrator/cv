import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { Box, Flex } from 'rebass';
import 'semantic-ui-css/semantic.min.css';
import {
  Card,
  Divider,
  Header,
  Icon,
  Image,
  Item,
  List,
  Step,
} from 'semantic-ui-react';
import collegeOfTourism from './img/collegeOfTourism.png';
import fitneer from './img/fitneer.svg';
import fon from './img/fon.png';
import highoutput from './img/highoutput.png';
import ideaSprout from './img/idea-sprout.png';
import levi9 from './img/levi9.jpeg';
import njamNjam from './img/njam-njam.png';
import profile from './img/profile.jpg';
import videoStoryteller from './img/video-storyteller.png';

const style = StyleSheet.create({
  careerItem: {
    display: 'flex',
  },
  careerItemContent: {
    minWidth: 150,
    marginRight: 20,
    flex: 'none',
  },
});

function App() {
  return (
    <Box p={3}>
      <Flex>
        <Flex
          flexDirection="column"
          minWidth={150}
          mr={3}
          justifyContent="center"
          alignItems="center"
        >
          <Header as="h2" icon>
            <Icon color="grey" name="user" />
            Personal Info
          </Header>
        </Flex>
        <Box flex={1} mr={3}>
          <Flex>
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
          </Flex>
          <Divider />
          <Flex flexDirection="column">
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
          </Flex>
        </Box>
        <Box>
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
        </Box>
      </Flex>
      <Divider />
      <Flex>
        <Flex
          flexDirection="column"
          minWidth={150}
          mr={3}
          justifyContent="center"
          alignItems="center"
        >
          <Header as="h2" icon>
            <Icon color="grey" name="wrench" />
            Skills
          </Header>
        </Flex>

        <Box>
          <Box mb={3}>
            <Header>Featured</Header>
            <List horizontal divided>
              <List.Item>TypeScript</List.Item>
              <List.Item>React</List.Item>
              <List.Item>Redux</List.Item>
              <List.Item>NodeJS</List.Item>
              <List.Item>Functional Programming</List.Item>
            </List>
          </Box>

          <Flex>
            <Box mr={60}>
              <Header>Frontend</Header>
              <List bulleted>
                <List.Item>JavaScript</List.Item>
                <List.Item>Angular</List.Item>
                <List.Item>VueJS</List.Item>
                <List.Item>RxJS</List.Item>
                <List.Item>Apollo</List.Item>
                <List.Item>NPM</List.Item>
                <List.Item>Yarn</List.Item>
                <List.Item>Progressive Web Apps</List.Item>
                <List.Item>Sass</List.Item>
                <List.Item>React Router</List.Item>
                <List.Item>Jest</List.Item>
                <List.Item>Cypress</List.Item>
                <List.Item>React Native</List.Item>
                <List.Item>React Hooks</List.Item>
                <List.Item>Material UI</List.Item>
                <List.Item>Webpack</List.Item>
                <List.Item>Babel</List.Item>
                <List.Item>PayPal</List.Item>
                <List.Item>Stripe</List.Item>
                <List.Item>Responsive Design</List.Item>
                <List.Item>SEO</List.Item>
                <List.Item>Building reusable components</List.Item>
              </List>
            </Box>
            <Box mr={60}>
              <Header>Backend</Header>
              <List bulleted>
                <List.Item>Microservices</List.Item>
                <List.Item>RabbitMQ</List.Item>
                <List.Item>TypeORM</List.Item>
                <List.Item>GraphQL</List.Item>
                <List.Item>MongoDB</List.Item>
                <List.Item>MySQL</List.Item>
                <List.Item>MSSQL</List.Item>
                <List.Item>Redis</List.Item>
                <List.Item>PostgreSQL</List.Item>
                <List.Item>Building RESTful API's</List.Item>
                <List.Item>ExpressJS</List.Item>
                <List.Item>OAuth Authentication</List.Item>
                <List.Item>JSON Web Token</List.Item>
                <List.Item>WebSockets</List.Item>
                <List.Item>NestJS</List.Item>
                <List.Item>Firebase</List.Item>
                <List.Item>Google Cloud</List.Item>
                <List.Item>Next.js</List.Item>
                <List.Item>Redis</List.Item>
              </List>
            </Box>
            <Box mr={60}>
              <Header>Other</Header>
              <List bulleted>
                <List.Item>Regular Expressions</List.Item>
                <List.Item>Object Oriented Programming</List.Item>
                <List.Item>Software Architecture</List.Item>
                <List.Item>Git</List.Item>
                <List.Item>Github</List.Item>
                <List.Item>Github Actions</List.Item>
                <List.Item>Docker</List.Item>
                <List.Item>Vagrant</List.Item>
                <List.Item>VirtualBox</List.Item>
                <List.Item>Linux</List.Item>
                <List.Item>Bash</List.Item>
                <List.Item>Performance Monitoring</List.Item>
                <List.Item>Visual Studio Code</List.Item>
                <List.Item>Chrome DevTools</List.Item>
              </List>
            </Box>
            <Box mr={60}>
              <Header>Interpersonal & Business</Header>
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
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex mt={30}>
        <Flex
          flexDirection="column"
          minWidth={150}
          mr={2}
          justifyContent="center"
          alignItems="center"
        >
          <Header as="h2" icon>
            <Icon color="grey" name="briefcase" />
            Career
          </Header>
        </Flex>

        <Item.Group>
          <Item className={css(style.careerItem)}>
            <Box mr={4}>
              <Item.Image size="tiny" src={levi9} />
            </Box>

            <Item.Content className={css(style.careerItemContent)}>
              <Item.Header as="a">Levi9</Item.Header>
              <Item.Meta>Technology Services</Item.Meta>
              <Item.Description>JavaScript Developer</Item.Description>
              <Item.Extra>2019 Feb - 2020 June</Item.Extra>
            </Item.Content>

            <Step.Group>
              <Step>
                <Step.Content>
                  <Step.Title>Angular App</Step.Title>
                  <Step.Description>Fin-tech app</Step.Description>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Step.Title>React App</Step.Title>
                  <Step.Description>Website builder</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </Item>
          <br />
          <Item className={css(style.careerItem)}>
            <Box mr={4}>
              <Item.Image size="tiny" src={highoutput} />
            </Box>

            <Item.Content className={css(style.careerItemContent)}>
              <Item.Header as="a">HighOutput</Item.Header>
              <Item.Meta>Ventures</Item.Meta>
              <Item.Description>JavaScript Developer</Item.Description>
              <Item.Extra>2018 Oct - 2019 Feb</Item.Extra>
            </Item.Content>

            <Step.Group>
              <Step>
                <Step.Content>
                  <Step.Title>
                    <a href="https://app.reitscreener.com/" target="__blank">
                      Reitscreener
                    </a>
                  </Step.Title>
                  <Step.Description>
                    Building on top of an existing React app
                  </Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </Item>
          <br />
          <Item className={css(style.careerItem)}>
            <Box mr={4}>
              <Item.Image size="tiny" src={fitneer} />
            </Box>

            <Item.Content className={css(style.careerItemContent)}>
              <Item.Header as="a">Fitneer</Item.Header>
              <Item.Meta>Find your fitness peer</Item.Meta>
              <Item.Description>FullStack Developer</Item.Description>
              <Item.Extra>2017 Jul - 2018 Oct</Item.Extra>
            </Item.Content>

            <Step.Group>
              <Step>
                <Step.Content>
                  <Step.Title>
                    <a
                      href="https://officialfitneer.firebaseapp.com/"
                      target="__blank"
                    >
                      Fitneer
                    </a>
                  </Step.Title>
                  <Step.Description>Angular and Firebase PWA</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </Item>
        </Item.Group>
      </Flex>
      <Divider />
      <Flex>
        <Flex
          flexDirection="column"
          minWidth={150}
          mr={2}
          justifyContent="center"
          alignItems="center"
        >
          <Header as="h2" icon>
            <Icon color="grey" name="file code" />
            Projects
          </Header>
        </Flex>

        <Flex flexDirection="column">
          <Flex flexDirection="column" alignItems="center">
            <img src={ideaSprout} alt="Idea Sprout" height={150} />
            <Box mt={3} mr={3} style={{ textAlign: 'center' }}>
              <a href="https://idea-sprout.web.app">Idea Sprout</a> Validate
              your startup idea and gain a following
            </Box>
          </Flex>
          <Divider />
          <Flex flexDirection="column" alignItems="center">
            <img src={videoStoryteller} alt="Video Storyteller" height={150} />
            <Box mt={3} mr={3} style={{ textAlign: 'center' }}>
              <a href="https://video-styteller-dev.web.app">
                Video Storyteller
              </a>{' '}
              is React and Firebase powered whiteboard video creator
            </Box>
          </Flex>
          <Divider />
          <Flex flexDirection="column" alignItems="center">
            <img src={njamNjam} alt="Video Storyteller" height={150} />
            <Box mt={3} mr={3} style={{ textAlign: 'center' }}>
              <a href="https://njam-njam.web.app">Njam Njam</a> is React and
              GraphQL powered app for group food ordering
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt={100} pt={40}>
        <Flex
          flexDirection="column"
          minWidth={150}
          mr={2}
          justifyContent="center"
          alignItems="center"
        >
          <Header as="h2" icon>
            <Icon color="grey" name="book" />
            Education
          </Header>
        </Flex>

        <Item.Group>
          <Item>
            <Box mr={4}>
              <Item.Image size="tiny" src={collegeOfTourism} />
            </Box>

            <Item.Content>
              <Item.Header as="a">College of Tourism</Item.Header>
              <Item.Meta>In Belgrade</Item.Meta>
              <Item.Description>Economist</Item.Description>
              <Item.Extra>2014 - 2017</Item.Extra>
            </Item.Content>
          </Item>
          <br />
          <Item>
            <Box mr={4}>
              <Item.Image size="tiny" src={fon} />
            </Box>

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
      </Flex>
    </Box>
  );
}

export default App;
