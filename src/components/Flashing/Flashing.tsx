import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import type { DomainFlashingProps } from './FlashingProps';
import { FlashingCSS } from '../../objects/style';

const DomainFlashing: React.FC<DomainFlashingProps> = ({
    isWarning,
    title
}) => {
    const opacity = useRef(new Animated.Value(1)).current;
    const animationRef = useRef<Animated.CompositeAnimation | null>(null);

    useEffect(() => {
        const startFlashing = () => {
            animationRef.current = Animated.loop(
                Animated.sequence([
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true
                    }),
                    Animated.timing(opacity, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ])
            );
            animationRef.current.start();
        };

        if (isWarning) {
            startFlashing();
        } else {
            opacity.setValue(1);
            animationRef.current?.stop();
        }

        return () => {
            animationRef.current?.stop();
        };
    }, [isWarning]);

    if (!isWarning) return null;

    return (
        <Animated.View style={[FlashingCSS.warningBox, { opacity }]}>
            <Text style={FlashingCSS.warningText}>{title}</Text>
        </Animated.View>
    )
}

export default DomainFlashing;