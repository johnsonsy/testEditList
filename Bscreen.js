import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const dummyData = [
  {title: 'A', selected: false},
  {title: 'B', selected: false},
  {title: 'C', selected: false},
  {title: 'D', selected: false},
  {title: 'E', selected: false},
  {title: 'F', selected: false},
];

const B = () => {
  const [listData, setListData] = useState(dummyData);

  const renderView = ({item, index}) => {
    const {title, selected} = item;

    const selectedViewColor = selected ? 'pink' : 'gray';

    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              const copyList = [...listData];
              copyList[index] = {...item, selected: !selected}; //this line use spread syntax, but you can use Object.assign() instead of it.
              setListData(copyList);
            }}
            style={{height: 60, width: '100%'}}>
            <Text>{title}</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: selectedViewColor,
              height: 20,
              width: 20,
            }}
          />
        </View>
        <View style={{backgroundColor: 'gray', width: '100%', height: 1}} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{marginTop: 86, marginLeft: 30}}
        data={listData}
        renderItem={renderView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default B;
