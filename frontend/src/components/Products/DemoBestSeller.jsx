import { Link } from "react-router-dom";

const DemoBestSeller = () => {


    const BestProducts = [
      {
        _id: 1,
        name: "Product 1",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=1",
          },
        ],
      },

      {
        _id: 2,
        name: "Product 2",
        price: 200,
        images: [
          {
            url: "https://picsum.photos/500/500?random=2",
          },
        ],
      },
      {
        _id: 3,
        name: "Product 3",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=3",
          },
        ],
      },
      {
        _id: 4,
        name: "Product 4",
        price: 200,
        images: [
          {
            url: "https://picsum.photos/500/500?random=4",
          },
        ],
      },
    ];
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4 ">Best Seller</h2>
      <h3 className="text-lg text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BestProducts.map((product, index) => (
          <Link key={index} to={`/product/${product._id} `} className="block ">
            <div className="bg-white p-4 rounded-lg ">
              <div className="w-full h-75 mb-4 ">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.name}
                  className="w-full  h-[300px] object-cover rounded-lg"
                />
              </div>
              <h3 className="text-sm mb-2">{product.name}</h3>
              <p className="text-gray-500 font-medium text-sm tracking-tighter">
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DemoBestSeller;
