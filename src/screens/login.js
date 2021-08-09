import React from 'react';
import {View, Text} from 'react-native';

const LoginScreen = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 10,
      }}
      onPress={() => navigation.navigate('RegisterScreen')}>
      New Here ? Register
    </Text>
    <Text
      style={{
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 10,
      }}
      onPress={() => navigation.replace('SideDrawer')}>
      AfterLogin Move to Home
    </Text>
  </View>
);
export default LoginScreen;
