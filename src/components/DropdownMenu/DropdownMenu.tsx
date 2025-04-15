import { DropdownMenuCSS } from "../../objects/style";
import type { DomainDropdownMenuProps } from "./DropdownMenuProps";
import { useState } from 'react';
import { View, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';

const DomainDropdownMenu: React.FC<DomainDropdownMenuProps> = ({
    options,
    style,
    children,
    optionsRender,
    dropdownStyle,
}) => {
    const [visible, setVisible] = useState(false);

    const closeMenu = () => {
        setVisible(false);
    };

    return (
        <View >
            <TouchableOpacity style={[DropdownMenuCSS.button, style]} onPress={() => setVisible(!visible)}>
                {children}
            </TouchableOpacity>

            {visible && (
                <TouchableWithoutFeedback onPress={closeMenu}>
                    <View style={[DropdownMenuCSS.dropdown, dropdownStyle]}>
                        <FlatList
                            data={options}
                            keyExtractor={(index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={optionsRender && typeof optionsRender === 'function'
                                ? optionsRender
                                : undefined}
                        />
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    )
}

export default DomainDropdownMenu;