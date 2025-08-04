// Theme names used across the app
export type ThemeName = 'theme1' | 'theme2' | 'theme3';

// Controls for theme visuals
interface ThemeStyle {
  background: string;      
  text: string;           
  font: string;   
  layout: string;       
  card: string;           
  cardImageBg: string;  
  description: string;     
  button: string;          
}

// Theme configurations for the app
export const themeStyles: Record<ThemeName, ThemeStyle> = {
  theme1: {
    background: 'bg-gray-50',
    text: 'text-gray-900',
    font: 'font-sans',
    layout: 'p-4',
    card: 'bg-white',
    cardImageBg: 'bg-gray-800',
    description: 'text-gray-700',
    button: 'bg-blue-600 hover:bg-blue-700 text-white',
  },

  theme2: {
    background: 'bg-gray-900',
    text: 'text-white',
    font: 'font-serif',
    layout: 'flex flex-row',
    card: 'bg-gray-800',
    cardImageBg: 'bg-white',
    description: 'text-gray-300',
    button: 'bg-green-600 hover:bg-green-700 text-white',
  },

  theme3: {
    background: 'bg-gradient-to-br from-pink-100 to-yellow-100',
    text: 'text-pink-800',
    font: 'font-pacifico',
    layout: 'grid grid-cols-2 gap-4',
    card: 'bg-white bg-opacity-80',
    cardImageBg: 'bg-burlywood',
    description: 'text-[#BE185D]',
    button: 'bg-pink-500 hover:bg-pink-600 text-white font-bold',
  },
};
