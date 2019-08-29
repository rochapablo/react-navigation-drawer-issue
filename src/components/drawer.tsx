import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface IProps {
  navigation?: NavigationScreenProp<any, any>;
}

export class Drawer extends React.Component<IProps, {}> {
  public render() {
    return (
      <View />
    );
  }
}