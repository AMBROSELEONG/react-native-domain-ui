import type {
    ListRenderItem,
    StyleProp,
    ViewStyle,
} from 'react-native';

export interface DomainDropdownMenuProps {
    options: string[];
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    optionsRender?: ListRenderItem<string>;
    dropdownStyle?: StyleProp<ViewStyle>;
}