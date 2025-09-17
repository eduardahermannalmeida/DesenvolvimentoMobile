import { TouchableOpacity } from 'react-native'
import { StatusIcon } from '../status-icon'

export function Filter({ status, isActive, ...rest }) {
	return (
		<TouchableOpacity {...rest}>
			<StatusIcon status={status} />
			<Text> {status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}</Text>
		</TouchableOpacity>
	)
}
