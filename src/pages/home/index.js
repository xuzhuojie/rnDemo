import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

function Home(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default Home;
