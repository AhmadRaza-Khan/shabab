import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  const backgroundStyle = {
    backgroundImage: "url('./fg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };
  return (
    <div style={backgroundStyle} className="min-h-screen flex items-center justify-center sm:py-6 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4 lg:space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl mb-8 font-bold urdu-text text-white">رابطہ</h2>
          <p className="mt-5 urdu-text mb-16 leading-8 lg:leading-10 lg:mb-16 text-md lg:text-xl tracking-wide text-white">
            آپ ہم سے فون یا وٹس ایپ پر رابطہ کر سکتے ہیں، ہم آپ کے لیے ہر وقت موجود ہیں، آپ یہاں سے بھی آڈر کر سکتے ہیں، مزید اپنے مسئلے پر بات چیت کر سکتے ہیں
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-200 to-blue-200 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-6">

            {/* WhatsApp Contact */}
            <div className="flex items-center space-x-4 bg-green-50 p-4 rounded-lg border border-green-400">
              <FaWhatsapp className="text-3xl text-green-500" />
              <div>
                <p className="text-lg font-semibold text-gray-900">WhatsApp</p>
                <a href="https://wa.me/+923197927820" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                03197927820
                </a>
              </div>
            </div>

            {/* Mobile Number Contact */}
            <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg border border-blue-400">
              <FaPhone className="text-3xl text-blue-500" />
              <div>
                <p className="text-lg font-semibold text-gray-900">Mobile Number</p>
               <div className='flex flex-col '>
               <a href="tel:+923491707535" className="text-blue-700 hover:underline">
                03197927820
                </a>
                <a href="tel:+923491707535" className="text-blue-700 hover:underline">
                03232482946
                </a>
               </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
