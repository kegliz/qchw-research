import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import type { SlideData } from '../types/Slide';

const SlideWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${theme.spacing[32]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[16]};
  }
`;

const TitleSlideContent = styled.div`
  text-align: center;
  max-width: 900px;

  h1 {
    font-size: ${theme.fontSizes['6xl']};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing[24]};
    line-height: 1.1;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['4xl']};
    }
  }

  h2 {
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing[32]};
  }

  .title-meta p {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing[8]};
  }

  .date {
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.primary};
  }
`;

const ContentSlideWrapper = styled.div`
  width: 100%;
  max-width: 1000px;

  h1 {
    font-size: ${theme.fontSizes['5xl']};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing[32]};
    text-align: center;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['3xl']};
      margin-bottom: ${theme.spacing[24]};
    }
  }

  .description {
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.textSecondary};
    text-align: center;
    margin-bottom: ${theme.spacing[32]};
    line-height: 1.6;
  }
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[48]};
  margin-bottom: ${theme.spacing[32]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[24]};
  }

  .column {
    text-align: left;

    h3 {
      font-size: ${theme.fontSizes['2xl']};
      font-weight: ${theme.fontWeights.semibold};
      margin-bottom: ${theme.spacing[16]};
      color: ${theme.colors.text};
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: ${theme.fontSizes.lg};
        line-height: 1.6;
        margin-bottom: ${theme.spacing[12]};
        padding-left: ${theme.spacing[20]};
        position: relative;
        color: ${theme.colors.text};

        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${theme.colors.primary};
          font-weight: bold;
        }
      }
    }
  }
`;

const StatusInfo = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[24]};
  text-align: left;

  p {
    font-size: ${theme.fontSizes.lg};
    line-height: 1.6;
    margin-bottom: ${theme.spacing[12]};
    color: ${theme.colors.text};

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      font-weight: ${theme.fontWeights.semibold};
      color: ${theme.colors.primary};
    }
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  li {
    font-size: ${theme.fontSizes.xl};
    line-height: 1.6;
    margin-bottom: ${theme.spacing[16]};
    padding-left: ${theme.spacing[24]};
    position: relative;
    color: ${theme.colors.text};

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${theme.colors.primary};
      font-weight: bold;
      font-size: ${theme.fontSizes['2xl']};
    }
  }

  &.large li {
    font-size: ${theme.fontSizes['2xl']};
    margin-bottom: ${theme.spacing[20]};
  }
`;

const ComparisonTable = styled.div`
  overflow-x: auto;
  margin: ${theme.spacing[32]} 0;

  table {
    width: 100%;
    border-collapse: collapse;
    background: ${theme.colors.surface};
    border-radius: ${theme.borderRadius.lg};
    overflow: hidden;
    box-shadow: ${theme.shadows.md};

    th {
      background: ${theme.colors.primary};
      color: white;
      font-weight: ${theme.fontWeights.semibold};
      padding: ${theme.spacing[16]} ${theme.spacing[12]};
      text-align: left;
      font-size: ${theme.fontSizes.lg};
    }

    td {
      padding: ${theme.spacing[16]} ${theme.spacing[12]};
      border-bottom: 1px solid ${theme.colors.border};
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.text};

      &:first-of-type {
        font-weight: ${theme.fontWeights.semibold};
      }
    }

    tr:last-child td {
      border-bottom: none;
    }
  }
`;

const StatusBadge = styled.span<{ status?: string }>`
  display: inline-block;
  padding: ${theme.spacing[4]} ${theme.spacing[12]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  
  ${({ status }) => {
    switch (status) {
      case 'high':
        return `background: ${theme.colors.status.high}20; color: ${theme.colors.status.high};`;
      case 'good':
        return `background: ${theme.colors.status.good}20; color: ${theme.colors.status.good};`;
      case 'moderate':
        return `background: ${theme.colors.status.moderate}20; color: ${theme.colors.status.moderate};`;
      case 'low':
        return `background: ${theme.colors.status.low}20; color: ${theme.colors.status.low};`;
      case 'very-low':
        return `background: ${theme.colors.status['very-low']}20; color: ${theme.colors.status['very-low']};`;
      case 'excellent':
        return `background: ${theme.colors.status.excellent}20; color: ${theme.colors.status.excellent};`;
      case 'unknown':
        return `background: ${theme.colors.status.unknown}20; color: ${theme.colors.status.unknown};`;
      default:
        return `background: ${theme.colors.secondary}; color: ${theme.colors.text};`;
    }
  }}
`;

const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[24]};
  margin: ${theme.spacing[32]} 0;

  .challenge-item {
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing[24]};
    text-align: center;

    h3 {
      font-size: ${theme.fontSizes['2xl']};
      margin-bottom: ${theme.spacing[12]};
      color: ${theme.colors.text};
    }

    p {
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.textSecondary};
      line-height: 1.6;
    }
  }
`;

const ExpertOpinions = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[24]};
  margin-top: ${theme.spacing[32]};

  h3 {
    font-size: ${theme.fontSizes['2xl']};
    margin-bottom: ${theme.spacing[20]};
    color: ${theme.colors.text};
    text-align: center;
  }

  .opinion-item {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing[16]};
    gap: ${theme.spacing[16]};

    span {
      min-width: 200px;
      font-size: ${theme.fontSizes.lg};
      color: ${theme.colors.text};
    }

    .bar {
      flex: 1;
      height: 24px;
      background: ${theme.colors.secondary};
      border-radius: ${theme.borderRadius.full};
      overflow: hidden;
      position: relative;

      .fill {
        height: 100%;
        background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.primaryHover});
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: ${theme.spacing[8]};
        color: white;
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.medium};
        transition: width ${theme.transitions.normal};
      }
    }
  }
`;

