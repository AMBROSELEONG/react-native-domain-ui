import { View, Text, TouchableOpacity } from 'react-native';
import { DomainDropdownMenu } from 'react-native-domain-ui';
import { useState } from 'react';

const DomainDropdownMenuExample = () => {
    const options = ['Profile', 'Settings', 'Logout', 'Test', 'Exp'];
    const [, setVisible] = useState(false);

    const handleSelect = (item: string) => {
        setVisible(false);
        switch (item) {
            case 'Profile':
                console.log("Profile");
                break;
            case 'Settings':
                console.log("Settings");
                break;
            case 'Logout':
                console.log("Logout");
                break;
            default:
                console.log(`Selected: ${item}`);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <DomainDropdownMenu
                options={options}
                dropdownStyle={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}
                optionsRender={({ item }) => (
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => handleSelect(item)}>
                        <Text style={{ fontSize: 16 }}>{item}</Text>
                    </TouchableOpacity>
                )}
            >
                <Text style={{ fontSize: 18, color: 'blue' }}>☰ Menu</Text>
            </DomainDropdownMenu>
        </View>
    );
}

export default DomainDropdownMenuExample;