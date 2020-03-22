import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Header, Icon } from 'semantic-ui-react';

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
});

function App() {
  return (
    <Grid className={css(style.container)}>
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
