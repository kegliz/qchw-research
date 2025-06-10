import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const ShortcutsToggle = styled(motion.button)`
  position: fixed;
  top: ${theme.spacing[20]};
  right: ${theme.spacing[20]};
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  box-shadow: ${theme.shadows.md};
  z-index: 1001;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    top: ${theme.spacing[16]};
    right: ${theme.spacing[16]};
    width: 36px;
    height: 36px;
  }
`;

const ShortcutsPanel = styled(motion.div)`
  position: fixed;
  top: ${theme.spacing[80]};
  right: ${theme.spacing[20]};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[24]};
  box-shadow: ${theme.shadows.xl};
  z-index: 1001;
  min-width: 280px;

  @media (max-width: ${theme.breakpoints.sm}) {
    top: ${theme.spacing[64]};
    right: ${theme.spacing[16]};
    left: ${theme.spacing[16]};
    min-width: auto;
  }
`;

const ShortcutsTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing[16]};
  text-align: center;
`;

const ShortcutsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[12]};
`;

const ShortcutItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[16]};

  .description {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.text};
  }

  .keys {
    display: flex;
    gap: ${theme.spacing[4]};
  }
`;

const KeyBadge = styled.span`
  display: inline-block;
  padding: ${theme.spacing[4]} ${theme.spacing[8]};
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.mono};
  color: ${theme.colors.text};
  min-width: 24px;
  text-align: center;
`;

const shortcuts = [
  { description: 'Next slide', keys: ['→', '↓', 'Space'] },
  { description: 'Previous slide', keys: ['←', '↑'] },
  { description: 'First slide', keys: ['Home'] },
  { description: 'Last slide', keys: ['End'] },
  { description: 'Go to slide', keys: ['1-9'] },
  { description: 'Toggle shortcuts', keys: ['?'] }
];

const KeyboardShortcuts: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShortcuts = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Listen for '?' key to toggle shortcuts
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === '?' || (event.shiftKey && event.key === '/')) {
        event.preventDefault();
        toggleShortcuts();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleShortcuts]);

  return (
    <>
      <ShortcutsToggle
        onClick={toggleShortcuts}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Keyboard shortcuts (?)"
      >
        ?
      </ShortcutsToggle>

      <AnimatePresence>
        {isOpen && (
          <ShortcutsPanel
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ShortcutsTitle>Keyboard Shortcuts</ShortcutsTitle>
            <ShortcutsList>
              {shortcuts.map((shortcut, index) => (
                <ShortcutItem key={index}>
                  <span className="description">{shortcut.description}</span>
                  <div className="keys">
                    {shortcut.keys.map((key, keyIndex) => (
                      <KeyBadge key={keyIndex}>{key}</KeyBadge>
                    ))}
                  </div>
                </ShortcutItem>
              ))}
            </ShortcutsList>
          </ShortcutsPanel>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
