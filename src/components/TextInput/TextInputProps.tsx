import type {
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextInputIOSProps,
  DimensionValue,
  ColorValue,
} from 'react-native';
import type { ReactNode } from 'react';

export interface DomainTextInputProps
  extends TextInputProps,
  TextInputIOSProps {
  style?: StyleProp<ViewStyle>;
  width?: number;
  editable?: boolean;
  focusColor?: ColorValue;
  name: string;
  nextName?: string;
  left?: ReactNode;
  leftWidth?: DimensionValue;
  right?: ReactNode;
  rightWidth?: DimensionValue;
  helperText?: string;
  helperTextColor?: ColorValue;
  label?: string;
  labelColor?: ColorValue;
  labelBackground?: ColorValue;
  inputColor?: ColorValue;
}
