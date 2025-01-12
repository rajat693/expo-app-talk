import "@/global.css";
import { View } from "react-native";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";

function NativeComponent() {
  return (
    <GluestackUIProvider mode="light">
      <View className="flex justify-center items-center h-screen">
        <Alert>
          <AlertIcon as={InfoIcon} />
          <AlertText>Description of alert!</AlertText>
        </Alert>
      </View>
    </GluestackUIProvider>
  );
}

export default NativeComponent;
