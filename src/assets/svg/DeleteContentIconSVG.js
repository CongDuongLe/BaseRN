import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { COLORS } from '@constants/Constants';

const DeleteContentIconSVG = props => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z"
      fill={props.color || COLORS.main_blue}
    />
    <Rect width={8} height={8} transform="translate(12 13)" fill="white" />
    <Path
      d="M13.7643 14.7643C13.8945 14.6341 14.1055 14.6341 14.2357 14.7643L16 16.5286L17.7643 14.7643C17.8945 14.6341 18.1055 14.6341 18.2357 14.7643C18.3659 14.8945 18.3659 15.1055 18.2357 15.2357L16.4714 17L18.2357 18.7643C18.3659 18.8945 18.3659 19.1055 18.2357 19.2357C18.1055 19.3659 17.8945 19.3659 17.7643 19.2357L16 17.4714L14.2357 19.2357C14.1055 19.3659 13.8945 19.3659 13.7643 19.2357C13.6341 19.1055 13.6341 18.8945 13.7643 18.7643L15.5286 17L13.7643 15.2357C13.6341 15.1055 13.6341 14.8945 13.7643 14.7643Z"
      fill={props.color || COLORS.main_red}
    />
  </Svg>
);

export default DeleteContentIconSVG;
