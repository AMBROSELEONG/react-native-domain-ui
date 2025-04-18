import { DomainButton, DomainMainContainer } from "react-native-domain-ui"

const DomainButtonExample = () => {
    return (
        <DomainMainContainer>
            <DomainButton label="Test" onPress={() => {console.log('test')}} style={{backgroundColor: '#ff1234', width: '80%', alignSelf: 'center', marginTop: 20}} labelStyle={{color: '#fff'}}/>
        </DomainMainContainer>
    )
}

export default DomainButtonExample;