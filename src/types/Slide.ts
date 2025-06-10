export interface SlideData {
  id: number;
  title: string;
  type: 'title' | 'content' | 'comparison' | 'conclusion';
  subtitle?: string;
  description?: string;
  content?: {
    bulletPoints?: string[];
    twoColumn?: {
      left: {
        title: string;
        items: string[];
      };
      right: {
        title: string;
        items: string[];
      };
    };
    statusInfo?: {
      companies: string;
      status: string;
    };
    table?: {
      headers: string[];
      rows: Array<{
        approach: string;
        values: Array<{
          text: string;
          status?: 'high' | 'good' | 'moderate' | 'low' | 'very-low' | 'excellent' | 'unknown';
        }>;
      }>;
    };
    challenges?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    predictions?: {
      mainPoints: string[];
      expertOpinions?: Array<{
        label: string;
        percentage: number;
      }>;
    };
    timeline?: Array<{
      year: string;
      description: string;
    }>;
    conclusion?: {
      mainPoints: string[];
      keyTakeaway?: {
        title: string;
        text: string;
      };
    };
  };
  meta?: {
    date?: string;
    author?: string;
  };
}
