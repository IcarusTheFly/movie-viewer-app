import {Stack} from "expo-router";
import {View} from "react-native";
import Header from "../components/Header";
import Colors from "../constants/Colors";

export default function Layout({children}) {
  return (
    <View style={{flex: 1, backgroundColor: Colors.mainBackgroundColor}}>
      <Stack
        screenOptions={{
          headerLeft: () => <Header />,
          headerStyle: {
            backgroundColor: Colors.mainBackgroundColor
          },
          headerTintColor: "white",
          headerTitle: ""
        }}
      />
    </View>
  );
}
