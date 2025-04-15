import { Platform } from "react-native";

export const myFunction = () => {
  if (Platform.OS === 'web') {
    return 'Running in Web';
  } else if (Platform.OS === 'ios' || Platform.OS === 'android') {
    return 'Running in Mobile';
  } else {
    return 'Unknown Platform';
  }
}

export { default as DomainTextInput } from './components/TextInput/TextInput';
export { default as DomainSelect } from './components/Select/Select'