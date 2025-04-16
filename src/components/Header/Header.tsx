import type { DomainHeaderProps } from "./HeaderProps";
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderCSS } from "../../objects/style";

const DomainHeader: React.FC<DomainHeaderProps> = ({
    navigation,
    title,
    rightComponent,
    backgroundColor = '#000',
    color = '#fff',
    backButton = true,
}) => {
    return (
        <SafeAreaView style={{ backgroundColor }}>
            <StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
            <View style={HeaderCSS.mainContainer}>
                {backButton ? (
                    <TouchableOpacity style={HeaderCSS.headerIcon} onPress={navigation}>
                        <Ionicons name="arrow-back" size={26} color={color} />
                    </TouchableOpacity>
                ) : (<View style={HeaderCSS.headerIcon}></View>)}
                <Text style={[HeaderCSS.pageName, { color }]}>{title}</Text>
                <View style={HeaderCSS.headerIcon}>
                    {rightComponent ? rightComponent : null}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DomainHeader;