import { StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/FontAwesome'; // FIXED

export default function OnboardingScreen() {
    return (
     <Onboarding
        onDone={() => console.log('done')}
        onSkip={() => console.log('Skipped')}

        pages={[
         {
             backgroundColor: '#fff',
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
            image: (
                 <Icon name="hand-peace-o" type="font-awesome" size={100} color="white" />),           
         },
          {
             backgroundColor: '#fff',
            image: ( <Icon name="paper-plane-o" type="font-awesome" size={100}  color="white"/>),
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
         },
          {
             backgroundColor: '#fff',
             image: ( <Icon name="bell-o" type="font-awesome" size={100} color="white" />),
             title: 'Onboarding 2',
             subtitle: 'Done with React Native Onboarding Swiper',
         },
    
    ]}
/>
    );

};


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
    textAlign: 'center',
    marginBottom: 16,
  },
 
});

