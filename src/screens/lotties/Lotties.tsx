import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useRef, useEffect} from 'react'
import Lottie from 'lottie-react-native';

const Lotties = () => {

  const animationRef = useRef<Lottie>(null);
  useEffect(() => {
    animationRef.current?.play();

  }, []);



  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Lottie
        ref={animationRef}
        source={require('../../assets/json/Christmas.json')}
      />
    </SafeAreaView>
  );
}

export default Lotties

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },

})
