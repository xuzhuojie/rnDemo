import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

function Message(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <View>
      <Text>Message</Text>
      <Icon name="settings" color="#517fa4" />
    </View>
  );
}

export default Message;
