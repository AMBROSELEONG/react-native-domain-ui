# Installation

```sh
npm install react-native-domain-ui
```

or 

```sh
yarn add react-native-domain-ui
```

# Usage

# DomainTextInput Component

## Description
`DomainTextInput` is a customizable text input component that extends `TextInputProps` and `TextInputIOSProps`, providing additional styling and configuration options.

![image](https://github.com/user-attachments/assets/d5ab91ef-33b2-4c84-8199-c70f5ade06bc)

## Props Table

| Props              | Type                              | Required | Description                                               |
| ------------------ | -------------------------------- | -------- | --------------------------------------------------------- |
| `style`           | `StyleProp<ViewStyle>`           | ❌ No    | Styling for the view container.                          |
| `width`           | `number`                         | ❌ No    | Custom width for the input component.                    |
| `editable`        | `boolean`                        | ❌ No    | Determines if the input is editable.                     |
| `focusColor`      | `ColorValue`                     | ❌ No    | Color of the input when focused.                         |
| `name`            | `string`                         | ✅ Yes   | Name of the input field (used for form handling).        |
| `nextName`        | `string`                         | ❌ No    | Name of the next input field for navigation.             |
| `left`            | `ReactNode`                      | ❌ No    | Left-side component inside the input (e.g., icon).       |
| `leftWidth`       | `DimensionValue`                 | ❌ No    | Width of the left component.                             |
| `right`           | `ReactNode`                      | ❌ No    | Right-side component inside the input (e.g., icon).      |
| `rightWidth`      | `DimensionValue`                 | ❌ No    | Width of the right component.                            |
| `helperText`      | `string`                         | ❌ No    | Text displayed below the input for guidance.            |
| `helperTextColor` | `ColorValue`                     | ❌ No    | Color of the helper text.                                |
| `label`           | `string`                         | ❌ No    | Label text for the input.                                |
| `labelColor`      | `ColorValue`                     | ❌ No    | Color of the label text.                                 |
| `labelBackground` | `ColorValue`                     | ❌ No    | Background Color of the label text.                      |
| `inputColor`      | `ColorValue`                     | ❌ No    | Text color of the input field.                          |

## Example Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { DomainTextInput } from 'domaincomponent';

const App = () => {
  return (
    <View>
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
  );
};

export default App;
```

# DomainSelect Component

## Description
`DomainSelect` is a customizable dropdown/select component that allows users to choose from a list of options. It supports labels, placeholders, and optional left/right icons.

![image](https://github.com/user-attachments/assets/f266158e-5bc2-4e52-ae95-4611f1b22f7f)

<img src="https://github.com/user-attachments/assets/96bc67c1-0e34-439f-be0b-0abf20ecaca9" style="width:300px; height:auto;">

## Props Table

| Props         | Type                            | Required | Description                                                 |
| ------------ | ------------------------------ | -------- | ----------------------------------------------------------- |
| `style`      | `StyleProp<ViewStyle>`         | ❌ No    | Styling for the select container.                          |
| `options`    | `Option[]`                     | ✅ Yes   | Array of selectable options.                               |
| `value`      | `string`                        | ❌ No    | Selected option's ID.                                      |
| `onChange`   | `(value: string \| undefined) => void` | ❌ No    | Callback function triggered when an option is selected.    |
| `placeholder`| `string`                        | ❌ No    | Placeholder text displayed when no option is selected.     |
| `label`      | `string`                        | ❌ No    | Label for the select input.                                |
| `labelColor`      | `ColorValue`                     | ❌ No    | Color of the label text.                                 |
| `labelBackground` | `ColorValue`                     | ❌ No    | Background Color of the label text.                      |
| `resetButton`| `boolean`                       | ❌ No    | Displays a reset button to clear selection if `true`.     |
| `helperText`      | `string`                         | ❌ No    | Text displayed below the input for guidance.            |
| `helperTextColor` | `ColorValue`                     | ❌ No    | Color of the helper text.                                |

### **Option Object Structure**
Each option in the `options` array follows this structure:

```ts
export interface Option {
    id: string;         // Unique identifier for the option
    name: string;       // Display name of the option
    left?: ReactNode;   // (Optional) Left-side icon/component
    right?: ReactNode;  // (Optional) Right-side icon/component
}
```

## Example Usage

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { DomainSelect } from 'domaincomponent';

const countryOptions = [
    {
        id: '1',
        name: 'Malaysia',
        left: <Text>MS</Text>,
        right: <FontAwesome name='flag' size={15} />
    },
    {
        id: '2',
        name: 'Singapore',
        left: <Text>SGD</Text>,
        right: <FontAwesome name='flag' size={15} />
    },
]

const App = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  return (
    <View>
     <DomainSelect
          options={countryOptions}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Select a country"
          label="Country"
          resetButton={true}
          helperText='Cannot empty'
      />
    </View>
  );
};

export default App;
```

# DomainMainContainer

## Description
`DomainMainContainer` is a reusable React Native component that serves as a container for wrapping application content. It provides optional keyboard avoiding behavior to enhance the user experience when dealing with text inputs. The component ensures a safe layout by utilizing `SafeAreaView` and conditionally wrapping children inside `KeyboardAvoidingView` when `keyboardAvoidingEnabled` is set to `true`.

## Props Table

| Props                   | Type                    | Required | Description                                                                 |
|-------------------------|------------------------|----------|-----------------------------------------------------------------------------|
| `children`              | `React.ReactNode`      | ✅ Yes   | The content to be rendered inside the container.                           |
| `keyboardAvoidingEnabled` | `boolean`            | ❌ No    | Enables `KeyboardAvoidingView` for handling keyboard interactions. Default is `false`. |

## Example Usage

```tsx
import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { DomainMainContainer } from 'domaincomponent';

const MyScreen: React.FC = () => {
  return (
     <DomainMainContainer keyboardAvoidingEnabled={true}>
      <View>
        <Text>Enter your details:</Text>
        <TextInput placeholder="Type here..." style={{ borderWidth: 1, padding: 10 }} />
        <Button title="Submit" onPress={() => console.log('Submitted')} />
      </View>
    </DomainMainContainer>
  );
};

export default MyScreen;
```

# DomainLoading

## Description
`DomainLoading` is a reusable React Native component that displays a loading indicator when the `loading` prop is set to `true`. If `loading` is `false`, the component renders nothing.

## Props Table

| Props    | Type     | Required | Description                                      |
|----------|---------|----------|--------------------------------------------------|
| `loading` | `boolean` | ✅ Yes   | Determines whether the loading indicator is displayed. |

## Example Usage

```tsx
import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { DomainLoading } from 'domaincomponent';

const MyScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
  }, []);

  return (
    <View>
      <DomainLoading loading={loading} />
      <Button title="Reload" onPress={() => setLoading(true)} />
    </View>
  );
};

export default MyScreen;
```

# DomainModal

## Description
`DomainModal` is a customizable modal component for React Native applications. It provides various options such as backdrop control, hardware back press handling, custom styling, and optional header and footer components.

![image](https://github.com/user-attachments/assets/8e75cb01-e931-4f9a-a88e-55d7ad1dda0a)

## Props Table

| Props                       | Type                             | Required | Description                                                                           |
|-----------------------------|---------------------------------|----------|---------------------------------------------------------------------------------------|
| `openModal`                 | `boolean`                      | ❌ No    | Controls the visibility of the modal.                                                |
| `onClose`                   | `() => void`                   | ❌ No    | Callback function triggered when the modal closes.                                   |
| `onOpen`                    | `() => void`                   | ❌ No    | Callback function triggered when the modal opens.                                    |
| `disableBackdropPress`       | `boolean`                      | ❌ No    | If `true`, prevents closing the modal by tapping the backdrop. Default is `false`.   |
| `closeOnHardwareBackPress`   | `boolean`                      | ❌ No    | If `true`, allows closing the modal using the hardware back button. Default is `true`. |
| `style`                     | `StyleProp<ViewStyle>`         | ❌ No    | Custom style for the modal container.                                                |
| `backdropStyle`             | `StyleProp<ViewStyle>`         | ❌ No    | Custom style for the modal backdrop.                                                 |
| `contentStyle`              | `StyleProp<ViewStyle>`         | ❌ No    | Custom style for the modal content area.                                             |
| `titleStyle`                | `StyleProp<TextStyle>`         | ❌ No    | Custom style for the modal title.                                                    |
| `modalHeight`               | `number \`${number}%` `     | ❌ No    | Sets the height of the modal.                                                        |
| `modalWidth`                | `number \`${number}%` `     | ❌ No    | Sets the width of the modal. Default is `auto`.                                      |
| `backdropOpacity`           | `number`                       | ❌ No    | Sets the opacity of the backdrop. Default is `0.5`.                                  |
| `title`                     | `string`                       | ✅ Yes   | Title of the modal.                                                                  |
| `header`                    | `React.ReactNode`              | ❌ No    | Custom header content inside the modal.                                             |
| `footer`                    | `React.ReactNode`              | ❌ No    | Custom footer content inside the modal.                                             |
| `showCloseIcon`             | `boolean`                      | ❌ No    | If `true`, displays a close icon on the modal. Default is `true`.                   |
| `keyboardAvoiding`          | `boolean`                      | ❌ No    | If `true`, enables keyboard avoiding behavior.                                       |
| `children`                  | `React.ReactNode`              | ✅ Yes   | The content to be displayed inside the modal.                                        |

## Example Usage

```tsx
import { DomainMainContainer, DomainModal } from "domaincomponent";
import { useState } from "react";
import { View, Button, Text } from "react-native";

const DomainModalExample = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <DomainMainContainer>
            <Button title="Open Modal" onPress={() => setOpenModal(true)} />
            <DomainModal title="Domain Modal"
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                showCloseIcon={true}
                disableBackdropPress={false}
                animationType='fade'
                modalWidth={'90%'}
                footer={<Button title="Close" onPress={() => setOpenModal(false)}></Button>}>
                <View>
                    <Text>Hello World</Text>
                </View>
            </DomainModal>
        </DomainMainContainer>
    )
}

