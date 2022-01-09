/*
 * @file: file description
 * @author: your name
 * @Date: 2022-01-09 20:03:56
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 20:15:03
 */


interface ILottieAnimationProps {
  type: string;
  fontSize: number;
  className?: string;
}

type Props = ILottieAnimationProps;

const IconFont = (props: Props) => {
  const { type, fontSize, className } = props;
  return (
    <img
      src={type}
      alt={'iconfont'}
      width={`${fontSize}px`}
      height={`${fontSize}px`}
    />
  )
}

export default IconFont;