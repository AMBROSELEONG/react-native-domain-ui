import type { ColorValue } from "react-native";

export interface DomainSliderProps {
    min?: number;
    max?: number;
    step?: number;
    onValueChange?: (value: number) => void;
    color?: ColorValue;
}
