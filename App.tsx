import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ConvexProvider, ConvexReactClient } from "convex/react";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TodoScreen from "./screens/TodoScreen";

const Stack = createNativeStackNavigator();

const convex = new ConvexReactClient(
  process.env.EXPO_PUBLIC_CONVEX_URL!
);

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

          {/* 🔐 LOGIN */}
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                onLogin={() => {
                  
                  props.navigation.replace("Todo");
                }}
              />
            )}
          </Stack.Screen>

          {/* 📝 SIGNUP */}
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
          />

          {/* ✅ TODO */}
          <Stack.Screen
            name="Todo"
            component={TodoScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </ConvexProvider>
  );
}