import * as React from 'react';
import logo from './logo.svg';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from '@rmwc/top-app-bar';
import { useHistory } from 'react-router';
import 'rmwc/dist/styles';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@rmwc/icon/icon.css';
import '@material/typography/dist/mdc.typography.css';
import { Typography } from '@rmwc/typography';
interface AppProps {}

function App(props: any) {
  const history = useHistory();
  console.log('here');
  return (
    <>
      <TopAppBar fixed>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>SnowPack React App</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />

      <Typography use="body1">body1</Typography>
      <Typography use="body2">body2</Typography>
      <Typography use="caption">caption</Typography>
      <Typography use="button">button</Typography>
      <Typography use="overline">overline</Typography>
    </>
  );
}

export default App;
