import { Trash } from 'phosphor-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusIcon } from '../status-icon'

export function Item({ data, onStatus, onRemove }) {
	return (
		<View>
			<StatusIcon status={status} />
			<Text>{description}</Text>
			<TouchableOpacity>
				<Trash size={16} />
			</TouchableOpacity>
		</View>
	)
}
