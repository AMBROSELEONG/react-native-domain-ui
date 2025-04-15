import { Text, View } from 'react-native';
import {
    DomainMainContainer,
    DomainSelect,
    DomainTextInput
} from 'react-native-domain-ui';
import { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DomainSelectExample = () => {
    const [phone, setPhone] = useState('');
    const [selectedValue, setSelectedValue] = useState<
        string | undefined
    >(undefined);

    const countryOptions = [
        {
            id: '1',
            name: 'Malaysia',
            left: <Text>MS</Text>,
            right: <FontAwesome name='flag' size={15} />
        },
        {
            id: '2',
            name: 'Malaysia',
            left: <Text>MS</Text>,
            right: <FontAwesome name='flag' size={15} />
        },
        {
            id: '3',
            name: 'Malaysia',
            left: <Text>MS</Text>,
            right: <FontAwesome name='flag' size={15} />
        },
        {
            id: '4',
            name: 'Malaysia',
            left: <Text>MS</Text>,
            right: <FontAwesome name='flag' size={15} />
        }
    ]

    const [selectedPhoneValue, setSelectedPhoneValue] = useState<
        string | undefined
    >(undefined);

    const phoneOptions = [
        {
            id: '+60',
            name: '+60',
        },
        {
            id: '+61',
            name: '+61',
        },
        {
            id: '+62',
            name: '+62',
        },
    ];

    return (
        <DomainMainContainer>
            <Text>Country: {selectedValue}</Text>
            <Text>Phone: {selectedPhoneValue} {phone}</Text>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '80%', }}>

                    <View style={{ marginVertical: 10 }}>
                        <DomainSelect
                            options={countryOptions}
                            value={selectedValue}
                            onChange={setSelectedValue}
                            placeholder="Select a country"
                            label="Country"
                            resetButton={true}
                            helperText='Cannot empty'
                            labelBackground='#f0f0f0'
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <DomainTextInput
                            label="Phone Number"
                            name="phone"
                            placeholder="phone"
                            leftWidth={50}
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                            dataDetectorTypes='phoneNumber'
                            labelBackground='#f0f0f0'
                            left={
                                <DomainSelect
                                    options={phoneOptions}
                                    value={selectedPhoneValue}
                                    onChange={setSelectedPhoneValue}
                                    placeholder="+"
                                    style={{ borderWidth: 0 }}
                                />
                            }
                        />
                    </View>
                </View>
            </View>
        </DomainMainContainer>
    )
}

export default DomainSelectExample;