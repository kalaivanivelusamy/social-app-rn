import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
    const router = useRouter();

      return (
              <View style={styles.container}>
                  <Text style={styles.title}>Welcome to the Login Screen!</Text>
                  <TouchableOpacity onPress={() => router.push('/OnboardingScreen')}>
                      <Text>Login</Text>
                  </TouchableOpacity>
              </View>
  );
}

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
 
});
