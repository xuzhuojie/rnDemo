import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

function Setting(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <View>
      <Text>Setting</Text>
      <Icon name="settings" color="#517fa4" />
    </View>
  );
}

export default Setting;
