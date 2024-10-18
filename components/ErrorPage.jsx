import {View, StyleSheet, Text, Pressable} from "react-native";
import {Link} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../constants/Colors";

export default function ErrorPage({errorTitle, errorMessage, retryLink}) {
  return (
    <View style={styles.container}>
      <FontAwesome name="exclamation-triangle" size={48} color={Colors.errorColor} />
      <Text style={styles.errorTitle}>{errorTitle}</Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Link href={retryLink} asChild>
        <Pressable>
          {({pressed}) => (
            <View style={[styles.retryButton, pressed ? styles.retryButtonPressed : styles.retryButtonDefault]}>
              <FontAwesome name="refresh" size={24} color={Colors.neutralColor} />
              <Text style={styles.retryText}>Retry</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondaryColor,
    padding: 20
  },
  errorTitle: {
    color: Colors.textColor,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16
  },
  errorText: {
    color: Colors.secondaryColorVeryLight,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8
  },
  retryButtonPressed: {
    backgroundColor: Colors.secondaryColorVeryLightButtonPressed
  },
  retryButtonDefault: {
    backgroundColor: Colors.secondaryColorLight
  },
  retryText: {
    color: Colors.neutralColor,
    fontSize: 16,
    marginLeft: 8
  }
});
