import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal,
} from "react-native";
import { MultipleSelectCSS } from "../../objects/style";
import type { DomainMultipleSelectProps } from "./MultipleSelectProps";
import DomainTextInput from '../TextInput/TextInput';

const DomainMultipleSelect: React.FC<DomainMultipleSelectProps> = ({
    label,
    labelColor,
    labelBackground = "#fff",
    style,
    options,
    value = [],
    onChange,
    placeholder,
    resetButton = false,
    search = true,
    helperText,
    helperTextColor = "red",
    maxSelection,
    minSelection = 1,
    selectedColor = "#F5F5F5",
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleSelect = (id: string) => {
        let newValue = [...value];

        if (newValue.includes(id)) {
            if (newValue.length > minSelection) {
                newValue = newValue.filter((v) => v !== id);
            }
        } else {
            if (!maxSelection || newValue.length < maxSelection) {
                newValue.push(id);
            }
        }
        setSearchQuery("");
        onChange?.(newValue);
    };

    const handleReset = () => {
        onChange?.([]);
    };

    const filteredOptions = options.filter((opt) =>
        opt.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View>
            <View style={[MultipleSelectCSS.container, style]}>
                {label && (
                    <View
                        style={[
                            MultipleSelectCSS.labelView,
                            { backgroundColor: labelBackground },
                        ]}
                    >
                        <Text style={[MultipleSelectCSS.label, { color: labelColor }]}>
                            {label}
                        </Text>
                    </View>
                )}

                <TouchableOpacity
                    style={MultipleSelectCSS.selector}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={MultipleSelectCSS.selectedText}>
                        {value.length > 0
                            ? options
                                .filter((opt) => value.includes(opt.id))
                                .map((opt) => opt.name)
                                .join(", ")
                            : placeholder}
                    </Text>
                </TouchableOpacity>

                {resetButton && value.length > 0 && (
                    <TouchableOpacity
                        style={MultipleSelectCSS.resetButton}
                        onPress={handleReset}
                    >
                        <Text style={MultipleSelectCSS.resetButtonText}>X</Text>
                    </TouchableOpacity>
                )}
            </View>

            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={MultipleSelectCSS.modalContainer}>
                    <View style={MultipleSelectCSS.modalContent}>
                        {label && <Text style={MultipleSelectCSS.title}>{label}</Text>}
                        {search &&
                            <View style={MultipleSelectCSS.searchContainer}>
                                <DomainTextInput
                                    name='Search'
                                    placeholder='Search'
                                    value={searchQuery}
                                    onChangeText={setSearchQuery}
                                    style={MultipleSelectCSS.searchInput}
                                />
                            </View>
                        }
                        <FlatList
                            data={filteredOptions}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[MultipleSelectCSS.option, value.includes(item.id) && { backgroundColor: selectedColor },]}
                                    onPress={() => toggleSelect(item.id)}

                                >
                                    {item.left && (
                                        <View style={[MultipleSelectCSS.sideContainer, { marginRight: 20 }]}>
                                            {item.left}
                                        </View>
                                    )}

                                    <Text style={MultipleSelectCSS.optionText}>{item.name}</Text>

                                    {item.right && (
                                        <View style={[MultipleSelectCSS.sideContainer, { marginLeft: 20 }]}>
                                            {item.right}
                                        </View>
                                    )}
                                </TouchableOpacity>
                            )}
                        />

                        <TouchableOpacity
                            style={MultipleSelectCSS.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={MultipleSelectCSS.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {helperText && (
                <Text style={[{ color: helperTextColor }, MultipleSelectCSS.helperText]}>
                    {helperText}
                </Text>
            )}
        </View>
    );
};

export default DomainMultipleSelect;
