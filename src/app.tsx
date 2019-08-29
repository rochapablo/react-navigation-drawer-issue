import React from 'react';
import { NavigationService } from './services/navigation';
import AppContainer from './navigators';

export default class App extends React.PureComponent<any, any> {
  public render() {
    return (
      <AppContainer ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} />
    );
  }
}
