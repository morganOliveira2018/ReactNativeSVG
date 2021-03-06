import React from 'react';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
//import PlanetSVG from './src/assets/PlanetSVG';
import { StyleSheet } from 'react-native';


export default function App() {
    return (
        <SignUp/>
    );
}

/* <PlanetSVG style={styles.planet} width={300} height={300} planetColor='#4caf50' craterColor='#2e7d32' ringColor='#f06292' hasRing={true}/>
   <PlanetSVG style={styles.planet} width={250} height={250} planetColor='#4caf50' craterColor='#2e7d32'/>
   <PlanetSVG style={styles.planet} width={100} height={100} planetColor='#ff9800' craterColor='#ef6c00'/> */

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    planet: {
      margin: 10
    }
}) 