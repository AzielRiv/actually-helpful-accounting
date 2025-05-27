export var dDContent:dData[]= [
  { title: 'Question 1', subtitle: 'Answer 1', body: 'February 14, 2025 00:00:00', code: 'Q1', active: false},
  { title: 'Question 2', subtitle: 'Answer 2', body: 'February 14, 2025 00:00:00', code: 'Q2', active: false},
  { title: 'Question 3', subtitle: 'Answer 3', body: 'February 14, 2025 00:00:00', code: 'Q3', active: false},
];

export interface dData {
  title: string;
  subtitle: string;
  body: string;
  code: string;
  active: boolean;
}
