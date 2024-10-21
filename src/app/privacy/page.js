import Link from "next/link";
const backgroundStyle = {
  backgroundImage: "url('./privacy.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  position: 'relative',
  overflowX: 'hidden',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const contentStyle = {
    maxHeight: '90vh',
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

const PrivacyPolicyPage = () => {
  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle} />
      <div className="relative flex flex-col justify-center items-center h-full px-6">
        <h1 className="text-2xl lg:text-4xl urdu-text text-black font-bold my-16 text-center"> آپ کی رازداری</h1>
        
        <div className="bg-black bg-opacity-50 rounded-lg p-8 pb-20 lg:pb-32 text-gray-800 max-w-3xl mx-auto shadow-lg" style={contentStyle}>
          <h2 className="text-base lg:text-xl text-end urdu-text text-white font-semibold mb-4">تعارف</h2>
          <p className="mb-6 text-sm lg:text-md urdu-text leading-8 lg:leading-10 text-white text-end">
            ہمارے معاشرے میں جنسی موضوعات پر گفتگو کرنا ایک عیب سمجھا جاتا ہے جس کی وجہ مردوں اور عورتوں کے پیچیدہ مسائل کی بروقت تشخیص اور مناسب علاج نہیں ہو پاتا اور وقت کے ساتھ ساتھ یہ مسائل مزید پیچیدہ ہوتے جاتے ہیں اور علاج بھی مشکل ہوتا جاتا ہے اور پھر نتیجتا اولاد جیسی عظیم نعمت سے محرومی کا دکھ دیکھنا پرتا ہے، انھی مسائل کے پیش نظر ہم آپ کے لیے لے کے آئے ہیں ایسی خدمات جہاں آپ کے تمام تر پیچیدہ مسائل کا حل وہ بھی آپ کے دروازے پر مکمل رازداری کے ساتھ، جس کے لیے ہم آپ کا نام، موبائل نمبر اور ایڈرید لیتے ہیں تا کہ مطلوبہ جگہ پر ادویات پہنچائی جا سکیں، مزید اس ڈیٹا کے متعق آپ نیچے پڑھ سکتے ہیں
          </p>
          
          <h2 className="text-base lg:text-xl text-end urdu-text text-white font-semibold mb-4">ہم کون سے ڈیٹا محفوظ کرتے ہیں</h2>
          <p className="mb-6 text-sm lg:text-md urdu-text leading-8 lg:leading-10 text-white text-end">
          ہم آپ کا نام، فون نمبر اور اڈریس محفوظ کرتے ہیں اس کے علاوہ آپ سے کوئی ڈیٹا نہیں مانگا جاتا نہ ہم محفوظ کرتے ہیں
          </p>

          <h2 className="text-base lg:text-xl urdu-text text-end font-semibold text-white mb-4">ہم آپ کے ڈیٹا کا استعمال کیسے کرتے ہیں</h2>
          <p className="text-end text-sm lg:text-md urdu-text leading-8 lg:leading-10 text-white mb-6">
            آپ  کا نام، اڈریس اور موبائل نمبر محفوظ کرنے کا مقصد صرف اور صرف آپ تک پراڈکٹ پہنچانا ہے اور جیسے ہی آپ کو پراڈکٹ موصول ہو جاتی ہے یہ سب ڈیٹا ڈیلیٹ کر دیا جاتا ہے
          </p>

          <h2 className="text-base lg:text-xl urdu-text text-end font-semibold text-white mb-4">آپ کے حقوق</h2>
          <p className= "text-end text-sm lg:text-md urdu-text leading-8 lg:leading-10 text-white mb-6">
            پرادکٹ آڈر کرنے سے لے کر پراڈکٹ آپ تک پہنچنے تک آپ کی رازداری آپ کا حق ہے اور ہم اس رازداری کے حق کا مکمل احترام کرتے ہوئے آپ تک رازداری  سے تمام پراڈکٹس پہنچاتے ہیں
          </p>

          <h2 className="text-base lg:text-xl urdu-text text-white text-end font-semibold mb-4">ہم سے رابطہ کریں</h2>
          <p className="text-end text-sm lg:text-md leading-8 lg:leading-10 urdu-text text-white">اگر آپ کو اس رازداری کی پالیسی کے بارے میں کوئی سوالات ہیں تو براہ کرم ہمیں <Link className="text-lg font-bold hover:underline text-blue-700" href={'/contact'}>رابطہ</Link> کریں</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
