import type { ColorValue } from "react-native";

export interface DomainHeaderProps {
    navigation?: () => void;
    title: string;
    rightComponent?: React.ReactNode;
    backgroundColor?: ColorValue;
    color?: ColorValue;
};