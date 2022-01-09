/*
 * @file: file description
 * @author: your name
 * @Date: 2022-01-09 20:18:17
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 20:33:14
 */
import Lottie from "react-lottie";

interface ILottieAnimationProps {
  srcJson: string;
  autoplay?: boolean;
  loop?: boolean;
  height?: number;
  width?: number;
}

type Props = ILottieAnimationProps;

const DEFAULT_HEIGHT = 400;
const DEFAULT_WIDTH = 400;

const LottieAnimation = (props: Props) => {
  const { srcJson, height=DEFAULT_HEIGHT, width=DEFAULT_WIDTH, autoplay=true, loop=true } = props;

  const defaultAnimationOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: JSON.parse(srcJson),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie options={defaultAnimationOptions} height={height} width={width} />
  )
}

export default LottieAnimation;