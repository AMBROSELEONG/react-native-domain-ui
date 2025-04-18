import { DomainMainContainer } from "react-native-domain-ui"
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const Home = () => {
    const navigation = useNavigation();
    return (
        <DomainMainContainer>
            <View>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainTextInput' as never)}>
                    <Text style={style.text}>Domain TextInput</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainSelect' as never)}>
                    <Text style={style.text}>Domain Select</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainLoading' as never)}>
                    <Text style={style.text}>Domain Loading</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainModal' as never)}>
                    <Text style={style.text}>Domain Modal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainCheckbox' as never)}>
                    <Text style={style.text}>Domain Checkbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainRadio' as never)}>
                    <Text style={style.text}>Domain Radio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainSlider' as never)}>
                    <Text style={style.text}>Domain Slider</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainHelperText' as never)}>
                    <Text style={style.text}>Domain Helper Text</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainDropdownMenu' as never)}>
                    <Text style={style.text}>Domain Dropdown Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainHeader' as never)}>
                    <Text style={style.text}>Domain Header</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainAlert' as never)}>
                    <Text style={style.text}>Domain Alert</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainMultipleSelect' as never)}>
                    <Text style={style.text}>Domain Multiple Select</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('DomainButton' as never)}>
                    <Text style={style.text}>Domain Button</Text>
                </TouchableOpacity>
            </View>
        </DomainMainContainer>
    )
}

const style = StyleSheet.create({
    button: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        elevation: 10,
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Home;