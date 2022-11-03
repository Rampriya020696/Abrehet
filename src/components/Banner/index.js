import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {colors} from '../../utils/colors';

const DEVICE_WIDTH = Dimensions.get('window').width;

class Banner extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex,
          });
        },
      );
    }, 10000);
  };

  setSelectedIndex = event => {
    // width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    // get current position of the scrollview
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({selectedIndex});
  };

  render() {
    const {images} = this.props;
    const {selectedIndex} = this.state;
    return (
      <View style={{height: '100%', width: '100%'}}>
        <TouchableOpacity onPress={this.props.onPress}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={this.setSelectedIndex}
            ref={this.scrollRef}>
            {images.map(image => (
              <Image
                key={image}
                source={image}
                style={styles.backgroundImage}
              />
            ))}
          </ScrollView>

          <View style={styles.circleDiv}>
            {images.map((image, i) => (
              <Text
                key={image}
                style={selectedIndex === i ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: 200,
    width: DEVICE_WIDTH,
  },
  circleDiv: {
    position: 'absolute',
    top: 160,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircle: {
    borderRadius: 3,
    margin: 5,
    backgroundColor: colors.facebook,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    fontSize: 12,
    margin: 3,
    color: colors.header,
    opacity: 0.5,
  },
  dotActive: {
    fontSize: 24,
    margin: 3,
    color: colors.header,
    opacity: 1,
  },
});

export default Banner;
