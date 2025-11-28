import { StyleSheet, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/FontAwesome'; // FIXED


 const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'; //black color for selected dot and gray for unselected dot
    return (
      <View style = {
        {
          width: 5,
          height: 5,
          marginHorizontal: 3,
          backgroundColor
        }
      }> 
      </View>
    );
  }
export default function OnboardingScreen() {
 
    return (
     <Onboarding
        onDone={() => console.log('done')}
        onSkip={() => console.log('Skipped')}
        DotComponent={ Dots }

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

