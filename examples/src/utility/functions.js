import { writeInAFile} from './utils';

const returnFunctions = (componentType) => {
  switch (componentType) {
    case 'input':
      return ` onChangeText(event) {
                this.setState({ value: event });
              }`;
    case 'button':
      return `  navigateOnPress = (navigation) => {
                this.props.onPress && this.props.onPress.navigation
                ?     navigation.navigate(this.props.onPress.screenName)
                : this.props.onPress();
              }`;
  }
};

export const writeFunctions = (path, component) => {
  // writing in a file
  writeInAFile(path, returnFunctions(component));
};
