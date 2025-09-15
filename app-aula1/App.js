import { Text, View, StyleSheet } from "react-native"

export default function App () {
  return  (
    <View style={styles.container}>
      <Text style={styles.text}> Hello, World! </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
  description:{
    fontSize: 18,
  }
});