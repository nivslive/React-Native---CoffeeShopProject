import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';
import { BellIcon, MagnifyingGlassIcon, ClockIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import Qr from '../components/qrCode';
import Header from '../components/Header';
import Ticket from '../components/Ticket';
import MyText from '../components/defaults/MyText';
import { LinearGradient } from 'expo-linear-gradient';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function HomeScreen() {

  return (
    <ScrollView>
      <LinearGradient colors={["#d1d1d1", "black"]} className="flex-1 relative bg-white">
      <StatusBar />
      <Header/>
      <View className="w-[80%] mx-auto py-3 text-left">
        
        {/* <MyText weight="bold" customClassName="text-[18px]">
          PsyFly
        </MyText> */}

        <MyText weight="bold" customClassName="text-[30px] text-center text-white">
          SEU INGRESSO
        </MyText>

        <MyText weight="regular" customClassName="text-[14px] text-center text-white shadow-2xl p-2 rounded">
          Informações sobre o evento, incluindo endereço, contato, encontrará logo abaixo do ingresso
        </MyText>

        {/* <MyText weight="regular" customClassName="text-[14px]">
          Endereço: Guarulhos - SP
        </MyText>
        <MyText weight="regular" customClassName="text-[14px]">
          CEP: 24420-95-520
        </MyText>
        <MyText weight="regular" customClassName="text-[14px]">
          Email de contato: 24420-95-520
        </MyText> */}
      </View>
      {/* <Image 
        source={require('../assets/images/beansBackground1.png')} 
        style={{height: height*0.2}} 
        className="w-full absolute -top-5 opacity-10" /> */}
      <SafeAreaView className={ios? '-mb-8': ''}>
        {/* avatar and bell icon */}
        {/* search bar */}
        {/* <View className="mx-5 shadow" style={{marginTop: height*0.06}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.bgLight}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View> */}
        <View className="h-full pt-2 flex justify-center items-center">
          <Ticket/>
          <Text className="pt-3">HTX821940142M</Text>
        </View>

        
          
      </SafeAreaView>

      
      
    </LinearGradient>
    </ScrollView>
    
  )
}
