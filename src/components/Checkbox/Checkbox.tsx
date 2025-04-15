import React from "react";
import { TouchableOpacity } from "react-native";
import type { DomainCheckboxProps } from "./CheckboxProps";
import Icon from "react-native-vector-icons/MaterialIcons";
import { CheckboxCSS } from "../../objects/style";

const DomainCheckbox: React.FC<DomainCheckboxProps> = ({
    checked,
    onChange,
    size = 24,
    color = "#6200EE"
}) => {
    return (
        <TouchableOpacity
            onPress={() => onChange(!checked)}
            style={[CheckboxCSS.container, { width: size, height: size, borderColor: color }]}
        >
            {checked && <Icon name="check" size={size * 0.8} color={color} />}
        </TouchableOpacity>
    );
};

export default DomainCheckbox;
