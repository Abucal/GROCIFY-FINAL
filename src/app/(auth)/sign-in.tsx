import { AuthView } from "@clerk/expo/native";
import useSocialAuth from "@/hooks/useSocialAuth";
import { useTheme } from "@/providers/ThemProvider";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import {FontAwesome, FontAwesome6} from "@expo/vector-icons";

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  const colors = useTheme();

  const isGoogleLoading = loadingStrategy === "oauth_google";
  const isFacebookLoading = loadingStrategy === "oauth_facebook";
  const isGithubLoading = loadingStrategy === "oauth_github";

  const isLoading = isGoogleLoading || isFacebookLoading || isGithubLoading;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }} edges={["top"]}>
      <View
        className="absolute -left-16  top-12 h-56 w-56 rounded-full"
        style={{
          backgroundColor: `${colors.background}66`,
          borderRadius: 9999,
        }}
      />

      <View
        className="absolute -right-18.5  top-40 h-72 w-72 rounded-full"
        style={{
          backgroundColor: `${colors.background}59`,
          borderRadius: 9999,
        }}
      />

      <View className="px-6 pt-4">
        <Text
          className="text-center text-5xl font-extrabold tracking-tight uppercase font-mono"
          style={{ color: colors.primaryForeground }}
        >
          Grocify
        </Text>

        <Text
          className="mt-1 text-center text-[14px] "
          style={{ color: `${colors.primaryForeground}66` }}
        >
          Plan smarter. Shop happier
        </Text>

        <View className="mt-6 rounded-[30px] border border-white/20 bg-white/10 p-3">
          <Image
            source={require("@/assets/images/auth.png")}
            style={{ width: "100%", height: 300 }}
            contentFit="contain"
          />
        </View>
      </View>

      <View
        className="  mt-8 rounded-t-[40px] flex-1 px-6 pb-8 pt-6"
        style={{ backgroundColor: colors.card }}
      >
        <View
          className="self-center rounded-full px-3 py-1"
          style={{ backgroundColor: colors.secondary }}
        >
          <Text
            className="text-xs font-semibold uppercase tracking-[1px]"
            style={{ color: colors.secondaryForeground }}
          >
            Welcome Back
          </Text>
        </View>

        <Text
          className="mt-2 text-center text-sm leading-6 "
          style={{ color: colors.mutedForeground }}
        >
          Choose a social provider and jump into your personalized grocery
          experience.
        </Text>

        <View className="mt-6 ">
          <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl px-4 active:opacity-90 ${isLoading ? "opaciity-70" : ""}`}
            style={{
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.card,
            }}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_google")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <Image
                source={require("@/assets/images/google.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text
              className="ml-3 flex-1 text-lg font-semibold"
              style={{ color: colors.cardForeground }}
            >
              {isGoogleLoading ? "Signing in with Google..." : "Continue with Google"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>

           <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl px-4 active:opacity-90 ${isLoading ? "opaciity-70" : ""}`}
            style={{
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.card,
            }}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_github")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
             <FontAwesome name="github" size={20} color="#111" />
            </View>
            <Text
              className="ml-3 flex-1 text-lg font-semibold"
              style={{ color: colors.cardForeground }}
            >
              {isGithubLoading ? "Signing in with GitHub..." : "Continue with GitHub"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>

           <Pressable
            className={`mb-3 h-14 flex-row items-center rounded-2xl px-4 active:opacity-90 ${isLoading ? "opaciity-70" : ""}`}
            style={{
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: colors.card,
            }}
            disabled={isLoading}
            onPress={() => handleSocialAuth("oauth_facebook")}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <FontAwesome name="facebook" size={20} color="#1877F2" />
            </View>
            <Text
              className="ml-3 flex-1 text-lg font-semibold"
              style={{ color: colors.cardForeground }}
            >
              {isFacebookLoading ? "Signing in with Facebook..." : "Continue with Facebook"}
            </Text>
            <FontAwesome name="angle-right" size={18} color="#5f6e66" />
          </Pressable>
        </View>

        <Text className="mt-3 text-center text-sm leading-5 " style={{ color: colors.mutedForeground }}>
          By continuing, you agree to our Terms andd Privacy Policy.
        </Text>
      </View>

    </SafeAreaView>
  );
}
