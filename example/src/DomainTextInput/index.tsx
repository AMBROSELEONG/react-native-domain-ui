import { Text, View, Button } from 'react-native';
import {
    DomainMainContainer,
    DomainTextInput,
} from 'react-native-domain-ui';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useEffect, useState } from 'react';

const DomainTextInputExample = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gmail, setGmail] = useState('');
    const [secure, setSecure] = useState(true);
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        checkPassword(password);
    }, [password])

    const checkPassword = (password: string) => {
        if (!password) return false;

        const minLength = /.{8,}/;
        const uppercase = /[A-Z]/; 
        const lowercase = /[a-z]/; 
        const digit = /\d/;        
        const specialChar = /[@#$%^&*(),.?":{}|<>]/; 
    
        if (
            minLength.test(password) &&
            uppercase.test(password) &&
            lowercase.test(password) &&
            digit.test(password) &&
            specialChar.test(password)
        ) {
            return setPasswordError('');
        } else {
            return setPasswordError('Password does not meet requirements');
        }
    }

    return (
        <DomainMainContainer keyboardAvoidingEnabled={true}>
            <Text>User Name: {username}</Text>
            <Text>Password: {password}</Text>
            <Text>Gmail: {gmail}@gmail.com</Text>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '80%', }}>

                    <View style={{ marginVertical: 10 }}>
                        <DomainTextInput
                            label="User Name"
                            labelColor='#000'
                            labelBackground='#f0f0f0'
                            name="username"
                            nextName="password"
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                            left={
                                <FontAwesome name='user' size={20} />
                            }
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <DomainTextInput
                            name="password"
                            nextName='gmail'
                            label="Password"
                            labelBackground='#f0f0f0'
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            focusColor="#7174F8"
                            secureTextEntry={secure}
                            helperText={passwordError}
                            right={
                                <Button title={secure ? "show" : "hide"} onPress={() => setSecure(!secure)} />
                            }
                            rightWidth={'30%'}
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <DomainTextInput
                            name="gmail"
                            label="Gmail"
                            labelBackground='#f0f0f0'
                            placeholder="Gmail"
                            value={gmail}
                            onChangeText={setGmail}
                            focusColor="#7174F8"
                            secureTextEntry={secure}
                            right={
                                <Text>@gmail.com</Text>
                            }
                            rightWidth={'30%'}
                        />
                    </View>

                </View>
            </View>
        </DomainMainContainer>
    );
}

export default DomainTextInputExample;

