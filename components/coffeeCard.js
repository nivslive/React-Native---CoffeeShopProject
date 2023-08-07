import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon, UserGroupIcon } from 'react-native-heroicons/solid';
import { PlusIcon, ArrowRightIcon,  ChatBubbleLeftIcon} from 'react-native-heroicons/outline';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function CoffeeCard({item}) {
  const navigation = useNavigation();
  return (

      <View 
        style={{
          borderRadius: 40, 
          borderColor: "gray",
          borderStyle: "solid",
          backgroundColor: themeColors.bgDark, 
          height: ios? height*0.4 : height*0.50, 
          width: width*0.68,
        }} 
        >
        <View 
        style={{
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: {width: 0, height: 40},
          shadowOpacity: 0.8,
          marginTop: ios? -(height*0.08): 15,
        }}
        className="flex-row justify-center">
          <Image 
            style={{position: "absolute", top: 0, right: 0, width: 80, height: 80}}
            source={item.image} 
            className="h-40 w-40" 
          />
        </View>
          <View className={`px-5 flex-1 justify-between ${ios? 'mt-5': ''}`}>
            <View className="space-y-3 mt-3">
              
              <View className="flex-row items-center gap-3">
                <Text className="text-1xl text-white font-semibold z-10">
                  {item.name}
                </Text>
                <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}} 
                  className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16">
                  <StarIcon size="15" color="white" />
                  <Text className="text-base font-semibold text-white">{item.stars}</Text>
                </View>
              </View>

              <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}} 
                className="flex-row items-center rounded-3xl p-1 px-2 w-[140px]">
                <UserGroupIcon size="15" color="white" />
                <Text className="text-1xl font-semibold text-white">Administrador</Text>
              </View>
            </View>
            
            <View>
                <Text style={{ fontSize: 17, fontWeight: "bold"}}>
                  Porque as coisas sao doidera?
                </Text>

                <Text className="text-1xl">
                  Levando em consideração a parada 2, como é que é 30?
                </Text>

                <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}} 
                className="flex-row items-center rounded-3xl w-[100%] my-2">
                  <Text className="text-1xl font-semibold text-white">códigos, desenvolvimento</Text>
                </View>
            </View>

            <View style={{
              backgroundColor: ios? themeColors.bgDark: 'transparent',
              shadowColor: themeColors.bgDark,
              shadowRadius: 25,
              shadowOffset: {width: 0, height: 40},
              shadowOpacity: 0.8,
            }} className="flex-row justify-between items-center mb-5">
              {/* <Text className="text-white font-bold text-lg">5 Curtidas</Text> */}
              <TouchableOpacity 
              style={{
                shadowColor: 'black',
                shadowRadius: 40,
                shadowOffset: {width: -20, height: -10},
                shadowOpacity: 1,
              }} className="p-4 bg-white rounded-full">
                <View className="flex-row gap-2"><Text>2</Text><ChatBubbleLeftIcon size="15" strokeWidth={2} color={themeColors.bgDark} /></View>
              </TouchableOpacity>

              <TouchableOpacity 
              style={{
                shadowColor: 'black',
                shadowRadius: 40,
                shadowOffset: {width: -20, height: -10},
                shadowOpacity: 1,
              }} className="p-4 bg-white rounded-full">
                <Text>3 ♥</Text>{/* <ArrowRightIcon size="15" strokeWidth={2} color={themeColors.bgDark} /> */}
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={()=> navigation.navigate('Product', {...item})}
              style={{
                shadowColor: 'black',
                shadowRadius: 40,
                shadowOffset: {width: -20, height: -10},
                shadowOpacity: 1,
              }} className="p-4 bg-white rounded-full">
                <ArrowRightIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
              </TouchableOpacity>
            </View>
            
            
          </View>

      </View>
    
  )
}