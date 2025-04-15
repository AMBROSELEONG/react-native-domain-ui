import type {
    StyleProp,
    ViewStyle,
} from 'react-native';

export interface RadioGroupProps {
    options: string[];
    selectedIndex: number;
    onSelect: (index: number) => void;
    size?: number;
    color?: string;
    labelStyle?: object;
    style?: StyleProp<ViewStyle>;
}
