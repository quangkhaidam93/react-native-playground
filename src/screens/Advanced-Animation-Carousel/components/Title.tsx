import React from "react";
import { Text } from "react-native";
import { TITLE_SIZE } from "../constants";
import Item from "./Item";

interface TitleProps {
  index: number;
  text: string;
  color: string;
}


const Title: React.FC<TitleProps> = ({ index, text, color }) => (
  <Item style={{ height: TITLE_SIZE * 3, justifyContent: 'flex-end' }} >
    <Text
      key={`title-${index}`}
      style={{
        fontSize: TITLE_SIZE,
        fontWeight: "900",
        color,
      }}
    >
      {text}
    </Text>
  </Item>
);

export default Title;
