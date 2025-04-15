import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { ActivityIndicatorCSS } from '../../objects/style';

const DomainLoading: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (!loading) return null;

  return (
    <View style={ActivityIndicatorCSS.container}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export default DomainLoading;
