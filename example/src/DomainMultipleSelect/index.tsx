    import { View, Text } from 'react-native';
    import {
        DomainMainContainer,
        DomainMultipleSelect,
    } from 'react-native-domain-ui';
    import { useState } from 'react';

    const DomainMultipleSelectExample = () => {
        const [selectedValue, setSelectedValue] = useState<string[]>([]);

        const options = [
            { id: '1', name: 'One', left: <Text>one</Text>,  right: <Text>one</Text> },
            { id: '2', name: 'Two' },
            { id: '3', name: 'Three' },
            { id: '4', name: 'Four' },
            { id: '5', name: 'Five' },
            { id: '6', name: 'One' },
            { id: '7', name: 'Two' },
            { id: '8', name: 'Three' },
            { id: '9', name: 'Four' },
            { id: '10', name: 'Five' },
        ];

        return (
            <DomainMainContainer>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '80%', }}>
                        <View style={{ marginVertical: 10 }}>

                            <DomainMultipleSelect
                                options={options}
                                value={selectedValue}
                                onChange={(newValue) => setSelectedValue(newValue ?? [])}
                                label="Test"
                                resetButton={true}
                                labelBackground='#f0f0f0'
                                placeholder="Select"
                                selectedColor={'#f0f0f0'}
                            />

                            <Text>{selectedValue}</Text>
                        </View>
                    </View>
                </View>
            </DomainMainContainer>
        )
    }

    export default DomainMultipleSelectExample;