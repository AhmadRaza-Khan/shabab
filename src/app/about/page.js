const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const AboutUsPage = () => {
  const backgroundStyle = {
    backgroundImage: "url('./kl.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative',
  };
  
  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle} />
      <div className="relative flex flex-col justify-center items-center h-full px-6">
        <h1 className="text-xl mt-5 lg:text-4xl urdu-text text-white font-bold mb-5  lg:mb-10 text-center">ہمارے متعلق</h1>
        <p className="text-sm lg:text-md urdu-text leading-8 lg:leading-10 text-white text-center max-w-3xl mb-4">
          ہمارے ہاں بہترین اور تجربہ کار حکما موجود ہیں جن کی نگرانی میں تمام تر ادویات تیار کی جاتی ہیں، ان ادویات کی تیاری میں خالص اور غیر نقصان دہ جڑی بوٹیاں استعمال کی جاتی ہیں، صفائی ہماری ترجیح میں سر فہرست ہے، آپ تک معیاری ادویات پہنچانا ہمارا نصب العین ہے، ہمارا ماننا ہے کہ ایک بار ہماری کسی بھی دوا کے استعمال کے بعد آپ اپنے جاننے والوں میں بھی ان ادویات کے استعمال کا مشورہ دیں گے، کیونکہ
        </p>
        <b className="text-green-500 mb-12 urdu-text lg:mb-16 lg:mt-10 text-xl tracking-wider">ہمارا ایمان صحت مند نوجوان </b>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-purple-200 to-blue-200 bg-opacity-90 rounded-lg p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-lg lg:text-xl urdu-text font-semibold mb-4">ہمارا منشور</h2>
            <p className="text-gray-700 text-sm urdu-text tracking-wider font-bold">ہمارے گاہک کا اعمتاد ہی ہماری کامیابی کی ضمانت ہے</p>
          </div>

          <div className="bg-gradient-to-r from-purple-200 to-blue-200 bg-opacity-90 rounded-lg p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-lg lg:text-xl urdu-text font-semibold mb-4">ہمارا مقصد</h2>
            <p className="text-gray-700 text-sm urdu-text tracking-wider font-bold">آپ کے دروازے تک بہترین اور معیاری ادویات کی ترسیل</p>
          </div>

          <div className="bg-gradient-to-r from-purple-200 to-blue-200 bg-opacity-90 rounded-lg p-4 lg:p-6 text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-lg lg:text-xl urdu-text font-semibold mb-4">ہماری ترجیحات</h2>
            <p className="text-gray-700 urdu-text text-sm tracking-wider font-bold">معیار اور انسانیت کی خدمت</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
