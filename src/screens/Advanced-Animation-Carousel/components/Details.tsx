import React from "react";
import { View, Text } from "react-native";
import { SPACING } from "../constants";
import { datas, detailList, iconsByType } from "../mocks/detailsList";
import Icon from "./Icon";
import Item from "./Item";

interface DetailsProps {
  color: string;
  index: number;
}

const Details: React.FC<DetailsProps> = ({ color, index }) => (
  <View style={{ marginVertical: SPACING }}>
    {detailList.map((key) => (
      <View
        key={key}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <Icon type={iconsByType[key]} />
        <Item style={{ flex: 1, height: 26, justifyContent: 'center' }} >
          <Text
            key={`${key}-${index}`}
            style={{ fontSize: 16, color, fontWeight: '700' }}
          >
            {datas[index][key]}
          </Text>
        </Item>
      </View>
    ))}    
  </View>
);

export default Details;
