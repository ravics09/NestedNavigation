import React from 'react';
import {SafeAreaView} from 'react-native';
import GlobalNavigation from './src/navigation/globalNavigation';

const App = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#F0F8FF'}}>
    <GlobalNavigation />
  </SafeAreaView>
);

export default App;
