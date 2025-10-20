import { Avatar } from '@/components/avatar'
import { FloatButton } from '@/components/button'
import { Email } from '@/components/emails'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menuButton'
import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { EMAILS } from '@/utils/emails'
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native'

export default function Home() {
	return (
		<View style={styles.container}>
			<Input>
				<MenuButton />
				<Input.Field placeholder="Pesquisar no e-mail" />
				<Avatar source={{ uri: 'https://github.com/gabjohann.png' }} />
			</Input>

			<FlatList
				data={EMAILS}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Email data={item} />}
				contentContainerStyle={styles.listContent}
				ListHeaderComponent={() => (
					<Text style={styles.sectionTitle}>Entrada</Text>
				)}
				showsVerticalScrollIndicator={false}
			/>

			<FloatButton icon="edit" />
		</View>
	)
}

export function Loading() {
	return <ActivityIndicator style={styles.loading} />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111827',
		padding: 16,
		paddingTop: 56,
	},
	listContent: {
		rowGap: 24,
	},
	sectionTitle: {
		marginTop: 24,
		fontFamily: fontFamily.subtitle,
		color: colors.gray[400],
		textTransform: 'uppercase',
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#101028',
	},
})