const Timeline = styled.div`
  margin-top: ${theme.spacing[24]};
  
  .timeline-item {
    margin-bottom: ${theme.spacing[20]};
    padding-left: ${theme.spacing[24]};
    position: relative;
    border-left: 2px solid ${theme.colors.border};

    &::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 4px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${theme.colors.primary};
    }

    .year {
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes.lg};
      display: block;
      margin-bottom: ${theme.spacing[4]};
    }

    p {
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes.lg};
      line-height: 1.6;
    }
  }
`;

const KeyTakeaway = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary}10, ${theme.colors.primary}05);
  border: 1px solid ${theme.colors.primary}30;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[32]};
  margin-top: ${theme.spacing[32]};
  text-align: center;

  h3 {
    font-size: ${theme.fontSizes['3xl']};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing[16]};
  }

  p {
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.text};
    line-height: 1.6;
  }
`;

interface SlideProps {
  data: SlideData;
}

const Slide: React.FC<SlideProps> = ({ data }) => {
  const renderContent = () => {
    switch (data.type) {
      case 'title':
        return (
          <TitleSlideContent>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {data.title}
            </motion.h1>
            {data.subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {data.subtitle}
              </motion.h2>
            )}
            <motion.div
              className="title-meta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {data.content?.bulletPoints?.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
              {data.meta?.date && <p className="date">{data.meta.date}</p>}
            </motion.div>
          </TitleSlideContent>
        );

      case 'comparison':
        return (
          <ContentSlideWrapper>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {data.title}
            </motion.h1>
            {data.content?.table && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ComparisonTable>
                  <table>
                    <thead>
                      <tr>
                        {data.content.table.headers.map((header, index) => (
                          <th key={index}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.content.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td>{row.approach}</td>
                          {row.values.map((value, valueIndex) => (
                            <td key={valueIndex}>
                              {value.status ? (
                                <StatusBadge status={value.status}>
                                  {value.text}
                                </StatusBadge>
                              ) : (
                                value.text
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ComparisonTable>
              </motion.div>
            )}
          </ContentSlideWrapper>
        );

      case 'conclusion':
        return (
          <ContentSlideWrapper>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {data.title}
            </motion.h1>
            {data.content?.conclusion && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <BulletList className="large">
                    {data.content.conclusion.mainPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </BulletList>
                </motion.div>
                {data.content.conclusion.keyTakeaway && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <KeyTakeaway>
                      <h3>{data.content.conclusion.keyTakeaway.title}</h3>
                      <p>{data.content.conclusion.keyTakeaway.text}</p>
                    </KeyTakeaway>
                  </motion.div>
                )}
              </>
            )}
          </ContentSlideWrapper>
        );

      default: // 'content'
        return (
          <ContentSlideWrapper>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {data.title}
            </motion.h1>

            {data.description && (
              <motion.p
                className="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {data.description}
              </motion.p>
            )}

            {data.content?.bulletPoints && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <BulletList>
                  {data.content.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </BulletList>
              </motion.div>
            )}

            {data.content?.twoColumn && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TwoColumnLayout>
                  <div className="column">
                    <h3>{data.content.twoColumn.left.title}</h3>
                    <ul>
                      {data.content.twoColumn.left.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="column">
                    <h3>{data.content.twoColumn.right.title}</h3>
                    <ul>
                      {data.content.twoColumn.right.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    {data.content?.timeline && (
                      <Timeline>
                        {data.content.timeline.map((item, index) => (
                          <div key={index} className="timeline-item">
                            <span className="year">{item.year}</span>
                            <p>{item.description}</p>
                          </div>
                        ))}
                      </Timeline>
                    )}
                  </div>
                </TwoColumnLayout>
              </motion.div>
            )}

            {data.content?.challenges && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ChallengesGrid>
                  {data.content.challenges.map((challenge, index) => (
                    <div key={index} className="challenge-item">
                      <h3>{challenge.icon} {challenge.title}</h3>
                      <p>{challenge.description}</p>
                    </div>
                  ))}
                </ChallengesGrid>
              </motion.div>
            )}

            {data.content?.predictions && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <BulletList>
                    {data.content.predictions.mainPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </BulletList>
                </motion.div>
                {data.content.predictions.expertOpinions && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <ExpertOpinions>
                      <h3>Expert Opinion Distribution</h3>
                      {data.content.predictions.expertOpinions.map((opinion, index) => (
                        <div key={index} className="opinion-item">
                          <span>{opinion.label}</span>
                          <div className="bar">
                            <div
                              className="fill"
                              style={{ width: `${opinion.percentage}%` }}
                            >
                              {opinion.percentage}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </ExpertOpinions>
                  </motion.div>
                )}
              </>
            )}

            {data.content?.timeline && !data.content?.twoColumn && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Timeline>
                  {data.content.timeline.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <span className="year">{item.year}</span>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </Timeline>
              </motion.div>
            )}

            {data.content?.statusInfo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <StatusInfo>
                  <p><strong>Companies:</strong> {data.content.statusInfo.companies}</p>
                  <p><strong>Status:</strong> {data.content.statusInfo.status}</p>
                </StatusInfo>
              </motion.div>
            )}
          </ContentSlideWrapper>
        );
    }
  };

  return (
    <SlideWrapper>
      {renderContent()}
    </SlideWrapper>
  );
};

export default Slide;
