import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  AdvacedAnimationCarousel,
  Experiment,
  Home,
  MyMentionInput,
} from "../screens";

export type RootStackParamList = {
  Home: undefined;
  MyMentionInput: { name: string; id: number };
  Experiment: undefined;
};

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="AdvancedAnimationCarousel">
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen name="MyMentionInput" component={MyMentionInput} />
      <Stack.Screen name="Experiment" component={Experiment} />
      <Stack.Screen
        name="AdvancedAnimationCarousel"
        component={AdvacedAnimationCarousel}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
