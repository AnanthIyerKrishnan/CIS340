import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import {React} from 'react';

export default function MyApp() {
  const pet = "Dog";
  return (    
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
        I have a {pet}!
      </Text>
    
  );
}

