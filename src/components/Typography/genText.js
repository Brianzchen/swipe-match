// @flow
import type { VariantT } from '.';

type FontDetailsT = {
  fontSize: string,
  fontWeight: string,
  lineHeight: string,
};

const getFontDetails = (size: number, weight: number): FontDetailsT => ({
  fontSize: `${size}px`,
  fontWeight: `${weight}`,
  lineHeight: `${size * 1.5}px`,
});

export default (type: VariantT): FontDetailsT => {
  switch (type) {
    case 'body':
      return getFontDetails(14, 400);
    case 'label':
      return getFontDetails(14, 600);
    case 'heading1':
      return getFontDetails(20, 600);
    case 'heading2':
      return getFontDetails(16, 600);
    case 'heading3':
      return getFontDetails(16, 400);
    case 'button':
      return getFontDetails(22, 400);
    default:
      return getFontDetails(14, 400);
  }
};
