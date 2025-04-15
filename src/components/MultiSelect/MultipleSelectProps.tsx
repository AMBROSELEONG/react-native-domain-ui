import type { StyleProp, ViewStyle, ColorValue } from 'react-native';
import React from 'react';

export interface Option {
    id: string;
    name: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export interface DomainMultipleSelectProps {
  style?: StyleProp<ViewStyle>;
  search?: boolean;
  options: Option[];
  value?: string[]; 
  onChange?: (value: string[]) => void; 
  placeholder?: string;
  label?: string;
  labelColor?: ColorValue;
  labelBackground?: ColorValue;
  resetButton?: boolean;
  helperText?: string;
  helperTextColor?: ColorValue;
  maxSelection?: number; 
  minSelection?: number;
}