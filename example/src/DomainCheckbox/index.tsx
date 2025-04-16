import { DomainCheckbox } from "react-native-domain-ui";
import { View, Text } from 'react-native';
import { useState } from "react"

const DomainCheckboxExample = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <DomainCheckbox checked={isChecked} onChange={setIsChecked} color="black" size={20} />
                <Text>Option 1</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <DomainCheckbox checked={isChecked1} onChange={setIsChecked1} color="black" size={20} />
                <Text>Option 2</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <DomainCheckbox checked={isChecked2} onChange={setIsChecked2} color="black" size={20} />
                <Text>Option 3</Text>
            </View>
            <Text>{isChecked ? "Selected" : "Not Selected"}</Text>
            <Text>{isChecked1 ? "Selected" : "Not Selected"}</Text>
            <Text>{isChecked2 ? "Selected" : "Not Selected"}</Text>
        </View>
    );
}

export default DomainCheckboxExample;