export interface MetricItem {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: number; // percentage
  trendLabel?: string;
  insight?: string;
}

export interface StrategyItem {
  id: number;
  title: string;
  subTitle: string;
  personaAnalysis: string;
  dataEvidence: string;
  item: string;
  spec: string;
  contentGuide: string;
}

export enum TabView {
  FANDOM = 'FANDOM',
  CONTENT = 'CONTENT'
}