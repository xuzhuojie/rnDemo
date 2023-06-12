import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Message from '../pages/message';
import Mine from '../pages/mine';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        {/*<Tab.Navigator>*/}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon name="home" color="#517fa4" />
            ),
          }}
        />
        <Tab.Screen
          name="消息"
          component={Message}
          options={{
            tabBarIcon: () => <Icon name="chat" color="#517fa4" />,
          }}
        />
        <Tab.Screen
          name="我的"
          component={Mine}
          options={{
            tabBarIcon: () => <Icon name="person" color="#517fa4" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
