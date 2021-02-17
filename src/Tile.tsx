import { css } from 'solid-styled-components';
import getTileContent, { TileId } from './getTileContent';
import TileContent from './TileContent';

type TileProps = {
  id: string;
  width: number;
  height: number;
  left: number;
  top: number;
  src: string;
  delay: number;
};

const Tile = ({
  width, height, left, top, src, delay, id,
}: TileProps) => {
  const TileClassName = css`
    width: ${width}px;
    height: ${height}px;
    background-position: ${left}px ${top}px;
    background-image: url(${src});
    padding: 1px;
    background-clip: content-box;
    background-repeat: no-repeat;
    animation: rotateAndOpacity 700ms ${delay}ms linear 1 normal forwards;
    filter: blur(4px);
  `;
  const TileWrapperClassName = css`
    position: relative;
    width: ${width}px;
    height: ${height}px;

    &:hover {
      > * {
        filter: none;
      }
    }
  `;
  const element = (
    <TileContent delay={delay}>{getTileContent(id as TileId)}</TileContent>
  );

  return (
    <div
      className={TileWrapperClassName}
      on={{
        animationend: (e) => {
          if (e.animationName === 'rotateAndOpacity') {
            e.target.parentElement.appendChild(element as Node);
          }
        },
      }}
    >
      <div id={id} className={TileClassName} />
    </div>
  );
};
export default Tile;
