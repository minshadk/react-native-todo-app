import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy cofee", key: "1" },
    { text: "Buy cofee", key: "2" },
    { text: "Buy food", key: "3" }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
