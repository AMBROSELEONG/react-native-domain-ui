import type { DomainRadioButtonProps } from "./RadioButtonProps";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RadioButtonCSS } from "../../objects/style";

const RadioButton: React.FC<DomainRadioButtonProps> = ({
    selected,
    onSelect,
    size = 24,
    color = "#6200EE",
}) => {
    return (
        <TouchableOpacity onPress={onSelect} style={{ padding: 5 }}>
            <View style={[RadioButtonCSS.radio, { width: size, height: size, borderColor: color }]}>
                {selected && <View style={[RadioButtonCSS.radioInner, { backgroundColor: color, width: size / 2, height: size / 2 }]} />}
            </View>
        </TouchableOpacity>
    )
}

export default RadioButton;