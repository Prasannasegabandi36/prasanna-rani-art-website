export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}
