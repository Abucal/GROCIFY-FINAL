import {useSSO} from "@clerk/expo";
import {Alert} from "react-native";
import { useState } from "react";

const useSocialAuth = () => {
    const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
    const {startSSOFlow} = useSSO();

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_facebook" | "oauth_github") => {

        if(loadingStrategy)  return; // guard against concurrent flows

        setLoadingStrategy(strategy);

        try {
            const {createdSessionId, setActive} = await startSSOFlow({strategy});

            if(!createdSessionId || !setActive) {
                Alert.alert("Sign-in incomplete", "Sign-in did not complete, Please try again.");
                return
            }

            await setActive({session: createdSessionId});

        } catch (error) {
            Alert.alert("Authentication Error", "An error occurred while authenticating.");
        } finally {
            setLoadingStrategy(null);
        }
    }

    return {handleSocialAuth, loadingStrategy};

}

export default useSocialAuth;