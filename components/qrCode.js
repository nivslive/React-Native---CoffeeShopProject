import QRCode from 'react-native-qrcode-svg';

// Simple usage, defaults for all but the value
const qr = () => {
//   let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <QRCode className="p-3"
        value="Just some string value"
        // logo={{uri: base64Logo}}
        size={250}
        logoBackgroundColor='transparent'
    />
  );
};

export default qr;