import type { StyleProp, TextStyle, ViewStyle } from "react-native"

export type DomainButtonProps = { 
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
    label:  string;
    labelStyle?: StyleProp<TextStyle>;
}