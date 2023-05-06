import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

function Home(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <View>
      <Text>Home</Text>
      <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
      <Icon name="rowing" />
    </View>
  );
}

export default Home;
