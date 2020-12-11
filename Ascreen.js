import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const A = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>A screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Bscreen')}>
        <Text style={{fontSize: 26}}>Go to EditScreen B</Text>
      </TouchableOpacity>
    </View>
  );
};

export default A;
