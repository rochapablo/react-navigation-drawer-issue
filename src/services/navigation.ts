import { NavigationActions } from 'react-navigation';

let navigator: any;

export class NavigationService {
  public static setTopLevelNavigator(navigatorRef: any) {
    navigator = navigatorRef;
  }

  public static navigate(key: string, routeName: string, params: any) {
    navigator.dispatch(
      NavigationActions.navigate({
        key,
        params,
        routeName,
      }),
    );
  }
}