export default DomainModalExample;
```

# DomainCheckbox

## Description
`DomainCheckbox` is a customizable checkbox component for React Native that allows users to select or deselect an option. It uses `react-native-vector-icons/MaterialIcons` for the check icon and supports size and color customization.

![image](https://github.com/user-attachments/assets/02163f98-a4ea-42d0-9c57-3620f739fc12)

## Props Table

| Props      | Type                      | Required | Description                                         |
|-----------|--------------------------|----------|-----------------------------------------------------|
| `checked`  | `boolean`                 | ✅ Yes   | Determines if the checkbox is checked or not.      |
| `onChange` | `(checked: boolean) => void` | ✅ Yes   | Callback function triggered when the checkbox state changes. |
| `size`     | `number`                   | ❌ No    | Sets the size of the checkbox (default: `24`).     |
| `color`    | `string`                   | ❌ No    | Sets the color of the checkbox (default: `#6200EE`). |

## Example Usage

```tsx
import { DomainCheckbox } from "domaincomponent";
import { View, Text } from 'react-native';
import { useState } from "react";

const DomainCheckboxExample = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <DomainCheckbox checked={isChecked} onChange={setIsChecked} color="blue" size={30} />
                <Text>Option</Text>
            </View>
            <Text>{isChecked ? "Selected" : "Not Selected"}</Text>
        </View>
    );
}

export default DomainCheckboxExample;
```

