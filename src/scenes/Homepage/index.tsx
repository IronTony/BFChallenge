import GenericHeader from '@components/GenericHeader';
import NHCSafeAreaView from '@components/NHCSafeAreaView';
import { Icon } from '@ui-kitten/components';
import React, { FC, memo } from 'react';
import styles from './styles';

const Home: FC = () => {
  return (
    <NHCSafeAreaView>
      <GenericHeader BodyHeader={<Icon pack="FontAwesome5" name="react" style={styles.headerIconContent} />} />
    </NHCSafeAreaView>
  );
};

export default memo(Home);
