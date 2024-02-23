import React, { useState, useEffect } from "react";

import { SafeAreaView, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import Profile from "./Profile";
import SubBody from "./SubBody";
import SubBody2 from "./SubBody2";

const Stack = createStackNavigator();

const SubLayout = () => {
  const route = useRoute();
  const select = route.params?.select || "";
  const profile = route.params?.profile || "";
  return (
    <SafeAreaView style={styles.wrapper}>
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
        <Stack.Screen
            name="SubBody2"
            component={SubBody2}
            initialParams={{ select }}
            options={{
              title: "",
              headerStyle: {
                height: 0,
              },
              headerLeft: null,
            }}
          />
      </Stack.Navigator>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'white'
  }
})

export default SubLayout;
