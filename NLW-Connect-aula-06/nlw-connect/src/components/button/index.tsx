import { colors } from '@/styles/colors';
import { ArrowRight } from 'lucide-react-native';
import {
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
	title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity {...rest}>
			<Text>{title}</Text>
			<ArrowRight size={24} color={colors.blue[300]} />
		</TouchableOpacity>
	);
}
