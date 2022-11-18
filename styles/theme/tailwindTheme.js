const px = (num) => `${num}px`;

const rem = (px) => `${px / 16}rem`;

const getSpacings = () => {
  let spacings = {
    inherit: 'inherit',
    [1]: px(1),
    [360]: px(360),
    [440]: px(440),
    [586]: px(586),
    [592]: px(592),
  };
  for (let i = 0; i < 180; i++) {
    if (i % 2 === 0) {
      spacings[i] = px(i);
    }
  }

  return spacings;
};

const getFontSizes = () => {
  let fontSizes = {
    [9]: rem(9),
    [11]: rem(11),
  };
  for (let i = 0; i < 120; i++) {
    if (i % 2 === 0) {
      fontSizes[i] = rem(i);
    }
  }
  return fontSizes;
};

const BORDER_RADIUS = {
  8: rem(8),
};

const COLORS = {
  transparent: '#FFFFFF00',
  white: '#ffffff',
  black: '#1a1a1a',
  red: 'red',
};

const LINE_HEIGHTS = {
  one: '1',
  1: '1.1',
  ['156']: '1.56',
  2: '1.2',
  3: '1.3',
  4: '1.4',
  5: '1.5',
};

const SCREENS = {
  xs: '321px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1440px',
};

const COMPONENTS_TO_ADD = {
  '.hCenterAbsolute': {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    right: '50%',
  },
  '.imgOptimizeContrast': {
    ['image-rendering']: '-webkit-optimize-contrast',
  },
  '.ellipsifyTwoLines': {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    'line-clamp': '2',
    '-webkit-box-orient': 'vertical',
  },
};

module.exports = {
  getSpacings,
  COLORS,
  SCREENS,
  getFontSizes,
  BORDER_RADIUS,
  LINE_HEIGHTS,
  COMPONENTS_TO_ADD,
};
