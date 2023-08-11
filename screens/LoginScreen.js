import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ChatBubbleLeftIcon } from 'react-native-heroicons/solid'; // Importe o ícone ChatAlt2Icon

const LoginScreen = () => {
  return (
    <View className="flex-1 justify-center items-center p-4">
      <View className="bg-white p-6 rounded-lg w-4/5">
        <Text className="text-2xl mb-4 text-center">Bem-vindo!</Text>
        <View className="flex-row mb-4 p-2 border border-gray-300 rounded-lg flex items-center">
          <ChatBubbleLeftIcon className="mr-2 h-6 w-6 text-gray-500" />
          <TextInput placeholder="Email" className="flex-1 p-2" />
        </View>
        <View className="flex-row mb-4 p-2 border border-gray-300 rounded-lg flex items-center">
          <ChatBubbleLeftIcon className="mr-2 h-6 w-6 text-gray-500" />
          <TextInput placeholder="Senha" secureTextEntry className="flex-1 p-2" />
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#FFA500', padding: 12, borderRadius: 5 }}
          onPress={() => {
            // Lógica de autenticação aqui
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
