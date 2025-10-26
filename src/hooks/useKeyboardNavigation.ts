import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['/', '/about', '/projects', '/contact'];

export const useKeyboardNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        const currentIndex = pages.indexOf(location.pathname);
        const nextIndex = (currentIndex + 1) % pages.length;
        navigate(pages[nextIndex]);
      } else if (event.key === 'ArrowLeft') {
        const currentIndex = pages.indexOf(location.pathname);
        const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
        navigate(pages[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [location.pathname, navigate]);
};
