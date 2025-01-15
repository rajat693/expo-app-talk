import "@/global.css";
import { View } from "react-native";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";
import { Button, ButtonText } from "@/components/ui/button";
import React from "react";

const AlertDemo = () => {
  return (
    <Alert action="primary">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
};

const ButtonDemo = () => {
  return (
    <Button>
      <ButtonText>Button</ButtonText>
    </Button>
  );
};

function NativeComponent() {
  return (
    <GluestackUIProvider mode="light">
      <View className="flex-1 justify-center items-center">
        {/* <AlertDemo /> */}
        <ButtonDemo />
      </View>
    </GluestackUIProvider>
  );
}

export default NativeComponent;
