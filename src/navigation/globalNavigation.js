import React from 'react';
import {TouchableOpacity} from 'react-native';

import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import NetworkScreen from '../screens/network';
import SettingScreen from '../screens/setting';
import NotificationScreen from '../screens/notification';
import EventsScreen from '../screens/events';
import GroupsScreen from '../screens/groups';
import ProfileScreen from '../screens/profile';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then(); // To avoid 'Unrecognized font family ionicons' Warning

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitleVisible: false,
      }}>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{title: 'Login Screen'}}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{title: 'Register Screen'}}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
            title: 'Profile Screen',
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: 20 }}>
                <Ionicons
                  name='arrow-back'
                  size={25}
                  style={[{ color: 'black' }]}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              </TouchableOpacity>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

const NetworkStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="NetworkScreen"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="NetworkScreen"
        component={NetworkScreen}
        options={() => ({
            title: 'Network Screen',
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: 20 }}>
                <Ionicons
                  name='arrow-back'
                  size={25}
                  style={[{ color: 'black' }]}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              </TouchableOpacity>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

const SettingStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'},
        headerBackTitle: 'back',
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={() => ({
            title: 'Setting Screen',
            headerLeft: () => (
              <TouchableOpacity style={{ paddingLeft: 20 }}>
                <Ionicons
                  name='arrow-back'
                  size={25}
                  style={[{ color: 'black' }]}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              </TouchableOpacity>
            ),
          })}
      />
    </Stack.Navigator>
  );
};

export const SideDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home Screen" component={Bottom} />
    <Drawer.Screen
      name="Profile"
      component={ProfileStack}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="Network"
      component={NetworkStack}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="Setting"
      component={SettingStack}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

export const Bottom = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="home"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Notification',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="notifications"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Events"
      component={EventsScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Events',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="easel"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name="Groups"
      component={GroupsScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Groups',
        tabBarActiveTintColor:'black',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="people-sharp"
            size={23}
            color={focused ? 'black' : '#808080'}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
);

const GlobalNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SideDrawer"
        component={SideDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default GlobalNavigation;
