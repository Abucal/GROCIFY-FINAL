import SocialAuthButton from "@/components/auth/SocialAuthButton";
import useSocialAuth from "@/hooks/useSocialAuth";
import { useTheme } from "@/providers/ThemProvider";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";

export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  const colors = useTheme();

  const isGoogleLoading = loadingStrategy === "oauth_google";
  const isFacebookLoading = loadingStrategy === "oauth_facebook";
  const isGithubLoading = loadingStrategy === "oauth_github";

  const isLoading = isGoogleLoading || isFacebookLoading || isGithubLoading;
  const socialProviders = [
    {
      key: "google",
      label: "Continue with Google",
      loadingLabel: "Signing in with Google...",
      isLoading: isGoogleLoading,
      onPress: () => handleSocialAuth("oauth_google"),
      icon: (
        <Image
          source={require("@/assets/images/google.png")}
          style={{ width: 20, height: 20 }}
        />
      ),
    },
    {
      key: "github",
      label: "Continue with GitHub",
      loadingLabel: "Signing in with GitHub...",
      isLoading: isGithubLoading,
      onPress: () => handleSocialAuth("oauth_github"),
      icon: <FontAwesome name="github" size={20} color="#111" />,
    },
    {
      key: "facebook",
      label: "Continue with Facebook",
      loadingLabel: "Signing in with Facebook...",
      isLoading: isFacebookLoading,
      onPress: () => handleSocialAuth("oauth_facebook"),
      icon: <FontAwesome name="facebook" size={20} color="#1877F2" />,
    },
  ];

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
          {socialProviders.map((provider) => (
            <SocialAuthButton
              key={provider.key}
              label={provider.label}
              loadingLabel={provider.loadingLabel}
              isLoading={provider.isLoading}
              disabled={isLoading}
              colors={colors}
              onPress={provider.onPress}
              icon={provider.icon}
            />
          ))}
        </View>

        <Text className="mt-3 text-center text-sm leading-5 " style={{ color: colors.mutedForeground }}>
          By continuing, you agree to our Terms andd Privacy Policy.
        </Text>
      </View>

    </SafeAreaView>
  );
}
