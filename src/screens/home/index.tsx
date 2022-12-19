import { Header, Text } from '@components';
import React from 'react';
import { SafeAreaView, View, Dimensions } from 'react-native';
import { Image } from 'react-native-element-image';
import { scale } from 'react-native-size-scaling';
import { BANNER, DATA } from './constant';
import { styles } from './styles';
import { ScrollView } from 'react-native-virtualized-view';
import FlashListWrapper from '@components/FlatList';
import {
  Body14R,
  Body16R,
  Body16RUp,
  BodyB,
  IContent,
} from '@shared/constant/Text/TextBase';
import { Row, ViewContainer } from '@shared/constant/View/ViewBase';
import {
  ApplyButton,
  BgTransparentBtn,
  ButtonBase,
  HoverBtn,
} from '@shared/constant/Button/ButtonBase';
import ButtonComponent from '@components/Button';
import FilterIconSVG from '@assets/svg/FilterIconSVG';

const { width } = Dimensions.get('window');

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  const _renderItemSlider = ({ item, index }: any) => {
    return (
      <View key={index.toString()} style={styles.itemSlider}>
        <Image
          style={styles.imgSlider}
          width={width}
          height={150}
          source={item.img}
        />
      </View>
    );
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <View key={index.toString()} style={styles.item}>
        <Image
          style={styles.img}
          width={width / 2 - scale(24)}
          source={item.img}
          resizeMode="cover"
        />
        <Text style={styles.text} fontSize={14} bold>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onPressUser={() => {}} onChangeText={_e => {}} />
      {/* <ScrollView>
        <FlashListWrapper
          data={BANNER}
          renderItem={_renderItemSlider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.text} bold fontSize={16}>
          -------0-------
        </Text>
        <FlashListWrapper data={DATA} renderItem={_renderItem} numColumns={2} />
      </ScrollView> */}
      <ViewContainer>
        <IContent>Content bình thường</IContent>
        <IContent isItalic>Content in nghiêng</IContent>
        <BodyB>Đơn vị</BodyB>
        <Body14R>Tất cả các chi nhánh trực thuộc</Body14R>
        <Body16R inLogout={true}>Đăng xuất</Body16R>
        <Row>
          <BgTransparentBtn
            onPress={() => {
              console.log('click back');
            }}>
            <Body16RUp isBack={true}>Trở lại</Body16RUp>
          </BgTransparentBtn>

          <ApplyButton
            onPress={() => {
              console.log('click');
            }}>
            <Body16RUp>Áp dụng</Body16RUp>
          </ApplyButton>
        </Row>

        <HoverBtn>
          <Row>
            <FilterIconSVG size={24}/>
            <Body16R>Lọc nâng cao</Body16R>
          </Row>
        </HoverBtn>
      </ViewContainer>
    </SafeAreaView>
  );
};

export default HomeScreen;
