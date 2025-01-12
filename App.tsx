import "@/global.css";
import { View } from "react-native";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";

const AlertDemo = () => {
  return (
    <Alert action="primary">
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
  );
};

function NativeComponent() {
  return (
    <GluestackUIProvider mode="light">
      <View className="flex-1 justify-center items-center">
        <AlertDemo />
      </View>
    </GluestackUIProvider>
  );
}

export default NativeComponent;
