import { useEffect, useState } from "react";
import type { DomainAlertProps } from "./AlertProps"
import { Animated, Text, View } from "react-native";
import { AlertCSS } from "../../objects/style";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const iconMap: Record<"success" | "failed" | "warning", string> = {
    success: "check-circle",
    failed: "times-circle",
    warning: "exclamation-circle",
};

const backgroundColorMap: Record<"success" | "failed" | "warning", string> = {
    success: "rgba(76, 175, 80, 0.50)",
    failed: "rgba(244, 67, 54, 0.50)",
    warning: "rgba(255, 193, 7, 0.50)",
};

const borderColorMap: Record<"success" | "failed" | "warning", string> = {
    success: "#4CAF50",
    failed: "#F44336",
    warning: "#FFC107",
};

let showAlertFn: ((options: DomainAlertProps) => void) | null = null;

const DomainAlertContainer: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [slideAnim] = useState(new Animated.Value(-50));
    const [alertData, setAlertData] = useState<DomainAlertProps | null>(null);

    useEffect(() => {
        showAlertFn = ({ title, type = "warning", duration = 3000 }) => {
            setAlertData({ title, type });
            setVisible(true);

            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();

            setTimeout(() => {
                Animated.timing(slideAnim, {
                    toValue: -50,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => setVisible(false));
            }, duration);
        };
    }, [slideAnim]);

    if (!visible || !alertData) return null;

    return (
        <Animated.View
            style={[
                AlertCSS.container,
                {
                    transform: [{ translateY: slideAnim }],
                    backgroundColor: backgroundColorMap[alertData.type as "success" | "failed" | "warning"],
                    borderColor: borderColorMap[alertData.type as "success" | "failed" | "warning"],
                }
            ]}
        >
            <View style={AlertCSS.content}>
                <FontAwesome
                    name={iconMap[alertData.type as "success" | "failed" | "warning"] ?? "exclamation-circle"}
                    size={20}
                    style={AlertCSS.icon}
                />
                <Text style={AlertCSS.text}>{alertData.title}</Text>
            </View>
        </Animated.View>
    );
};

export const showAlert = (options: DomainAlertProps) => {
    if (showAlertFn) {
        showAlertFn(options);
    }
};

export default DomainAlertContainer;