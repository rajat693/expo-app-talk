import "@/global.css";
import { Div, H1 } from "@expo/html-elements";

function NativeComponent() {
  return (
    <Div className="flex-1 justify-center items-center">
      <Div className="bg-blue-500 p-4 rounded-lg shadow-md shadow-black/50">
        <H1 className="text-white text-2xl">Hello, Web World!</H1>
      </Div>
    </Div>
  );
}

export default NativeComponent;
