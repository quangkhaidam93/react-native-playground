import React from 'react';
import { View, ViewProps } from 'react-native';

interface ItemProps extends ViewProps {}

const Item: React.FC<ItemProps> = ({ children, style }) => {
  return <View
    style={[
      {
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      },
      style
    ]}
  >
    {children}
  </View>
}

export default Item;