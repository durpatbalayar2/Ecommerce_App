import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["REd", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish jacket 1",
    },

    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish jacket 2",
    },
  ],
};

// Similiar Product Array
const similarProducts = [
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

const Productdetails = () => {
const [mainImage, setMainImage] = useState(
  selectedProduct.images.length > 0 ? selectedProduct.images[0].url : null
);


  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color befoe adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart successfully!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6 ">
      <div className="max-w-6xl mx-auto bg-white p-7 rounded-lg ">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}

          <div className="hidden md:flex flex-col space-y-4 mr-6 ">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                // src={selectedProduct.images[0]?.url}
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile  Thumnails */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right Side  */}
          <div className="md-w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              $ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2 ">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border  ${
                      selectedColor === color
                        ? "border-4 border-black "
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4 ">
              <p className="text-gray-700 ">Size:</p>
              <div className="flex gap-2 mt-2 ">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="px-2 py-1 bg-gray-200 rounded text-lg 
             hover:bg-gray-300 
             active:bg-gray-400  "
                >
                  -
                </button>
                <span className="text-lg px-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg  hover:bg-gray-300 
             active:bg-gray-400  "
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded-lg w-full mb-4 uppercase ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "Add To Cart"}
            </button>

            <div className="mt-10 text-gray-700 ">
              <h3 className="text-xl font-bold mb-4"> Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium  mb-4">
            You May Also Like
          </h2>

          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
