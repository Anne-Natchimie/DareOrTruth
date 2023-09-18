import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import ItemCategory from './component/ItemCategory';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DareOrTruth from './screens/DareOrTruth';
import firestore from '@react-native-firebase/firestore';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {

    const categories = useSelector(state => state.category)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => <ItemCategory id={item.id} name={item.name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const App = () => {

  useEffect(() => {
    firestore()
      .collection('Users')
      .add({
        name: 'Ada Lovelace',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DareOrTruth" component={DareOrTruth} />
      </Stack.Navigator>
    </NavigationContainer>

    // onPress={goToDareOrTruth}

  );
}

export default App;