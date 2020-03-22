import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Header, Icon } from 'semantic-ui-react';

function App() {
  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Header as="h2" icon>
          <Icon name="settings" />
          Account Settings
          <Header.Subheader>
            Manage your account settings and set e-mail preferences.
          </Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid>
  );
}

export default App;
