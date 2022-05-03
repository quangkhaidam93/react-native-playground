import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Image, Animated, StyleSheet, ImageBackground } from "react-native";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Description, Details, Title } from "./components";
import { colors, DURATION, height, IMAGE_SIZE } from "./constants";
import { datas } from "./mocks/detailsList";
import {
  Easing,
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";
import posed, { Transition as PoseTransition } from "react-native-pose";

const transition = (
  <Transition.Together>
    <Transition.Out
      type="slide-bottom"
      durationMs={DURATION}
      interpolation="easeIn"
    />
    <Transition.Change />
    <Transition.In
      type="slide-bottom"
      durationMs={DURATION}
      interpolation="easeOut"
    />
  </Transition.Together>
);

const config = {
  transition: {
    type: 'tween',
    duration: DURATION,
    easing: Easing.elastic(0.9)
  }
}

const PosedView = posed.View({
  enter: { opacity: 1, rotate: "0deg", ...config },
  exit: { opacity: 0, rotate: "180deg", ...config },
});

const AdvancedAnimationCarousel = () => {
  const [index, setIndex] = useState<number>(0);
  const color = index % 2 === 1 ? colors.lightText : colors.darkText;
  const headingColor = index % 2 === 1 ? colors.lightText : colors.darkBg;
  const activeIndex = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;
  const ref = useRef<TransitioningView>(null);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: activeIndex,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  }, []);

  const setActiveIndex = useCallback((newIndex: number) => {
    activeIndex.setValue(newIndex);
    ref.current?.animateNextTransition();
    setIndex(newIndex);
  }, []);

  const translateY = animation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [height, 0, -height],
  });

  return (
    <FlingGestureHandler
      key="up"
      direction={Directions.UP}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === datas.length - 1) return;
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key="dow"
        direction={Directions.DOWN}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) return;
            setActiveIndex(index - 1);
          }
        }}
      >
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { height: height * datas.length, transform: [{ translateY }] },
            ]}
          >
            {datas.map((_, i) => (
              // <View
              //   key={i}
              //   style={{
              //     height,
              //     backgroundColor: i % 2 === 0 ? colors.lightBg : colors.darkBg,
              //   }}
              // ></View>
              <ImageBackground 
                source={{ uri: datas[index].image as string, cache: 'force-cache' }}
                blurRadius={50}
                style={{height}}
              />
            ))}
          </Animated.View>
          <PoseTransition>
            {index % 2 === 0 ? (
              <PosedView
                key="image0"
                style={[
                  styles.imageContainer,
                  {
                    borderColor:
                      index % 2 === 0 ? colors.darkBg : colors.lightBg,
                  },
                ]}
              >
                <Image
                  source={{ uri: datas[index].image as string }}
                  style={styles.image}
                />
              </PosedView>
            ) : (
              <PosedView
                key="image1"
                style={[
                  styles.imageContainer,
                  {
                    borderColor:
                      index % 2 === 0 ? colors.darkBg : colors.lightBg,
                  },
                ]}
              >
                <Image
                  source={{ uri: datas[index].image as string, cache: 'force-cache' }}
                  style={styles.image}
                />
              </PosedView>
            )}
          </PoseTransition>
          <Transitioning.View
            ref={ref}
            transition={transition}
            style={{
              padding: 20,
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Title
              index={index}
              text={datas[index].title as string}
              color={headingColor}
            />
            <Details color={color} index={index} />
            <Description
              index={index}
              text={datas[index].description as string}
              color={headingColor}
            />
          </Transitioning.View>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  imageContainer: {
    position: "absolute",
    right: -IMAGE_SIZE / 2.2,
    top: (height - IMAGE_SIZE) / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -5,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 22,

    elevation: 14,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    resizeMode: "cover",
  },
});

export default AdvancedAnimationCarousel;
