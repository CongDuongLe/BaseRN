import React from 'react';
import { ViewContainer } from '@core/View';
import { Button } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import IconComponent from '@core/Icon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HeaderTop: React.FC = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => { 
    navigation.toggleDrawer();
  }


  return (
    <ViewContainer clsx={'flex-row h-14 justify-between items-center bg-white'}>
      <TouchableOpacity
        onPress={toggleDrawer}
      >
        <IconComponent name="menu" size={24} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode={'center'}
        source={require('@assets/images/logo/logo.png')}
      />
      <Avatar.Text size={36} label="K" />
    </ViewContainer>
  );
};
export default HeaderTop;
const styles = StyleSheet.create({
  image: {
    width: 86,
  },
});
