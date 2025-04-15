import { MainContainer } from '../../objects/style';
import type { DomainMainContainerProps } from './MainContainerProps';
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

const DomainMainContainer: React.FC<DomainMainContainerProps> = ({
  children,
  keyboardAvoidingEnabled = false,
}) => {
  return keyboardAvoidingEnabled ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={MainContainer.container}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  ) : (
    <SafeAreaView style={MainContainer.container}>{children}</SafeAreaView>
  );
};

export default DomainMainContainer;
