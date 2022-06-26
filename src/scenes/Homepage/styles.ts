import theme from '@theme';
import { palette } from '@theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerIconContent: {
    color: palette.PETER_RIVER,
    fontSize: 35,
  },
  container: {
    backgroundColor: theme.colors.primary,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
