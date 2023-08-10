import QRCode from 'react-native-qrcode-svg';

// Simple usage, defaults for all but the value
const qr = () => {
  return (
    <QRCode
      value="http://awesome.link.qr"
    />
  );
};

export default qr;