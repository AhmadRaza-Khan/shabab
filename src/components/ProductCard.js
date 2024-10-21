"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const backgroundStyle = {
  backgroundImage: "url('./abc.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
};

const ProductCard = ({ productList }) => {
  const router = useRouter();

  const productDetails = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <div style={backgroundStyle} className="flex justify-center items-center flex-col p-6">
      <h1 className="text-xl lg:text-2xl mt-4 mb-5 urdu-text text-center">ہماری معیاری ادویات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 w-full">
        {productList.map((dat, index) => (
          <div
            onClick={() => productDetails(dat._id)}
            className="mx-auto rounded-lg bg-gradient-to-r from-purple-200 to-blue-200 border-[#B2B4B2] border-2 cursor-pointer"
            key={index + 1}
          >
            <Image src={dat.image} width={200} height={200} alt="img" className="contain rounded-t-lg h-52 w-52" />
            <div className="flex justify-between mx-2 my-3">
              <h3 className="text-center font-bold text-xs">{dat.engTitle}</h3>
              <h3 className="text-center text-xs font-bold urdu-text">{dat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
