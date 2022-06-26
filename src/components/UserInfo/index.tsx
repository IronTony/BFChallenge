import { getUserInfo } from '@redux/user/apiCall';
import { User } from '@redux/user/types';
import { Avatar, Spinner } from '@ui-kitten/components';
import isEmpty from 'lodash/isEmpty';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

interface UserInfoProps {
  userId: number | undefined;
}

const UserInfo: FC<UserInfoProps> = ({ userId }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loadingUserData, setLoadingUserData] = useState(false);

  const getUserInfos = useCallback(async () => {
    setLoadingUserData(true);
    if (userId) {
      const response = await getUserInfo({ userId });

      if (response.status === 200) {
        setUserData(response.data);
      }
    }
    setLoadingUserData(false);
  }, [userId]);

  useEffect(() => {
    getUserInfos();
  }, [getUserInfos]);

  return (
    <View style={styles.userInfoContainer}>
      {loadingUserData ? (
        <Spinner size="tiny" />
      ) : (
        <>
          {isEmpty(userData) ? (
            <></>
          ) : (
            <>
              <Avatar
                style={styles.avatar}
                size="tiny"
                source={{ uri: 'https://randomuser.me/api/portraits/lego/1.jpg' }}
              />
              <Text style={styles.userInfo}>{userData?.name ?? '--'}</Text>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default UserInfo;
