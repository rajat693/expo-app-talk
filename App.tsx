import { View, Text, StyleSheet } from "react-native";

function NativeComponent() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, Native World!</Text>
      </View>
    </View>
  );
}

export default NativeComponent;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
