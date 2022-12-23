import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { globalLoading } from '@components';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-element-textinput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '@services/API/LoginAPI';
import {
  saveAccessToken,
  saveCsrfToken,
  changeIsAuthenticated,
} from '@reduxCore/auth/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import {
  Body16SB,
  BodyB,
  Body14R,
  Body16BUp,
  Body16R,
  Body16B,
} from '@core/Typo';
import { Col, OneLineView, ViewContainer } from '@core/View';
import { COLORS } from '@constants/Constants';
import Feather from 'react-native-vector-icons/Feather';
import Button from '@core/Button';
import {
  validatePassword,
  validatePersonName,
} from '@helpers/ValidateHelper.ts';
import FastImage from 'react-native-fast-image';

import logo from '../../assets/images/logo/logo.png';

interface Props {}

const RegisterScrenn: React.FC<Props> = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
    provider: 'db',
    refresh: true,
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [canLogin, setCanLogin] = useState(true);

  useEffect(() => {
    if (
      validatePersonName(inputValue.username) &&
      validatePassword(inputValue.password)
    ) {
      setCanLogin(false);
    } else {
      setCanLogin(true);
    }
    return () => {
      setCanLogin(true);
    };
  }, [inputValue]);

  const handleSubmitForm = async () => {
    try {
      globalLoading.show();
      const res = await fetchLogin(inputValue);
      if (res.data.access_token) {
        navigate('Main');
      }
      await AsyncStorage.setItem('accessToken', res.data.access_token);
      dispatch(saveAccessToken(res.data?.access_token));
      dispatch(saveCsrfToken(true));
      dispatch(changeIsAuthenticated(true));
      globalLoading.hide();
    } catch (error) {
      globalLoading.hide();
      console.log(error);
    }
  };

  const renderUserNameInput = () => {
    return (
      <>
        <Body16B clsx="text-black mb-8">Tên đăng nhập</Body16B>
        <TextInput
          style={[
            styles.textinput,
            {
              marginBottom: inputValue.username !== '' ? 16 : 8
            },
          ]}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          value={inputValue.username}
          onChangeText={text => {
            setInputValue({ ...inputValue, username: text });
          }}
          renderLeftIcon={() => (
            <Feather
              color={COLORS.main_blue}
              size={14}
              name="user"
              style={{ marginRight: 12 }}
            />
          )}
          renderRightIcon={() => (
            <Feather
              onPress={() => setInputValue({ ...inputValue, username: '' })}
              color={COLORS.main_blue}
              size={16}
              name={inputValue.username.length > 1 ? 'x' : ''}
            />
          )}
          placeholder="Nhập tên đăng nhập"
          placeholderTextColor={COLORS.gray2}
          // textError={
          //   canLogin && inputValue.username !== ''
          //     ? 'Vui lòng nhập đúng tên đăng nhập'
          //     : ''
          // }
        />
      </>
    );
  };
  const renderPasswordInput = () => {
    return (
      <>
        <Body16B clsx="text-black mb-8">Mật khẩu</Body16B>
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
          placeholder="Nhập mật khẩu"
          placeholderTextColor={COLORS.gray2}
          secureTextEntry={secureTextEntry}
          renderLeftIcon={() => (
            <Feather
              color={COLORS.main_blue}
              size={14}
              name="lock"
              style={{ marginRight: 12 }}
            />
          )}
          renderRightIcon={() => (
            <Feather
              onPress={() => setSecureTextEntry(!secureTextEntry)}
              color={COLORS.main_blue}
              size={14}
              name={secureTextEntry ? 'eye-off' : 'eye'}
            />
          )}
          // textError={
          //   canLogin && inputValue.password !== ''
          //     ? 'Vui lòng nhập đúng mật khẩu'
          //     : ''
          // }
        />
      </>
    );
  };

  const renderButtonArea = () => {
    return (
      <>
        <Button
          color={canLogin ? 'disabled' : 'primary'}
          disabled={canLogin}
          onPress={handleSubmitForm}
          clsx={'mt-[40px] '}>
          <Body16BUp clsx="text-white">Đăng nhập</Body16BUp>
        </Button>
        <Body14R clsx={'text-center my-16 text-gray4'}>――― Hoặc ―――</Body14R>
        <Button clsx={'border-gray4 bg-gray7 '}>
          <Body16R clsx="text-main-blue">Đăng nhập với Mobiphone</Body16R>
        </Button>
      </>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <FastImage
          source={logo}
          className="w-[216px] h-[36px] mb-40"
          resizeMode="contain"
        />
        <BodyB clsx={'text-24 text-logo leading-30'}>Đăng nhập</BodyB>
        <Body14R clsx={'text-gray2 mt-4'}>
          Nhập tài khoản và mật khẩu của bạn để sử dụng Mobifone.vn
        </Body14R>
        <OneLineView clsx="mt-20" />
      </>
    );
  };

  return (
    <ViewContainer clsx="flex-1 justify-center bg-bg-login/10">
      {renderHeader()}
      {renderUserNameInput()}
      {renderPasswordInput()}
      {renderButtonArea()}
    </ViewContainer>
  );
};

export default RegisterScrenn;
