import { palette } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  avatar: {
    marginRight: 10,
  },
  userInfo: {
    color: palette.MIDNIGHT_BLUE,
    fontFamily: fonts.bold,
    fontSize: 12,
  },
});

export default styles;
