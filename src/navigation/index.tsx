import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, MyMentionInput } from "../screens";

export type RootStackParamList = {
  Home: undefined;
  MyMentionInput: { name: string, id: number }
}

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen name="MyMentionInput" component={MyMentionInput} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
