import { palette } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  CommentCardContainer: {
    backgroundColor: palette.WHITE,
    marginVertical: 5,
    padding: 15,
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  avatar: {
    marginRight: 10,
  },
  commentContent: {
    color: palette.MIDNIGHT_BLUE,
    fontFamily: fonts.regular,
    fontSize: 15,
  },
  userInfo: {
    color: palette.MIDNIGHT_BLUE,
    fontFamily: fonts.bold,
    fontSize: 12,
  },
});

export default styles;
