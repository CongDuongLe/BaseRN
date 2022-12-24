import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { getListMenuItems } from '@services/API/UserAPI';
import GlobalLoading from '@components/GlobalLoading';
import { COLORS } from '@constants/Constants';
import FlashListWrapper from '@components/FlashList';
import { Row } from '@core/View';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { getFaIconName } from '../../helpers';
import useFetchQuery from '../../hook/useFetchQuery';

const ReactQuery = () => {
  const MutationValue = useFetchQuery({
    queryKey: 'getListMenuItems',
    queryFn: getListMenuItems,
    config: {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
    },
  });

  console.log('MutationValue', MutationValue);

  const {
    data: res,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchQuery({
    queryKey: ['getListMenuItems', ],
    queryFn: getListMenuItems,
    config: {
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    },
  });

  if (isLoading) {
    return (
      <View style={styles.container}>
        <GlobalLoading />
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.items} className="px-4 py-8">
        <Row>
          <FontAwesome5Icon
            name={getFaIconName(item.icon)}
            size={20}
            color={COLORS.white}
          />
          <Text style={styles.title}>{item.label}</Text>
        </Row>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlashListWrapper
        renderItem={renderItem}
        data={res?.data}
        keyExtractor={index => index.toString()}
      />
    </View>
  );
};

export default ReactQuery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  items: {
    backgroundColor: COLORS.main_blue,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});
