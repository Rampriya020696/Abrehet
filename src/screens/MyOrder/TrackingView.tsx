import {forHorizontalIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
const list = [
  {
    des: 'The shipment has been successfully delivered',
    location: 'Xiamen',
    status: 'completed',
    date: '10.11.2016',
    time: '01:15',
  },
  {
    des: 'The shipment is ready to be picked up',
    location: 'Beijing',
    status: 'completed',
    date: '13.11.2016',
    time: '12:38',
  },
  {
    des: 'The shipment has been processed in location',
    location: 'Beijing',
    status: 'incomplete',
    date: '14.11.2016',
    time: '03: 24',
  },
  {
    des: 'The shipment has been processed in location',
    location: 'Tianjin',
    status: 'incomplete',
    date: '17.11.2016',
    time: '10: 19',
  },
];

const Dot = ({filled}) => {
  const SIZE = 17;
  const filledStyle = {
    backgroundColor: 'lightgreen',
  };
  const hollowStyle = {
    backgroundColor: '#fff',
    borderColor: 'lightgreen',
    borderWidth: 1,
  };
  return (
    <View
      style={[
        filled ? filledStyle : hollowStyle,
        {
          borderRadius: SIZE,
          width: SIZE,
          height: SIZE,
          position: 'absolute',
          right: -9,
        },
      ]}></View>
  );
};

const TrackingView = () => {
  const [trackData, setTrackData] = React.useState(list);

  const handleUpdateTrack = index => {
    const newData = trackData.map((item, idx) => {
      if (idx <= index) {
        return {...item, status: 'completed'};
      } else {
        return {...item, status: 'incompleted'};
      }
    });
    setTrackData(newData);
  };

  const renderTrackList = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity
          onPress={() => handleUpdateTrack(index)}
          style={styles.trackItemContainer}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>{item.date}</Text>
            <Text style={styles.dateText}>{item.time}</Text>
            <Dot filled={item.status === 'completed' ? true : false} />
          </View>
          <View style={styles.desContainer}>
            <Text style={styles.desText}>{item.des}</Text>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [trackData],
  );
  return (
    <View style={{padding: 10}}>
      <View style={styles.headerContainer}>
        <Text>Order #189-1</Text>
        <Text style={{fontSize: 10, color: 'orange'}}>in Transit</Text>
      </View>
      <FlatList data={trackData} renderItem={renderTrackList} />
    </View>
  );
};

export default TrackingView;

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: 'row',
  },
  timeBox: {
    width: 100,
    padding: 12,
    paddingTop: 0,
    alignItems: 'flex-end',
    borderRightColor: 'lightgreen',
    borderRightWidth: 1,
  },
  timeText: {
    fontSize: 15,
    color: 'gray',
  },
  dateText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    minHeight: 70,
  },
  desContainer: {
    padding: 12,
    paddingLeft: 18,
    flex: 1,
    paddingTop: 0,
  },
  desText: {
    fontSize: 17,
    flexShrink: 1,
    fontWeight: 'bold',
    color: 'black',
    minHeight: 60,
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
});
