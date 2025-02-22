import { Text, View, ScrollView, Image} from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants'
import { Banner } from "../components/header/banner";
import { Search } from "../components/search";
import { Section } from '../components/section';
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list"

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1}}
      className="bg-slate-200" showsVerticalScrollIndicator={false}
     >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header/>
         
        <Banner/>

       <Search/>

      </View>
    
      <Section
      name="Mais pedidos"
        label="Veja mais"
        action={ () => console.log ("CLICOU NO VEJA MAIS") }
        size="text-2xl"
      />

      <TrendingFoods/>

      <Section
      name="Famosos no Major Lanches"
        label="Veja todos"
        action={ () => console.log ("CLICOU NO FAMOSOS") }
        size="text-xl"
      />

      <Restaurants/>

      <Section
      name="Lanches"
        label="Veja todos"
        action={ () => console.log ("CLICOU NO LANCHES") }
        size="text-xl"
      />

      <RestaurantVerticalList/>

    </ScrollView>
  );
}
