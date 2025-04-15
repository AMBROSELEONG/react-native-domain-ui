import type { ModalProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface DomainModalProps extends ModalProps {
    openModal?: boolean; 
    onClose?: () => void;
    onOpen?: () => void;  
    disableBackdropPress?: boolean; 
    closeOnHardwareBackPress?: boolean;
    
    style?: StyleProp<ViewStyle>;
    backdropStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;

    modalHeight?: number | `${number}%`;
    modalWidth?: number | `${number}%`;
    backdropOpacity?: number;

    title: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    showCloseIcon?: boolean;

    keyboardAvoiding?: boolean;

    children: React.ReactNode;
}
