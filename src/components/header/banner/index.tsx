import { View, Pressable, Text, Image} from 'react-native';
import Pagerview from "react-native-pager-view"

export function Banner() {
 return (
   <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
    <Pagerview style={{flex:1 }} initialPage={0} pageMargin={14}>

    <Pressable 
    className="w-full h-36 md:h-60 rounded-2xl "
    key="1"
    onPress={() => console.log("CLICOU NO BANNER 1")}
    >
    </Pressable>
    <Image source={require("../img/banner1.png")}
    className="w-full h-36 md:h-60 rounded-2xl">
    </Image>

    <Pressable 
    className="w-full h-36 md:h-60 rounded-2xl "
    key="2"
    onPress={() => console.log("CLICOU NO BANNER 2")}
    >
    </Pressable>
    <Image source={require("../img/banner2.png")}
    className="w-full h-36 md:h-60 rounded-2xl">
    </Image>

    </Pagerview>
   </View>
  );
}