import { ClockIcon, MapPinIcon, BellIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { View, ScrollView, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { categories } from "../constants";
import { useState } from "react";
import MyText from "./defaults/MyText";
import BackButton from "./BackButton";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const navigation = useNavigation();
    function navigateTo() {
        navigation.navigate('TableList')
    }
    return(
        <View className="bg-black pt-[60px]">
        <View className="mx-4 mb-5 flex-row justify-between items-center">
          <Image source={require('../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" />
          {/* <BackButton/> */}
          <View className="flex justify-center items-center">
            <View className="flex-row pt-3 items-center justify-center space-x-2">
              <MyText weight="regular" customClassName="text-white text-[20px] font-semibold">
                Artani Event
              </MyText>
            </View>
            {/* <View className="flex-row items-center justify-center gap-2">
              <ClockIcon size="25" color={themeColors.bgLight} />
              <Text className="font-semibold text-white">
                18:40
              </Text>    
              
              <MapPinIcon size="25" color={themeColors.bgLight} />
              <Text className="font-semibold text-white">
                New York, NYC
              </Text>
            </View> */}
          </View>

          <BellIcon size="27" color="white" />
        </View>
        <View>
    </View> 
        <View className="px-5 mb-6">
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{
              let isActive = item.id === activeCategory;
              let activeTextClass = isActive? 'text-white': 'text-white';
              return (
                <TouchableOpacity 
                onPress={()=> {setActiveCategory(item.id); navigateTo()}}
                style={{backgroundColor: isActive? themeColors.bgLight : '#212121'}} 
                className="p-4 px-5 mr-2 rounded shadow">
                  <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        </View>

    )
};

export default Header;