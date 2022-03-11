import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { RootStackParamList } from "../../navigation";

interface HomeProps extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const navigateToMyMentionInput = () => navigation.navigate('MyMentionInput', { name: 'K', id: 1 });

  return (
    <View>
      <Text>Home Page</Text>
      <TouchableWithoutFeedback style={{width: '100%'}} onPress={navigateToMyMentionInput} >
        <Text>My Mention Input</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Home;
