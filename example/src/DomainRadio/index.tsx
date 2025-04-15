import { DomainRadioGroup } from "react-native-domain-ui";
import { useState } from "react"
import { View, Text } from "react-native";

const DomainRadioExample = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const options = ["Male", "Female", "Other"];

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <DomainRadioGroup
                options={options}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
                color="black"
                size={20}
                labelStyle={{ fontSize: 18 }}
            />
            <Text>Selected: {options[selectedIndex]}</Text>
        </View>
    )
}

export default DomainRadioExample;