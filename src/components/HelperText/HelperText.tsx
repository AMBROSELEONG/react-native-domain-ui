import React from 'react';
import { View, Text } from 'react-native';
import { HelperTextCSS } from '../../objects/style';
import type { DomainHelperTextProps } from './HelperTextProps';

const DomainHelperText: React.FC<DomainHelperTextProps> = ({
    text,
    visible,
    color = 'red'
}) => {
    if (!visible) return null;

    return (
        <View style={HelperTextCSS.container}>
            <Text style={[HelperTextCSS.text, { color }]}>{text}</Text>
        </View>
    )
}

export default DomainHelperText;