import { RadioButtonCSS } from "../../objects/style";
import RadioButton from "./RadioButton";
import type { RadioGroupProps } from "./RadioGroupProps";
import { View, Text, TouchableOpacity } from "react-native";
const DomainRadioGroup: React.FC<RadioGroupProps> = ({
    options,
    selectedIndex,
    onSelect,
    size,
    color,
    labelStyle,
    style,
}) => {
    return (
        <View style={[style]}>
            {options.map((option, index) => (
                <TouchableOpacity key={index} style={RadioButtonCSS.option} onPress={() => onSelect(index)}>
                    <RadioButton
                        selected={index === selectedIndex}
                        onSelect={() => onSelect(index)}
                        size={size}
                        color={color}
                    />
                    <Text style={[RadioButtonCSS.optionText, labelStyle]}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default DomainRadioGroup;