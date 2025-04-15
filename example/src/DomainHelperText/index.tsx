import { useState } from 'react';
import { View, Button } from 'react-native';
import { DomainHelperText, DomainTextInput } from 'react-native-domain-ui';

const DomainHelperTextExample = () => {
    const [input, setInput] = useState('');
    const [showError, setShowError] = useState(false);

    const handleValidation = () => {
        setShowError(input.trim() === '');
    };

    return (
        <View style={{ padding: 20 }}>
            <DomainTextInput
                name='Text'
                placeholder="Enter text"
                value={input}
                onChangeText={setInput}
                style={{ borderWidth: 1, padding: 10, borderRadius: 5 }}
            />
            <DomainHelperText text="This field is required!" visible={showError} color="red" />
            <Button title="Validate" onPress={handleValidation} />
        </View>
    )
}

export default DomainHelperTextExample;