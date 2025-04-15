import type {
  StyleProp,
  ViewStyle,
  SwitchProps,
  SwitchPropsIOS,
} from 'react-native';

export interface DomainSwitchButtonProps extends SwitchProps, SwitchPropsIOS {
  style?: StyleProp<ViewStyle>;
}
