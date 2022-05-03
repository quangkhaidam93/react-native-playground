import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

interface IconProps {
  type: string;
}

const Icon: React.FC<IconProps> = ({ type }) => (
  <SimpleLineIcons
    name={type}
    size={26}
    color="#A5A6AA"
    style={{ marginRight: 15, height: 26 }}
  />
);

export default Icon;
