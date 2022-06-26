import { useNavigation } from '@react-navigation/native';
import { Post } from '@redux/posts/types';
import { GenericNavigationProps } from '@routes/types';
import React, { FC, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

type SinglePostCardProps = Post;

const SinglePostCard: FC<SinglePostCardProps> = item => {
  const navigation = useNavigation<GenericNavigationProps>();

  const onGoToDetails = useCallback(() => {
    if (item.id) {
      navigation.navigate('PostDetails', { postId: item.id });
    }
  }, [item.id, navigation]);

  return (
    <View style={styles.CardContainer}>
      <TouchableOpacity onPress={onGoToDetails}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postContent}>{item.body}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SinglePostCard;
