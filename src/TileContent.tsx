import { css } from 'solid-styled-components';

type TileContentProps = {
  delay: number;
  children: any;
};

const TileContent = ({ delay, children }: TileContentProps) => {
  const TileContentClassName = css`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 50%;
  left: 50%;
  opacity: 0;
  padding: 10px;
  color: white;
  animation: opacity 1000ms ${delay}ms ease-out 1 normal forwards;
  transform: translate(-50%, -50%);
  `;
  return <div className={TileContentClassName}>{children}</div>;
};

export default TileContent;
