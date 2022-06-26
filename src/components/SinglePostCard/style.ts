import { palette } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('screen');
export const ITEM_SIZE = width * 0.9;

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: palette.WHITE,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    width: ITEM_SIZE,
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  avatar: {
    marginRight: 10,
  },
  postTitle: {
    color: palette.MIDNIGHT_BLUE,
    fontFamily: fonts.bold,
    fontSize: 16,
    paddingBottom: 8,
  },
  postContent: {
    color: palette.MIDNIGHT_BLUE,
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  userInfo: {
    color: palette.MIDNIGHT_BLUE,
    fontFamily: fonts.bold,
    fontSize: 12,
  },
});

export default styles;
