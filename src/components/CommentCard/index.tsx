import { Comment } from '@redux/comments/types';
import { Avatar } from '@ui-kitten/components';
import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

type CommentCardProps = Comment;

const CommentCard: FC<CommentCardProps> = item => {
  return (
    <View style={styles.CommentCardContainer}>
      <View style={styles.userInfoContainer}>
        <Avatar style={styles.avatar} size="tiny" source={{ uri: 'https://randomuser.me/api/portraits/lego/1.jpg' }} />
        <Text style={styles.userInfo}>{item?.name ?? '--'}</Text>
      </View>

      <Text style={styles.commentContent}>{item?.body}</Text>
    </View>
  );
};

export default CommentCard;