# DomainRadioGroup Component

## Description
`DomainRadioGroup` is a React Native component that allows users to select a single option from a group of radio buttons. It supports custom styling, sizes, and colors.

![image](https://github.com/user-attachments/assets/9b1c4373-709a-417e-9b12-dfe6dcce8599)

## Props Table

| Props          | Type                    | Required | Description                                              |
| ------------- | ----------------------- | -------- | -------------------------------------------------------- |
| `options`     | `string[]`               | ✅ Yes   | Array of options to display as radio buttons.            |
| `selectedIndex` | `number`               | ✅ Yes   | The index of the currently selected radio button.       |
| `onSelect`    | `(index: number) => void` | ✅ Yes   | Callback function called when a radio button is selected. |
| `size`        | `number`                 | ❌ No    | Size of the radio button. Defaults to `20`.             |
| `color`       | `string`                 | ❌ No    | Color of the selected radio button. Defaults to `black`. |
| `labelStyle`  | `object`                 | ❌ No    | Custom styles for the radio button label text.          |
| `style`       | `StyleProp<ViewStyle>`   | ❌ No    | Custom styles for the radio group container.            |

## Example Usage

```tsx
import { DomainRadioGroup } from "domaincomponent";
import { useState } from "react";
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
```

# DomainSlider Component

## Description
The `DomainSlider` component is a customizable slider that allows users to select a value within a specified range. It supports touch-based interaction and dynamic value updates.

![image](https://github.com/user-attachments/assets/3b5f570b-71ad-443f-88e7-ba6a0816b3bb)

## Props Table
| Prop Name       | Type          | Required | Description |
|----------------|--------------|---------|-------------|
| `min`          | `number`      | ❌ No     | The minimum selectable value. |
| `max`          | `number`      | ❌ No   | The maximum selectable value. |
| `step`         | `number`      | ❌ No     | The increment between values. |
| `onValueChange` | `(value: number) => void` | ❌ No | Callback function triggered when the value changes. |
| `color`        | `ColorValue`  | ❌ No  | The color of the slider thumb. |

## Example Usage
```tsx
import { DomainSlider } from 'domaincomponent';
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
```

## Features
- Supports custom min/max values.
- Adjustable step size.
- Customizable slider thumb color.
- Real-time value updates.
- Smooth touch-based interaction.

## Notes
- Ensure the `step` value is appropriate for the range to avoid unexpected behavior.
- The slider width is currently fixed at `300` pixels.
- Can be enhanced with additional styling and animations.

---
This component is useful for applications that require user input within a numerical range, such as volume control, brightness adjustment, or financial calculations.

# DomainHelperText Component

## Description
The `DomainHelperText` component is a reusable helper text component for React Native applications. It is designed to display validation messages or additional information below an input field.

![image](https://github.com/user-attachments/assets/4805d8b3-aa69-469a-b6b4-44b9b50d2e62)

## Props Table

| Prop       | Type    | Required | Description |
|------------|--------|---------|-------------|
| `text`     | string | ✅ Yes       | The text to be displayed. |
| `visible`  | boolean | ✅ Yes      | Controls the visibility of the helper text. |
| `color`    | string  |  ❌ No  | Defines the color of the text. |

## Example Usage 
```tsx
import { useState } from 'react';
import { View, Button } from 'react-native';
import { DomainHelperText, DomainTextInput } from 'domaincomponent';

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
    );
};

export default DomainHelperTextExample;
```

# DomainDropdownMenu

## Description
`DomainDropdownMenu` is a customizable dropdown menu component for React Native. It allows users to display a list of selectable options in a dropdown format and supports custom rendering of menu items.

![image](https://github.com/user-attachments/assets/c2e60180-51e7-44d3-b8be-cf1f67e02c6c)

## Props Table
| Prop Name      | Type                                  | Required | Description |
|---------------|-------------------------------------|---------|-------------|
| `options`     | `string[]`                          | ✅ Yes   | Array of strings representing the dropdown menu options. |
| `style`       | `StyleProp<ViewStyle>`              | ❌ No  | Style applied to the menu button. |
| `children`    | `React.ReactNode`                   | ✅ Yes  | The element that triggers the dropdown when clicked. |
| `optionsRender` | `ListRenderItem<string>`           | ❌ No  | Function to customize how menu options are rendered. |
| `dropdownStyle` | `StyleProp<ViewStyle>`            | ❌ No  | Style applied to the dropdown container. |


## Example Usage
```tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { DomainDropdownMenu } from 'domaincomponent';
import { useState } from 'react';

const DomainDropdownMenuExample = () => {
    const options = ['Profile', 'Settings', 'Logout', 'Test', 'Exp'];
    const [visible, setVisible] = useState(false);

    const handleSelect = (item) => {
        setVisible(false);
        console.log(`Selected: ${item}`);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <DomainDropdownMenu
                options={options}
                dropdownStyle={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}
                optionsRender={({ item }) => (
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => handleSelect(item)}>
                        <Text style={{ fontSize: 16 }}>{item}</Text>
                    </TouchableOpacity>
                )}
            >
                <Text style={{ fontSize: 18, color: 'blue' }}>☰ Menu</Text>
            </DomainDropdownMenu>
        </View>
    );
}

export default DomainDropdownMenuExample;
```
## Customization
- You can pass `optionsRender` to define a custom rendering of the dropdown options.
- The `dropdownStyle` prop allows modifying the appearance of the dropdown container.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

# DomainHeader Component

## Description
The `DomainHeader` component is a customizable header component for React Native applications. It includes a back navigation button, a title, and an optional right-side component.

![image](https://github.com/user-attachments/assets/f2ba152b-b959-489d-9f89-a5b64b5398df)

## Props Table

| Prop             | Type                 | Required | Description            |
|-----------------|----------------------|----------|----------------------|
| `navigation`    | `() => void`         | ❌ No       | Function to handle back navigation. |
| `title`         | `string`             | ✅ Yes      | The title displayed in the header. |
| `rightComponent` | `React.ReactNode`    | ❌ No       | Optional component displayed on the right side. |
| `backgroundColor` | `ColorValue`        | ❌ No       | Background color of the header. |
| `color`         | `ColorValue`         | ❌ No       | Text and icon color. |

## Example Usage

```tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { DomainHeader } from 'domaincomponent';
import { useNavigation } from '@react-navigation/native';

const DomainHeaderExample = () => {
    const navigation = useNavigation();

    const headerRightComponent = () => {
        return (
            <TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 26 }}>+</Text>
            </TouchableOpacity>
        );
    };

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
    );
};

export default DomainHeaderExample;
```

# DomainAlert

## Description
`DomainAlert` is a React Native component that provides an alert notification system. It supports three types of alerts: success, failed, and warning. The alerts are displayed temporarily and automatically disappear after a set duration.

![image](https://github.com/user-attachments/assets/0671b44c-c5f2-4dc0-99ab-595cfd2a60fc)

### Example Usage
```tsx
import { showAlert, DomainMainContainer, DomainAlert } from "domaincomponent";
import { Button, StatusBar } from "react-native";

const DomainAlertExample = () => {
    const success = () => {
        showAlert({ title: "Operation Successful!", type: 'success' });
    };

    const failed = () => {
        showAlert({ title: "Operation Failed!", type: 'failed' });
    };

    const warning = () => {
        showAlert({ title: "Operation Warning!", type: 'warning' });
    };

    return (
        <DomainMainContainer>
            <StatusBar />
            <DomainAlert />
            <Button title="Success" onPress={success} />
            <Button title="Failed" onPress={failed} />
            <Button title="Warning" onPress={warning} />
        </DomainMainContainer>
    );
};

export default DomainAlertExample;
```
## Props Table

| Prop | Type | Required | Description |
|------|------|---------|-------------|
| `title` | `string` | ✅ Yes | The text displayed in the alert. |
| `type` | `'success' , 'failed' , 'warning'` | ❌ No | The alert type, affecting its appearance. |
| `duration` | `number` | ❌ No | Time (in ms) before the alert disappears. |

## Notes
- Ensure that `DomainAlert` is included in your component tree for the alerts to be displayed correctly.
- The alert automatically disappears after the specified duration.
- The `showAlert` function can be called anywhere in the app to display an alert.

--- 

# DomainMultipleSelect

## Description
`DomainMultipleSelect` is a multi-select drop-down component from react-native-domain-ui, suitable for React Native applications. It allows users to select multiple values ​​from a set of options, supports custom option display, search, maximum/minimum selection limits and other functions.

![image](https://github.com/user-attachments/assets/0d072f27-927b-49b7-88ca-53976656037a)

### Example Usage
```tsx
import { View, Text } from 'react-native';
import {
    DomainMainContainer,
    DomainMultipleSelect,
} from 'react-native-domain-ui';
import { useState } from 'react';

const DomainMultipleSelectExample = () => {
    const [selectedValue, setSelectedValue] = useState<string[]>([]);

    const options = [
        { id: '1', name: 'One', left: <Text>one</Text>,  right: <Text>one</Text> },
        { id: '2', name: 'Two' },
        { id: '3', name: 'Three' },
        { id: '4', name: 'Four' },
        { id: '5', name: 'Five' },
        { id: '6', name: 'One' },
        { id: '7', name: 'Two' },
        { id: '8', name: 'Three' },
        { id: '9', name: 'Four' },
        { id: '10', name: 'Five' },
    ];

    return (
        <DomainMainContainer>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '80%', }}>
                    <View style={{ marginVertical: 10 }}>

                        <DomainMultipleSelect
                            options={options}
                            value={selectedValue}
                            onChange={(newValue) => setSelectedValue(newValue ?? [])}
                            label="Test"
                            resetButton={true}
                            labelBackground='#f0f0f0'
                            placeholder="Select"
                            selectedColor={'#f0f0f0'}
                        />

                        <Text>{selectedValue}</Text>
                    </View>
                </View>
            </View>
        </DomainMainContainer>
    )
}

export default DomainMultipleSelectExample;
```

## Props Table

|Prop | Type | Required | Description |
|------|------|---------|-------------|
|style | StyleProp<ViewStyle> | ❌ No | Custom styling for the component container.|
|search | boolean | ❌ No | Enables the search bar inside the dropdown.|
|options | Option[] | ✅ Yes | Array of selectable options. Each option includes id, name, and optional left, right.|
|value | string[] | ❌ No | Currently selected option IDs.|
|onChange | (value: string[]) => void | ❌ No | Callback when selected values are changed.|
|placeholder | string | ❌ No | Placeholder text shown when nothing is selected.|
|label | string | ❌ No | Title/label displayed above the selector.|
|labelColor | ColorValue | ❌ No | Color of the label text.|
|labelBackground | ColorValue | ❌ No | Background color of the label area.|
|resetButton | boolean | ❌ No | Whether to show a reset button to clear selections.|
|helperText | string | ❌ No | Additional text shown below the field for guidance or error messages.|
|helperTextColor | ColorValue | ❌ No | Color for the helper text.|
|axSelection | number | ❌ No | Maximum number of items allowed to be selected.|
|minSelection | number | ❌ No | Minimum number of items required to be selected.|
|selectedColor | ColorValue | ❌ No | Background color for selected items.|

### **Option Object Structure**
Each option in the `options` array follows this structure:

```ts
export interface Option {
    id: string;         // Unique identifier for the option
    name: string;       // Display name of the option
    left?: ReactNode;   // (Optional) Left-side icon/component
    right?: ReactNode;  // (Optional) Right-side icon/component
}
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
