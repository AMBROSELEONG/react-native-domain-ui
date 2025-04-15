import type { DomainSliderProps } from "./SliderProps";
import React, { useState } from 'react';
import { View, Text, PanResponder } from 'react-native';
import { SliderCSS } from "../../objects/style";

const DomainSlider: React.FC<DomainSliderProps> = ({
    min = 0,
    max = 100,
    step = 1,
    onValueChange,
    color = "blue"
}) => {
    const [value, setValue] = useState(min);
    const [position, setPosition] = useState(0);
    const sliderWidth = 300;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            let newPos = Math.min(sliderWidth, Math.max(0, gestureState.dx + position));
            let newValue = Math.round((newPos / sliderWidth) * (max - min) / step) * step + min;

            setPosition(newPos);
            setValue(newValue);
            if (onValueChange) onValueChange(newValue);
        },
    });

    return (
        <View style={SliderCSS.container}>
            <Text>Value: {value}</Text>
            <View style={SliderCSS.track}>
                <View
                    style={[SliderCSS.thumb, { left: position, backgroundColor: color }]}
                    {...panResponder.panHandlers}
                />
            </View>
        </View>
    );
}

export default DomainSlider;