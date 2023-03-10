import { Header, Text } from '@components';
import React, { useEffect } from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import { scale } from 'react-native-size-scaling';
import { styles } from './styles';
import { StyleSheet } from 'react-native-size-scaling';
import {
  Body14R,
  Body16BUp,
  Body16R,
  Body16SB,
  BodyB,
  IContent,
} from '@core/Typo';
import { Card, Row, ViewContainer } from '@core/View';
import {
  ApplyButton,
  BgTransparentBtn,
  HoverBtn,
} from '@shared/constant/Button/ButtonBase';
import FilterIconSVG from '@assets/svg/FilterIconSVG';
import { COLORS } from '@constants/Constants';
import ChrismastIsComing from '@screens/lotties/ChrismastIsComing';
import Button from '@core/Button';
import { useDispatch } from 'react-redux';
import {
  changeIsAuthenticated,
  saveAccessToken,
  saveCsrfToken,
} from '@reduxCore/auth/AuthSlice';
import { navigationRef } from '@navigators';
import ImageComponent from '@core/Image/ImageComponent';

const { width } = Dimensions.get('window');

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  console.log(navigationRef, 'ref');

  return (
    <SafeAreaView style={styles.container}>
      <Header onPressUser={() => {}} onChangeText={_e => {}} />
      <ViewContainer>
        <IContent>Content bình thường</IContent>
        <IContent clsx={'italic'}>Content in nghiêng</IContent>
        <IContent clsx={'leading-18 text-main-blue'}>
          Content LineHeight 18 px
        </IContent>
        <BodyB>Đơn vị</BodyB>
        <Body14R>Tất cả các chi nhánh trực thuộc</Body14R>
        <Body16R>Đăng xuất</Body16R>
        <Body16SB>Xu hướng doanh thu theo nhiệm vụ</Body16SB>
        <Row>
          <BgTransparentBtn
            onPress={() => {
              console.log('click back');
            }}>
            <Body16BUp>Trở lại</Body16BUp>
          </BgTransparentBtn>

          <ApplyButton
            onPress={() => {
              dispatch(changeIsAuthenticated(false));
              // navigationRef.current?.navigate('Login');
              dispatch(saveCsrfToken(''));
              dispatch(saveAccessToken(''));
            }}>
            <Body16BUp clsx={'text-white'}>Logout</Body16BUp>
          </ApplyButton>
        </Row>

        <HoverBtn
          onPress={() => {
            console.log('click');
          }}
          clsx={'mb-4'}>
          <Row clsx={'justify-center items-center'}>
            <FilterIconSVG size={24} />
            <Body16R clsx={'text-main-blue'}>Lọc nâng cao</Body16R>
          </Row>
        </HoverBtn>

        <Card clsx={'bg-transparent flex h-[300px] py-2'}>
          {/*<ImageComponent*/}
          {/*  source={*/}
          {/*    'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/doraemons9_07_horizontalposter-6c4d708980d3-1609395243354-9fo2xUfP.png?v=0&maxW=600'*/}
          {/*  }*/}
          {/*  // style={nStyle.image}*/}
          {/*  className={*/}
          {/*    'w-[100px] h-[100px] rounded-full border-2 border-main-blue mt-4 '*/}
          {/*  }*/}
          {/*  resize={'contain'}*/}
          {/*  priorityType={'high'}*/}
          {/*/>*/}
          <ChrismastIsComing />
        </Card>
        <Row>
          <Button type="dashed" size="middle">
            <Text>Áp dụng</Text>
          </Button>
        </Row>
      </ViewContainer>
    </SafeAreaView>
  );
};

export default HomeScreen;

const nStyle = StyleSheet.create({
  image: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    borderWidth: 2,
    borderColor: COLORS.main_blue,
    marginTop: 8,
  },
});
