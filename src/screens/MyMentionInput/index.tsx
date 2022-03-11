import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../navigation";

interface MyMentionInputProps
  extends NativeStackScreenProps<RootStackParamList, "MyMentionInput"> {}

const MyMentionInput: React.FC<MyMentionInputProps> = ({ route }) => {
  const { name, id } = route.params; // send object param from Home 

  return (
    <View>
      <Text> My Mention Input {name} {id}</Text>
    </View>
  );
};

export default MyMentionInput;
