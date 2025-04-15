import type { DomainSelectProps } from './SelectProps';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { SelectCSS } from '../../objects/style';
import DomainTextInput from '../TextInput/TextInput';

const DomainSelect: React.FC<DomainSelectProps> = ({
  label,
  labelColor,
  labelBackground = "#fff",
  style,
  options,
  value,
  onChange,
  placeholder,
  resetButton = false,
  search = true,
  helperText,
  helperTextColor = 'red',
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelect = (id: string) => {
    onChange?.(id);
    setModalVisible(false);
    setSearchQuery('');
  };

  const handleReset = () => {
    onChange?.(undefined);
  };

  const filteredOptions = options.filter((opt) =>
    opt.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedOption = options.find((opt) => opt.id === value);

  return (
    <View>
      <View style={[SelectCSS.container, style]}>
        {label && (
          <View style={[SelectCSS.labelView, { backgroundColor: labelBackground }]}>
            <Text style={[SelectCSS.label, { color: labelColor }]}>{label}</Text>
          </View>
        )}

        <View style={SelectCSS.selectWrapper}>
          <TouchableOpacity
            style={SelectCSS.selector}
            onPress={() => setModalVisible(true)}
          >
            {selectedOption ? (
              <View style={SelectCSS.selectedContainer}>
                {selectedOption.left && (
                  <View style={[SelectCSS.sideContainer, { marginRight: 20 }]}>
                    {selectedOption.left}
                  </View>
                )}
                <Text style={SelectCSS.selectedText}>{selectedOption.name}</Text>
                {selectedOption.right && (
                  <View style={[SelectCSS.sideContainer, { marginLeft: 20 }]}>
                    {selectedOption.right}
                  </View>
                )}
              </View>
            ) : (
              <Text style={SelectCSS.selectedText}>{placeholder}</Text>
            )}
          </TouchableOpacity>
          {resetButton && value && (
            <TouchableOpacity style={SelectCSS.resetButton} onPress={handleReset}>
              <Text style={SelectCSS.resetButtonText}>X</Text>
            </TouchableOpacity>
          )}
        </View>

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={SelectCSS.modalContainer}>
            <View style={SelectCSS.modalContent}>
              {label && <Text style={SelectCSS.title}>{label}</Text>}
              {search &&
                <View style={SelectCSS.searchContainer}>
                  <DomainTextInput
                    name='Search'
                    placeholder='Search'
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    style={SelectCSS.searchInput}
                  />
                </View>
              }
              <FlatList
                data={filteredOptions}
                keyExtractor={(item) => item.id}
                scrollEnabled
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={SelectCSS.option}
                    onPress={() => handleSelect(item.id)}
                  >
                    {item.left && (
                      <View
                        style={[SelectCSS.sideContainer, { marginRight: 20 }]}
                      >
                        {item.left}
                      </View>
                    )}

                    <Text style={SelectCSS.optionText}>{item.name}</Text>

                    {item.right && (
                      <View style={[SelectCSS.sideContainer, { marginLeft: 20 }]}>
                        {item.right}
                      </View>
                    )}
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={SelectCSS.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={SelectCSS.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
      {
        helperText && (
          <Text style={[{ color: helperTextColor }, SelectCSS.helperText]}>
            {helperText}
          </Text>
        )
      }
    </View>
  );
};

export default DomainSelect;
