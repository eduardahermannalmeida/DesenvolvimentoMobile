import {
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
	useFonts,
} from '@expo-google-fonts/roboto'
import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Loading } from './(tabs)'

export default function Layout() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	})

	if (!fontsLoaded) {
		return <Loading />
	}

	return (
		<GestureHandlerRootView>
			<StatusBar></StatusBar>
			<Slot />
		</GestureHandlerRootView>
	)
}
