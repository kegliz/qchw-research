import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: ${theme.colors.border};
  z-index: 1000;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.primaryHover});
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 10px rgba(33, 128, 141, 0.3);
`;

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <ProgressContainer>
      <ProgressFill
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      />
    </ProgressContainer>
  );
};

export default ProgressBar;
