import React from 'react';
import RemixIcon from 'react-native-remix-icon';

interface IconProps {
  name: string;
  type?: 'fill' | 'line';
  color?: string;
  size?: number;
}

const Icon = (props: IconProps) => {
  const {
    name,
    type = 'line',
    color = 'black',
    size = 32,
  } = props;
  return (
    <RemixIcon
    name={`${name}-${type}`}
    color={color}
    size={size}
    />
  );
};

export default Icon;
