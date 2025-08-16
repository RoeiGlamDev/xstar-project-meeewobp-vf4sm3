import { useEffect, useState } from 'react';

/
 * Animation hook for luxury LRP cosmetics to enhance user experience
 * with elegant and high-end design animations.
 *
 * @returns {object} - An object containing animation states and handlers.
 */
export interface AnimationState {
  isVisible: boolean;
  animationClass: string;
  fadeIn: () => void;
  fadeOut: () => void;
}

export const useAnimation = (): AnimationState => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>('fade-out');

  /
   * Fade in animation for luxury LRP cosmetics components.
   */
  const fadeIn = () => {
    setAnimationClass('fade-in');
    setIsVisible(true);
  };

  /
   * Fade out animation for luxury LRP cosmetics components.
   */
  const fadeOut = () => {
    setAnimationClass('fade-out');
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      // Apply 3D effects or additional animations for luxury feel
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'orange';
    }

    // Cleanup function to revert styles
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isVisible]);

  return {
    isVisible,
    animationClass,
    fadeIn,
    fadeOut,
  };
};