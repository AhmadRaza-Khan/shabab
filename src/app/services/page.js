const backgroundStyle = {
  backgroundImage: "url('./cde.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  position: 'relative',
  overflowX: 'hidden',
};

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const ServicesPage = () => {
  const services = [
    { title: "طبی مشورہ", description: "آپ کے جنسی مسائل کے مطابق بہترین طبی مشورے" },
    { title: "تیار شدہ ادویات", description: "ویب سائٹ پر موجود ادویات کی آپ کے درازے تک ترسیل" },
    { title: "آڈر پر ادویات کی تیاری", description: "آپ کے مسئلے اور آپ کی ترجیحات کے مطابق آڈر پر ادویات کی تیاری" },
  ];

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle} />
      <div className="relative flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-3xl lg:text-5xl urdu-text text-white font-bold mb-20 lg:mb-20 text-center">خدمات</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-opacity-80 rounded-lg p-4 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs mx-auto"
            >
              <h2 className="text-lg lg:text-xl urdu-text font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700 text-sm lg:text-base urdu-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
