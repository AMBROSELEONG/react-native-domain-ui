import { View, Text, TouchableOpacity } from 'react-native';
import { DomainHeader } from 'react-native-domain-ui';
import { useNavigation } from '@react-navigation/native';

const DomainHeaderExample = () => {
    const navigation = useNavigation();

    const headerRightComponent = () => {
        return (
            <TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 26 }}>+</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <DomainHeader
                navigation={() => navigation.goBack()}
                title="Header"
                rightComponent={headerRightComponent()}
                backgroundColor="#0000ff"
                color="white"
            />
        </View>
    )
}

export default DomainHeaderExample;