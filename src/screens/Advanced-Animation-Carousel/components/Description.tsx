import React from "react";
import { Text } from "react-native";
import Item from "./Item";

interface DescriptionProps {
  index: number;
  text: string;
  color: string;
}

const Description: React.FC<DescriptionProps> = ({ index, text, color }) => (
  <Item>
    <Text key={`description-${index}`} style={{ fontSize: 16, color }}>
      {text}
    </Text>
  </Item>
);

export default Description;
