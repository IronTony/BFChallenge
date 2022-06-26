import GenericHeader from '@components/GenericHeader';
import NHCSafeAreaView from '@components/NHCSafeAreaView';
import UserInfo from '@components/UserInfo';
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { Route, useRoute } from '@react-navigation/native';
import { getPostDetails } from '@redux/posts/apiCall';
import { Post } from '@redux/posts/types';
import { Spinner } from '@ui-kitten/components';
import * as React from 'react';
import { useCallback, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import styles from './styles';

interface PostDetailsProps {
  postId: number;
}

const PostDetails: FC = () => {
  const { t } = useTranslation();
  const goBack = useNavigationBackAction();
  const [postInfo, setPostInfo] = useState<Post | null>(null);
  const [loadingPostInfo, setLoadingPostInfo] = useState(false);
  const { params } = useRoute<Route<'PostDetails', PostDetailsProps>>();
  const { postId } = params;

  const onGetPostDetails = useCallback(async () => {
    setLoadingPostInfo(true);
    const response = await getPostDetails({ postId });

    if (response.status === 200) {
      setPostInfo(response.data);
    }
    setLoadingPostInfo(false);
  }, [postId]);

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
        <View style={styles.CardContainer}>
          <Text style={styles.postTitle}>{postInfo?.title}</Text>
          <Text style={styles.postContent}>{postInfo?.body}</Text>

          <UserInfo userId={postInfo?.user_id} />
        </View>
      )}
    </NHCSafeAreaView>
  );
};

export default React.memo(PostDetails);
