import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

function Login(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

export default Login;
