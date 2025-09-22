import { StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/fontFamily'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
		alignItems: 'center',
	},
	header: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: colors.white,
		fontSize: 24,
		fontFamily: fontFamily.extrabold,
	},
	subtitle: {
		color: colors.gray[300],
		fontSize: 14,
		fontFamily: fontFamily.medium,
	},
	ticket: {
		flex: 1,
		width: '100%',
		backgroundColor: colors.white,
		borderRadius: 22,
		overflow: 'hidden',
		paddingBottom: 24,
	},
	content: {},
	flight: {},
})
