import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useQuery } from 'react-query';
import { getPopularAnime } from '@utils/API/AnimeList';
import GlobalLoading from '@components/GlobalLoading';
import { COLORS } from '@constants/Constants';
import FlashListWrapper from '@components/FlashList';

const ReactQuery = () => {
  const { data, isLoading, isError }: any = useQuery({
    queryKey: ['popular'],
    queryFn: () => getPopularAnime('popular'),
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
        <Text style={styles.title}>{item.animeTitle}</Text>
        {/*<ImageBase source={item.animeImage} priorityType={'normal'} />*/}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlashListWrapper
        renderItem={renderItem}
        data={data?.data}
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
  },
});
