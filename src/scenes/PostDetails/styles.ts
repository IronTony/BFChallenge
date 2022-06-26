import { palette } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: palette.WHITE,
    padding: 15,
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
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
