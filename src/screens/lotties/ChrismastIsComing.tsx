import React, {useRef, useEffect} from 'react'
import { StyleSheet } from 'react-native-size-scaling';
import Lottie from "lottie-react-native";
import { ViewContainer } from "@core/View";
import SantaJson from '@assets/json/SantaClaus.json';
const ChrismastIsComing = (props) => {

  const animationRef = useRef<Lottie>(null);
  useEffect(() => {
    animationRef.current?.play();
  }, []);

return (
    <ViewContainer>
       <Lottie source={SantaJson}
               ref={animationRef} />
    </ViewContainer>
)}

export default ChrismastIsComing
export const styles = StyleSheet.create({});
