import React, { useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import colors from './colors';

const slides = [
  { uri: require('../images/undraw_Bus_stop_re_h8ej.png'), description: 'Image 1 description' },
  { uri: require('../images/undraw_Transfer_money_re_6o1h.png'), description: 'Image 2 description' },
  { uri: require('../images/undraw_Travel_mode_re_2lxo.png'), description: 'Image 3 description' },
  { uri: require('../images/undraw_Mobile_pay_re_sjb8.png'), description: 'Image 4 description' },
  { uri: require('../images/undraw_Payments_re_77x0.png'), description: 'Image 5 description' },
];

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={slide.uri} />
          </View>
        ))}
      </Animated.ScrollView>

      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const dotColor = scrollX.interpolate({
            inputRange: [
              (index - 1) * Dimensions.get('window').width,
              index * Dimensions.get('window').width,
              (index + 1) * Dimensions.get('window').width,
            ],
            outputRange: ['#888', '#111', colors.Mustard],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, { backgroundColor: dotColor }]}
            />
          );
        })}
      </View>

      <View style={styles.descriptionContainer}>
        {slides.map((slide, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * Dimensions.get('window').width,
              index * Dimensions.get('window').width,
              (index + 1) * Dimensions.get('window').width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.Text key={index} style={[styles.description, { opacity }]}>
              {slide.description}
            </Animated.Text>
          );
        })}
      </View>

      <View style={styles.onboardButton}>
        <TouchableOpacity>
          <Text>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.9,
    height: height,
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: width * 0.6,
  },
  dot: {
    borderWidth: 2,
    width: height * 0.02,
    height: height * 0.02,
    borderRadius: height * 0.01,
    marginHorizontal: height * 0.004,
    backgroundColor: colors.Mustard,
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: height * 0.4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 16,
  },
  onboardButton: {
    borderWidth: 2,
    width: height * 0.02,
    height: height * 0.02,
  },
});

export default Carousel;
