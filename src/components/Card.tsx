import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themeStyles } from '../configurations/themes';

interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Card: React.FC<ProductProps> = ({ id, title, image, price }) => {
  const { theme } = useTheme();
const styles = themeStyles[theme];
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg border hover:shadow-lg transition overflow-hidden flex flex-col"
    >
      <div className={`aspect-[4/3] ${styles.cardImageBg} flex items-center justify-center overflow-hidden`}>
        <img src={image} alt={title} className="object-contain h-full w-full p-4" />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
