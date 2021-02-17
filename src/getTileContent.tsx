import { styled } from 'solid-styled-components';

export type TileId = 'tile0' | 'tile1' | 'tile2' | 'tile3';

const Div = styled('div')`
  margin: 20px 10px;
`;

const tileContentMap: Record<TileId, any> = {
  tile0: (
    <Div>
      <div>Łukasz Mazurowski, PhD.</div>
      <div>
        Senior Software Developer at{' '}
        <a
          href='https://www.gft.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          GFT
        </a>
      </div>
    </Div>
  ),
  tile1: (
    <Div>
      Passionate web, mobile and backend programmer with over 6 years of
      commercial experience
    </Div>
  ),
  tile2: (
    <Div>
      Technology stack:
      <div>
        <a
          href='https://www.typescriptlang.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          TypeScript
        </a>
      </div>
      <div>
        <a
          href='https://reactjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          React.js
        </a>
      </div>
      <div>
        <a
          href='https://reactnative.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Native
        </a>
      </div>
      <div>
        <a
          href='https://redux.js.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Redux
        </a>
      </div>
      <div>
        <a
          href='https://styled-components.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Styled Components
        </a>
      </div>
      <div>
        <a href='https://nodejs.org/' target='_blank' rel='noopener noreferrer'>
          Node.js
        </a>
      </div>
      <div>
        <a href='https://nestjs.com/' target='_blank' rel='noopener noreferrer'>
          NestJS
        </a>
      </div>
      <div>
        <a
          href='https://firebase.google.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Firebase
        </a>
      </div>
    </Div>
  ),
  tile3: (
    <Div>
      My online activities:{' '}
      <div>
        <a
          href='https://www.linkedin.com/in/%C5%82ukasz-mazurowski-54816b66/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </div>
      <div>
        <a
          href='https://github.com/lmazurowski'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </div>
    </Div>
  ),
};

const getTileContent = (tileId: TileId) => tileContentMap[tileId];

export default getTileContent;
