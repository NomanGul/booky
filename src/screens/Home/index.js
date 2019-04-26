import React from "react";
import { Text, Image, View } from "react-native";
import { Button } from "react-native-material-ui";
import { animated } from "react-spring";
import {
  styles,
  animateSubline,
  animateImg,
  animateBtnContainer
} from "./styles";

const Home = props => {
  const AnimatedText = animated(Text);
  const AnimatedImg = animated(Image);
  const AnimatedView = animated(View);
  const {
    navigation: { navigate }
  } = props;
  return (
    <View style={styles.homeContainer}>
      <View style={styles.imgContainer}>
        <AnimatedImg
          style={animateImg()}
          source={require("../../assets/images/book.png")}
        />
      </View>
      <AnimatedText style={animateSubline()}>🅱️ooky</AnimatedText>
      <AnimatedView style={animateBtnContainer()}>
        <Button
          text="Let's Start Exploring 👉"
          onPress={() => navigate("BooksList")}
          raised
          style={{
            container: styles.btnContainer,
            text: styles.btnText
          }}
        />
      </AnimatedView>
    </View>
  );
};

export default Home;
