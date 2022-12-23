import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalLoading, Text } from '@components';
import Button from '@components/Button';
import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { TextInput } from 'react-native-element-textinput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, getCsrfToken } from '@services/API/LoginAPI';
import {
  saveAccessToken,
  saveCsrfToken,
  changeIsAuthenticated,
} from '@reduxCore/auth/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  changeLanguageAction,
  selectMain,
  todoRequestAction,
} from '@reduxCore/main/slice';
import { styles } from './styles';
import { Body16SB } from '@core/Typo';

const IMG_BACKGROUND = require('@assets/images/pictures/background.jpg');

interface Props {}

const RegisterScrenn: React.FC<Props> = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
    provider: 'db',
    refresh: true,
  });

  useEffect(() => {
    dispatch(changeLanguageAction('vn'));
    // dispatch(todoRequestAction());
  }, []);

  const handleSubmitForm = async () => {
    try {
      globalLoading.show();
      const res = await fetchLogin(inputValue);
      await AsyncStorage.setItem('accessToken', res.data.access_token);
      const crflToken = await getCsrfToken();
      await AsyncStorage.setItem('csrfToken', crflToken.data.result);
      dispatch(saveAccessToken(res.data?.access_token));
      dispatch(saveCsrfToken(crflToken.data.result));
      dispatch(changeIsAuthenticated(true));
      if (isAuthenticated) {
        navigate('Main');
      }
      globalLoading.hide();
    } catch (error) {
      globalLoading.hide();
      console.log(error);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={IMG_BACKGROUND}
      resizeMode="cover">
      <View style={styles.wrapBox}>
        <Text style={styles.title} bold fontSize={30}>
          Login
        </Text>
        <TextInput
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={inputValue.username}
          onChangeText={text => {
            setInputValue({ ...inputValue, username: text });
          }}
          label="Username"
          placeholder="Placeholder"
          placeholderTextColor="gray"
          // textError={'Please enter username'}
        />

        <TextInput
          style={styles.textinput}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={inputValue.password}
          textContentType="oneTimeCode"
          onChangeText={e => {
            setInputValue({
              ...inputValue,
              password: e,
            });
          }}
          label="Password"
          placeholder="Enter password"
          placeholderTextColor="gray"
          secureTextEntry
          // textError={'Please enter password'}
        />

        <Button
          style={styles.button}
          title="Login"
          fontSize={20}
          onPress={handleSubmitForm}
        />
        <Text style={styles.textOr} fontSize={16}>
          Or
        </Text>
        <Body16SB
          clsx={'text-center text-gray2'}
          onPress={() => navigate('Register')}>
          Create new account?
        </Body16SB>
      </View>
    </ImageBackground>
  );
};

export default RegisterScrenn;
