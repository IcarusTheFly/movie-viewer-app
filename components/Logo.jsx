import * as React from "react";
import Svg, {Circle, Text} from "react-native-svg";
const Logo = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="50 0 300 100" {...props}>
    <Circle cx={50} cy={50} r={40} fill="#7C3AED" />
    <Circle cx={50} cy={50} r={30} fill="#4C1D95" />
    <Circle cx={50} cy={30} r={5} fill="#FDE047" />
    <Circle cx={30} cy={50} r={5} fill="#FDE047" />
    <Circle cx={70} cy={50} r={5} fill="#FDE047" />
    <Circle cx={50} cy={70} r={5} fill="#FDE047" />
    <Text x={110} y={60} fill="#FDE047" fontFamily="Arial, sans-serif" fontSize={40} fontWeight="bold">
      {"\nMovie Viewer\n  "}
    </Text>
  </Svg>
);
export default Logo;
