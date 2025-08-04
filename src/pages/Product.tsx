import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themeStyles } from '../configurations/themes';

const Product: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

  const { theme } = useTheme();
  const { background, card, description, button } = themeStyles[theme];

  // Product data fetched from API
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="mt-24 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className={`mt-16 min-h-screen px-6 py-10 ${background}`}>
      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 rounded-xl shadow-lg p-8 ${card}`}>
        {/* Product image displayed */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[450px] object-contain w-full"
          />
        </div>

        {/* Product details displayed */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
            <p className={`mb-5 ${description}`}>{product.description}</p>
            <p className="text-2xl font-bold mb-3">
              ${product.price.toFixed(2)}
            </p>
            <div className="text-yellow-500 text-sm mb-6">
              ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </div>
          </div>

          <button className={`self-start py-2 px-6 rounded-md transition ${button}`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
