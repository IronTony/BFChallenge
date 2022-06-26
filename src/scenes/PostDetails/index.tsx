import CommentCard from '@components/CommentCard';
import GenericHeader from '@components/GenericHeader';
import NHCSafeAreaView from '@components/NHCSafeAreaView';
import UserInfo from '@components/UserInfo';
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { Route, useRoute } from '@react-navigation/native';
import { getAllComments } from '@redux/comments/apiCall';
import { Comment } from '@redux/comments/types';
import { getPostDetails } from '@redux/posts/apiCall';
import { Post } from '@redux/posts/types';
import { Spinner } from '@ui-kitten/components';
import * as React from 'react';
import { useCallback, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

interface PostDetailsProps {
  postId: number;
}

const PostDetails: FC = () => {
  const { t } = useTranslation();
  const goBack = useNavigationBackAction();
  const [postInfo, setPostInfo] = useState<Post | null>(null);
  const [loadingPostInfo, setLoadingPostInfo] = useState(false);
  const [postCommentsInfo, setPostCommentsInfo] = useState<Comment[] | null>(null);
  const { params } = useRoute<Route<'PostDetails', PostDetailsProps>>();
  const { postId } = params;

  const onGetPostComments = useCallback(async () => {
    const response = await getAllComments({ postId });

    if (response.status === 200) {
      setPostCommentsInfo(response.data);
    }
  }, [postId]);

  const onGetPostDetails = useCallback(async () => {
    setLoadingPostInfo(true);
    const response = await getPostDetails({ postId });

    if (response.status === 200) {
      setPostInfo(response.data);
      onGetPostComments();
    }
    setLoadingPostInfo(false);
  }, [onGetPostComments, postId]);

  const renderSingleCommentCard = useCallback(({ item }) => {
    return <CommentCard {...item} />;
  }, []);

  const renderPostContent = useCallback(() => {
    return (
      <View style={styles.CardContainer}>
        <Text style={styles.postTitle}>{postInfo?.title}</Text>
        <Text style={styles.postContent}>{postInfo?.body}</Text>

        <UserInfo userId={postInfo?.user_id} />
      </View>
    );
  }, [postInfo?.body, postInfo?.title, postInfo?.user_id]);

  useEffect(() => {
    if (postId) {
      onGetPostDetails();
    }
  }, [onGetPostDetails, postId]);

  return (
    <NHCSafeAreaView>
      <GenericHeader onBackClicked={goBack} title={t('PostDetails:Title')} />

      {loadingPostInfo ? (
        <View style={styles.spinnerContainer}>
          <Spinner size="giant" status="warning" />
        </View>
      ) : (
        <FlatList
          data={postCommentsInfo}
          renderItem={renderSingleCommentCard}
          ListHeaderComponent={renderPostContent}
          style={styles.container}
          contentContainerStyle={styles.content}
        />
      )}
    </NHCSafeAreaView>
  );
};

export default React.memo(PostDetails);
