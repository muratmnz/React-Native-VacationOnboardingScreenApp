import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Animated,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {theme, images} from '../constants';

//Constants
const {onboarding1, onboarding2, onboarding3} = images;
const {COLORS, FONTS, SIZES} = theme;
const onboardingDatas = [
  {
    title: "Let's travelling",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: onboarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: onboarding2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: onboarding3,
  },
];

const OnBoarding = () => {
  const [finished, setFinished] = useState(false);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      try {
        if (Math.floor(value / SIZES.width) === onboardingDatas.length - 2) {
          setFinished(true);
        }
      } catch (error) {
        console.log(error);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  //rendering
  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        decelerationRate={0}
        scrollEventThrottle={12}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        <StatusBar hidden={true}></StatusBar>
        {onboardingDatas.map((item, index) => (
          //center
          //bottom
          <View key={`img-${index}`} style={{width: SIZES.width}}>
            {/* Image part */}
            <View
              style={{
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item.img}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            {/* Text part */}
            <View style={{position: 'absolute', bottom: '7%'}}>
              <Text
                style={{...FONTS.h1, color: COLORS.green, textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.black,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                }}>
                {item.description}
              </Text>
            </View>
            {/* Button part */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 110,
                height: 40,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                backgroundColor: COLORS.green,
              }}
              onPress={null}>
              <Text
                style={{
                  color: 'white',
                  ...FONTS.h2,
                  position: 'absolute',
                  right: 10,
                }}>
                {finished ? 'Lets Go' : 'Skip'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPos = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        {onboardingDatas.map((item, index) => {
          const opacity = dotPos.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPos.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[
                styles.dot,
                {width: dotSize, height: dotSize},
              ]}></Animated.View>
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '20%', //responsive
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.black,
    marginHorizontal: SIZES.radius,
  },
});

export default OnBoarding;
