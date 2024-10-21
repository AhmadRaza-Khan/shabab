import { getProductAction, getProductDetailsAction } from '@/actions/page';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailPage = async ({ params }) => {
  const data = await getProductAction();
  const productList = data?.data
  const { details } = params;
  let product = null;
  try {
    const response = await getProductDetailsAction(details)
    product = response.product;
  } catch (error) {
    console.error("Error fetching product data: ", error);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const filteredProductList = productList?.filter((data) => data._id !== details);

  return (
    <div className="flex flex-col items-center shadow-md shadow-slate-600 py-10 bg-black">

      {/* Product Details Section */}
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-black shadow-slate-600 shadow-lg py-5 rounded-lg overflow-hidden mb-4 mt-10">
        <Image
          className="w-64 mx-auto rounded-lg h-64 object-cover object-center"
          height={256}
          width={256}
          src={product.image}
          alt={product.title}
          priority
        />

        <div className="p-6">
          <div className='flex justify-between'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-end text-gray-300">
            {product.engTitle}
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl urdu-text font-bold text-end text-gray-300">
            {product.title}
          </h1>
          </div>

          <p className="mt-5 text-end my-5 urdu-text leading-8 lg:leading-10 tracking-wider text-gray-300 text-sm md:text-base">
            {product.description}
          </p>

          <div className="flex flex-col justify-between mt-4">
            <div className="text-sm urdu-text text-end text-gray-300 mt-2 md:mt-0">
              <b className='text-base'>طریقہ استعمال:</b> {product.dosage}
            </div>
            <div className="text-sm urdu-text mt-2 text-end md:text-xl font-bold text-white">
              {product.price} :قیمت
            </div>
          </div>

          <button className="w-full bg-gray-600 urdu-text hover:bg-gray-800 border-2 border-white text-white font-semibold py-2 px-4 mt-4 rounded-lg shadow-md transition duration-300">
            <Link href={`/order?product=${product.engTitle}`}>آرڈر کریں</Link>
          </button>
        </div>
      </div>

      {/* Product List Section (Grid at Bottom) */}
      <div className="w-full max-w-4xl">
        <p className="text-center urdu-text mb-5 text-white font-bold text-lg">دیگر ادویات</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProductList?.map((data, index) => (
            <Link
              href={`/products/${data._id}`}
              className="flex flex-col items-center border shadow-slate-600 p-4 rounded-lg shadow-md hover:shadow-white transition-shadow duration-200"
              key={index + 1}
            >
              <Image
                src={data.image}
                alt={data.title}
                height={128}
                width={128}
                className="rounded-lg h-32 w-32 object-cover mb-2"
              />
              <div className="">
        <h3 className="text-center text-gray-200 text-xs">{data.engTitle}</h3>
        <h3 className="text-center urdu-text text-gray-200 text-xs">{data.title}</h3>
        </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
