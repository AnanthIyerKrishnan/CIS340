import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import {React} from 'react';

export default function MyApp() {

  function getFullName(fname,mName,lName){
    return fname + " " + mName + " " + lName;
  }

  const pet = "Dog";
  return (    
      <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
        My full name is {getFullName("Ananth","Iyer","Krishnan")} {"\n"}
        I have a {pet}!
      </Text>
         
  );
}

