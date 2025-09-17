import React, { useState, useEffect, useCallback, useRef } from 'react';

interface TypewriterTextProps {
  text: string | string[];        // 🔹 accepte string ou string[]
  delay?: number;
  className?: string;
  repeat?: boolean;
  onComplete?: () => void;
  permanentDisplay?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 100,
  className = "",
  repeat = false,
  onComplete,
  permanentDisplay = true
}) => {
  const texts = Array.isArray(text) ? text : [text]; // Toujours un tableau
  const [displayText, setDisplayText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRestart, setShouldRestart] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Observer pour redémarrer si repeat
  useEffect(() => {
    if (!repeat || !elementRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isComplete) {
        setShouldRestart(true);
      }
    }, { threshold: 0.5 });

    observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [repeat, isComplete]);

  // Redémarrer
  useEffect(() => {
    if (shouldRestart) {
      setDisplayText('');
      setCurrentCharIndex(0);
      setCurrentTextIndex(0);
      setIsComplete(false);
      setShouldRestart(false);
    }
  }, [shouldRestart]);

  // Affiche le prochain caractère
  const typeNextCharacter = useCallback(() => {
    const currentString = texts[currentTextIndex];
    if (currentCharIndex < currentString.length) {
      setDisplayText(prev => prev + currentString[currentCharIndex]);
      setCurrentCharIndex(prev => prev + 1);
    } else {
      // Passe au texte suivant ou termine
      if (currentTextIndex < texts.length - 1) {
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
        setDisplayText(''); // Efface pour le nouveau texte
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    }
  }, [currentCharIndex, currentTextIndex, texts, isComplete, onComplete]);

  // Reset si text change
  useEffect(() => {
    setDisplayText('');
    setCurrentCharIndex(0);
    setCurrentTextIndex(0);
    setIsComplete(false);
  }, [text]);

  // Effet de frappe
  useEffect(() => {
    const currentString = texts[currentTextIndex];
    if (currentCharIndex < currentString.length) {
      const timeout = setTimeout(typeNextCharacter, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentTextIndex, texts, delay, typeNextCharacter]);

  return (
    <span
      ref={elementRef}
      className={`
        inline-block
        whitespace-pre-wrap
        break-words
        leading-tight
        align-top
        ${className}
        ${(!isComplete || !permanentDisplay)
          ? 'after:content-[""] after:inline-block after:w-0.5 after:h-5 after:bg-current after:ml-0.5 after:-mb-0.5 after:animate-pulse'
          : ''}
      `}
    >
      {displayText}
    </span>
  );
};

export default TypewriterText;
