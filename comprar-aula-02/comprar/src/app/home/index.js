import { Image, TouchableOpacity, View } from 'react-native'
import { Button } from '../../components/button'
import { Filter } from '../../components/filter'
import { Input } from '../../components/input'
import { FilterStatus } from '../../types/filter-status'
import { styles } from './styles'
import { FlatList } from 'react-native'
import { Item } from '../../components/items'

export function Home() {
	const [filter, setFilter] = useState(FilterStatus.PENDING)

	return (
		<View style={styles.container}>
			<Image source={require('../../assets/logo.png')} style={styles.logo} />
			<View style={styles.form}>
				<Input placeholder="O que você precisa comprar?" />
				<Button title="Adicionar" />
			</View>
			<View>
				<View>
					{Object.values(FilterStatus).map((status) => (
						<Filter key={status} status={status} isActive={filter === status} />
					))}

					<TouchableOpacity>
						<Text> Limpar </Text>
					</TouchableOpacity>

				</View>

					<FlatList
					data={items}
					keyExtractor={item => item.id}
					renderItem={({item}) => (
						<Item data={item}/>
					)}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={() => <Text>Nenhum item aqui.</Text>}
					/>

			</View>
		</View>
	)
}
