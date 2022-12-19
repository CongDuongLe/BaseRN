import * as React from 'react';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
import { COLORS } from '@constants/Constants';

const PinIconSVG = props => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_2249_6833)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3829 0.088282L23.9117 7.61744C24.0295 7.73483 24.0295 7.92702 23.9117 8.04479L21.3476 10.6083C21.2301 10.7263 21.0379 10.7263 20.9205 10.6083L20.1916 9.87977L16.8121 13.2587C17.5703 16.1144 16.8306 19.2855 14.5913 21.5244C14.5394 21.5767 14.4868 21.6277 14.4335 21.6781C14.2374 21.8646 14.2689 21.8635 14.0794 21.674L9.29636 16.891L0 23.9979L7.10924 14.704L2.31916 9.91434C2.12814 9.72293 2.14416 9.75301 2.33205 9.55555C2.37893 9.50652 2.42678 9.4573 2.47541 9.40847C4.7143 7.16959 7.886 6.42935 10.7415 7.18775L14.1206 3.80882L13.3915 3.07991C13.2741 2.96252 13.2741 2.77034 13.3915 2.65256L15.9554 0.088282C16.0734 -0.0291018 16.2656 -0.0291018 16.3829 0.088282Z"
        fill={props.color || COLORS.main_blue}
      />
      <Rect width={8} height={8} transform="translate(14 16)" fill="white" />
      <Path
        d="M15.7643 17.7643C15.8945 17.6341 16.1055 17.6341 16.2357 17.7643L18 19.5286L19.7643 17.7643C19.8945 17.6341 20.1055 17.6341 20.2357 17.7643C20.3659 17.8945 20.3659 18.1055 20.2357 18.2357L18.4714 20L20.2357 21.7643C20.3659 21.8945 20.3659 22.1055 20.2357 22.2357C20.1055 22.3659 19.8945 22.3659 19.7643 22.2357L18 20.4714L16.2357 22.2357C16.1055 22.3659 15.8945 22.3659 15.7643 22.2357C15.6341 22.1055 15.6341 21.8945 15.7643 21.7643L17.5286 20L15.7643 18.2357C15.6341 18.1055 15.6341 17.8945 15.7643 17.7643Z"
        fill={props.color || COLORS.main_blue}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2249_6833">
        <Rect width={24} height={23.9977} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PinIconSVG;
