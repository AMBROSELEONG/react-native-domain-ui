import React from 'react';
import { Switch } from 'react-native';
import type { DomainSwitchButtonProps } from './SwitchButtonProps';

const DomainSwitchButton: React.FC<DomainSwitchButtonProps> = ({
  style,
  ...restProps
}) => {
  return <Switch style={[style]} {...restProps} />;
};

export default DomainSwitchButton;
