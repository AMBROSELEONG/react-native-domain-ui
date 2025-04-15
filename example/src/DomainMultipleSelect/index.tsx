import { View } from 'react-native';
import {
    DomainMainContainer,
    DomainMultipleSelect,
} from 'react-native-domain-ui';
import { useState } from 'react';

const DomainMultipleSelectExample = () => {
    const [selectedValue, setSelectedValue] = useState<string[]>([]);

    const options = [
        { id: '1', name: 'One' },
        { id: '2', name: 'Two' },
        { id: '3', name: 'Three' },
        { id: '4', name: 'Four' },
        { id: '5', name: 'Five' },
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
                            resetButton={false}
                            labelBackground='#f0f0f0'
                            placeholder="Select"
                        />
                    </View>
                </View>
            </View>
        </DomainMainContainer>
    )
}

export default DomainMultipleSelectExample;