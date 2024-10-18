import {View, StyleSheet} from "react-native";
import Logo from "./Logo";

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo height={50} width={220} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});
