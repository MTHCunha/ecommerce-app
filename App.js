import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Account from "./src/screens/Account";
import ProductCreate from "./src/screens/Product/ProductCreate";

//routes
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="account" component={Account}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="productCreate" component={ProductCreate} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
})