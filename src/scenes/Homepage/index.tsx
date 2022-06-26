import GenericHeader from '@components/GenericHeader';
import NHCSafeAreaView from '@components/NHCSafeAreaView';
import SinglePostCard from '@components/SinglePostCard';
import { useFocusEffect } from '@react-navigation/native';
import { getAllPostsRequest } from '@redux/actions';
import { allPosts, allPostsLoading } from '@redux/posts/selectors';
import { palette } from '@theme/colors';
import { Icon, Spinner } from '@ui-kitten/components';
import React, { FC, memo, useCallback } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

const Home: FC = () => {
  const dispatch = useDispatch();
  const allPostsIsLoading = useSelector(allPostsLoading);
  const allPostsList = useSelector(allPosts);

  const singlePostRowRender = useCallback(({ item }) => {
    return <SinglePostCard {...item} />;
  }, []);

  const onGetPostsList = useCallback(() => {
    dispatch(getAllPostsRequest());
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      onGetPostsList();
    }, [onGetPostsList]),
  );

  return (
    <NHCSafeAreaView>
      <GenericHeader BodyHeader={<Icon pack="FontAwesome5" name="react" style={styles.headerIconContent} />} />

      {allPostsIsLoading ? (
        <View style={styles.spinnerContainer}>
          <Spinner size="giant" status="warning" />
        </View>
      ) : (
        <FlatList
          data={allPostsList}
          style={styles.container}
          contentContainerStyle={styles.content}
          renderItem={singlePostRowRender}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={allPostsIsLoading} onRefresh={onGetPostsList} tintColor={palette.SUN_FLOWER} />
          }
        />
      )}
    </NHCSafeAreaView>
  );
};

export default memo(Home);
