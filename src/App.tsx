import { styled, css } from 'solid-styled-components';
import { createState, onMount, onCleanup } from 'solid-js';
import Tile from './Tile';
import avatar from './avatar.jpg';
import smoke from './smoke.webm';

const AppWrapper = styled('div')`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  width: 964px;

  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 0;
  }
`;

const Footer = styled('div')`
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  text-align: center;
  color: #ddd;
  bottom: 0;
  left: 0;
  padding: 10px;
  background-color: #000;
`;

const ImgClassName = css`
  display: none;
  width: 100%;
`;

const length = 2;
const ylength = 2;

const App = () => {
  const [state, setState] = createState({
    tiles: [],
    videoClassName: '',
  });

  let setVideoHeight;

  onMount(() => {
    setVideoHeight = setTimeout(() => {
      const root = document.getElementById('root');
      const height = root ? `${root.clientHeight}px` : '100vh';

      const VideoClassName = css`
      position: absolute;
      object-fit: cover;
      z-index: 1;
      opacity: 0.2;
      display: block;
      width: 100vw;
      height: ${height};

      @media screen and (min-width: 960px) {
        display: block;
        width: 964px;
        height: 640px;
        top: 20px;
      }
    `;

      setState({
        videoClassName: VideoClassName,
      });
    }, 1000);
  });

  onCleanup(() => {
    if (setVideoHeight) {
      clearTimeout(setVideoHeight);
    }
  });

  const { innerWidth } = window;

  const handleOnLoad = (e) => {
    const { src, naturalWidth, naturalHeight } = e.currentTarget;
    const wrapper = document.getElementById('wrapper');

    try {
      wrapper?.removeChild(e.currentTarget);
    } catch (error) {
      return;
    }

    let delay = 0;
    const tiles = [];

    for (let j = 0; j < length; j++) {
      for (let i = 0; i < length; i++) {
        const left = ((-1 * naturalWidth) / length) * i;
        const top = ((-1 * naturalHeight) / ylength) * j;
        const tileWidth = Math.floor(naturalWidth / length);
        const tileHeight = Math.floor(naturalHeight / ylength);

        tiles.push(
          <Tile
            id={`tile${delay / 150}`}
            width={tileWidth > innerWidth ? innerWidth : tileWidth}
            height={tileHeight}
            left={left}
            top={top}
            src={src}
            delay={delay}
          />,
        );
        delay += 150;
      }
    }

    setState({
      tiles,
    });
  };

  return (
    <>
      <AppWrapper>
        <Wrapper id='wrapper'>
          <img
            id='img'
            className={ImgClassName}
            src={avatar}
            onLoad={handleOnLoad}
          />
          {state.tiles}

          {state.videoClassName && (
            <video
              className={state.videoClassName}
              src={smoke}
              autoplay
              muted
              loop
            />
          )}
        </Wrapper>
      </AppWrapper>
      <Footer>
        Powered by{' '}
        <a
          href='https://github.com/ryansolid/solid'
          target='_blank'
          rel='noopener noreferrer'
        >
          SolidJS
        </a>
      </Footer>
    </>
  );
};

export default App;
