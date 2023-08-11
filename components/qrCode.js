import QRCode from 'react-native-qrcode-svg';

// Simple usage, defaults for all but the value
const qr = () => {
//   let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <QRCode
        value="Just some string value"
        // logo={{uri: base64Logo}}
        size={300}
        logoBackgroundColor='transparent'
    />
  );
};

export default qr;