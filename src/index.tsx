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
export { default as DomainLoading } from './components/ActivityIndicator/ActivityIndicator';
export { default as DomainSwitchButton } from './components/SwitchButton/SwitchButton';
export { default as DomainSelect } from './components/Select/Select';
export { default as DomainMainContainer } from './components/MainContainer/MainContainer';
export { default as DomainModal } from './components/Modal/Modal';
export { default as DomainCheckbox } from './components/Checkbox/Checkbox';
export { default as DomainRadioGroup } from './components/Radio/RadioGroup';
export { default as DomainSlider } from './components/Slider/Slider';
export { default as DomainHelperText } from './components/HelperText/HelperText'
export { default as DomainDropdownMenu } from './components/DropdownMenu/DropdownMenu'
export { default as DomainHeader } from './components/Header/Header'
export { default as DomainAlert, showAlert } from './components/Alert/Alert.js';
export { default as DomainMultipleSelect } from './components/MultiSelect/MultipleSelect'