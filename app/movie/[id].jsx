import {useLocalSearchParams, Stack, useRouter, Link} from "expo-router";
import {StyleSheet, View, Text} from "react-native";
import MovieDetailsWrapper from "../../components/MovieDetails/MovieDetailsWrapper";
import ScreenLayout from "../../components/ScreenLayout";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

export default function MovieDetailsPage() {
  const {id} = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Link href={() => router.back()} asChild>
              <View style={styles.header}>
                <FontAwesome name="arrow-circle-left" size={36} color={Colors.textColor} />
                <Text style={styles.headerText}>Back</Text>
              </View>
            </Link>
          ),
          headerStyle: {
            backgroundColor: Colors.lightBackgroundColor
          },
          headerTintColor: Colors.textColor,
          headerTitle: ""
        }}
      />
      <MovieDetailsWrapper id={id} />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 14,
    alignItems: "center"
  },
  headerText: {
    color: Colors.textColor,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10
  }
});
