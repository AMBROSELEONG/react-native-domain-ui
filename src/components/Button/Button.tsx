import { TouchableOpacity, Text } from "react-native";
import type { DomainButtonProps } from "./ButtonProps";
import { ButtonCSS } from "../../objects/style";

const DomainButton: React.FC<DomainButtonProps> = ({
    style,
    onPress,
    label,
    labelStyle,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[ButtonCSS.container, style]}>
            <Text style={[ButtonCSS.text, labelStyle]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default DomainButton;