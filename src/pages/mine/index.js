import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

function Mine(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <View>
      <Text>Mine</Text>
      <Icon name="user-alt" color="#517fa4" />
      <Icon name="people" color="#517fa4" />
    </View>
  );
}

export default Mine;
