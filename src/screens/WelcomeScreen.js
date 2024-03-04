import { Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  const navigation = useNavigation();
  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + hp(2))),
      100
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + hp(2.5))),
      300
    );

    setTimeout(() => navigation.navigate("Home"), 4500);
  }, []);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-[#f8ddd2]">
      <StatusBar style="light" />
      <Animated.View
        className="bg-[#bca7a4]/20 rounded-full"
        style={{ padding: ring2padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full p-8"
          style={{ padding: ring1padding }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{ height: hp(35), width: hp(35) }}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2">
        <Text
          className="font-bold text-[#5c5454] tracking-widest "
          style={{ fontSize: hp(5.5) }}
        >
          Savor the Flavor
        </Text>
        <Text
          className="font-medium text-[#5c5454] tracking-widest text-lg"
          style={{ fontSize: hp(2) }}
        >
          Lead the Way in Taste Sensations!
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
