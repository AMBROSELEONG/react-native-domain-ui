import { DomainSlider } from 'react-native-domain-ui';
import { useState } from 'react';
import { View, Text } from 'react-native';

const DomainSliderExample = () => {
    const [sliderValue, setSliderValue] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <DomainSlider min={0} max={200} step={4} onValueChange={setSliderValue} color="#ff0000"/>
            <Text>{sliderValue}</Text>
        </View>
    );
}

export default DomainSliderExample;