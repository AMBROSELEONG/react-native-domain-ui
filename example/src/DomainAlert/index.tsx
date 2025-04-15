import { showAlert, DomainMainContainer, DomainAlert } from "domaincomponent"
import { Button, StatusBar } from "react-native";

const DomainAlertExample = () => {
    const success = () => {
        showAlert({ title: "Operation Successful!", type: 'success' });
    }

    const failed = () => {
        showAlert({ title: "Operation Failed!", type: 'failed' });
    }

    const warning = () => {
        showAlert({ title: "Operation Warning!", type: 'warning' });
    }
    return (
        <DomainMainContainer>
            <StatusBar />
            <DomainAlert />
            <Button title="Success" onPress={() => success()} />
            <Button title="Failed" onPress={() => failed()} />
            <Button title="Warning" onPress={() => warning()} />
        </DomainMainContainer>
    )
}

export default DomainAlertExample;