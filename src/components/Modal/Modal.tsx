import React from 'react';
import {
    Modal,
    View,
    TouchableWithoutFeedback,
    Text,
    TouchableOpacity
} from 'react-native';
import type { DomainModalProps } from './ModalProps';
import { ModalCSS } from '../../objects/style';

const DomainModal: React.FC<DomainModalProps> = ({
    openModal = false,
    onClose,
    onOpen,
    animationType = 'slide',
    transparent = true,
    modalHeight,
    modalWidth,
    backdropOpacity = 0.5,
    closeOnHardwareBackPress = true,
    disableBackdropPress = false,
    showCloseIcon = true,
    keyboardAvoiding = false,
    title,
    header,
    footer,
    children,
    style,
    backdropStyle,
    contentStyle,
    titleStyle,
    ...modalProps
}) => {

    React.useEffect(() => {
        if (openModal && onOpen) {
            onOpen();
        }
    }, [openModal, onOpen]);

    return (
        <Modal
            visible={openModal}
            animationType={animationType}
            transparent={transparent}
            onRequestClose={() => {
                if (closeOnHardwareBackPress && onClose) {
                    onClose();
                }
            }}
            {...modalProps}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    if (!disableBackdropPress && onClose) {
                        onClose();
                    }
                }}
            >
                <View style={[ModalCSS.backdrop, { backgroundColor: `rgba(0,0,0,${backdropOpacity})` }, backdropStyle]}>
                    <View style={[ModalCSS.modalContainer, style, { width: modalWidth ?? '80%', height: modalHeight}]}>
                        {showCloseIcon && (
                            <TouchableOpacity style={ModalCSS.closeButton} onPress={onClose}>
                                <Text style={ModalCSS.closeText}>×</Text>
                            </TouchableOpacity>
                        )}
                        {title && <Text style={[ModalCSS.title, titleStyle]}>{title}</Text>}
                        {header}
                        <View style={[ModalCSS.content, contentStyle]}>
                            {children}
                        </View>
                        {footer}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default DomainModal;