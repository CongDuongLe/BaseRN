import React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { scale } from 'react-native-size-scaling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '@screens/home';
import SettingScreen from '@screens/setting';
import { styles } from './styles';
import ChartScreen from '@screens/chart/ChartScreen';
import Lotties from '@screens/lotties/Lotties';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const tabBar = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'ios-home-outline';
        break;
      case 'Setting':
        icon = 'settings-outline';
        break;
      case 'Chart':
        icon = 'ios-stats-chart-outline';
        break;
      case 'Lotties':
        icon = 'aperture-sharp';
        break;
      default:
        break;

    }

    return (
      <Ionicons
        name={icon}
        size={scale(25)}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const linkChanelYoutube = () => {
    // Linking.openURL('https://www.youtube.com/channel/UClwDARgTpIwOOugYtgEW1Uw');
    navigation.navigate('QueryScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        screenOptions={{
          headerShown: false,
        }}
        style={styles.bottomBar}
        strokeWidth={1}
        strokeColor={'#DDDDDD'}
        height={65}
        circleWidth={55}
        bgColor="white"
        initialRouteName="Lotties"
        borderTopLeftRight
        type="DOWN"
        // borderTopLeftRadius={4}
        renderCircle={() => (
          <View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={linkChanelYoutube}>
              <Ionicons name={'logo-youtube'} color="red" size={scale(25)} />
            </TouchableOpacity>
          </View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          // options={{
          //   headerShown: false,
          // }}
          name="Home"
          position="LEFT"
          component={() => <HomeScreen />}
        />
        <CurvedBottomBar.Screen
          // options={{ headerShown: false }}
          name="Chart"
          position="LEFT"
          component={() => <ChartScreen />}
        />
        <CurvedBottomBar.Screen
          // options={{ headerShown: false }}
          name="Lotties"
          position="RIGHT"
          component={() => <Lotties />}
        />
        <CurvedBottomBar.Screen
          // options={{ headerShown: false }}
          name="Setting"
          component={() => <SettingScreen />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};
