import React, { useState, useEffect } from "react";

import { SafeAreaView } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import Profile from "./Profile";
import SubBody from "./SubBody";

const Stack = createStackNavigator();

const SubLayout = () => {
  const route = useRoute();
  const select = route.params?.select || "";
  const profile = route.params?.profile || "";
  return (
    <Stack.Navigator>
      {profile ? (
        <Stack.Screen name="Profile" component={Profile} />
      ) : (
        <Stack.Screen
          name="SubBody"
          component={SubBody}
          initialParams={{ select }}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },

            headerLeft: null,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default SubLayout;
