import { describe, expect, it } from 'vitest';
import { createLessonPlanFromVocabulary } from '../services/learningService';
import { formatDuration, formatPercent, formatRelativeDate } from './formatters';

const isoDaysAgo = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

describe('formatters', () => {
  it('formats duration in minutes and hours', () => {
    expect(formatDuration(25)).toBe('25 min');
    expect(formatDuration(120)).toBe('2h');
    expect(formatDuration(135)).toBe('2h 15m');
  });

  it('formats percentages', () => {
    expect(formatPercent(0.82)).toBe('82%');
    expect(formatPercent(0)).toBe('0%');
  });

  it('formats relative dates', () => {
    expect(formatRelativeDate(isoDaysAgo(0))).toBe('Today');
    expect(formatRelativeDate(isoDaysAgo(1))).toBe('Yesterday');
    expect(formatRelativeDate(isoDaysAgo(3))).toBe('3 days ago');
  });
});

describe('createLessonPlanFromVocabulary', () => {
  it('creates a lesson plan using provided vocabulary', () => {
    const vocabulary = [
      {
        id: 'test-1',
        term: 'mutuo',
        translation: 'mutual',
        context: 'Discussing community support',
        createdAt: isoDaysAgo(1),
        proficiency: 'new'
      },
      {
        id: 'test-2',
        term: 'solidaridad',
        translation: 'solidarity',
        context: 'Conversation about local events',
        createdAt: isoDaysAgo(2),
        proficiency: 'learning'
      }
    ];

    const plan = createLessonPlanFromVocabulary(vocabulary);
    expect(plan.vocabularyIds).toHaveLength(2);
    expect(plan.objectives[0]).toContain('mutuo');
    expect(plan.estimatedMinutes).toBeGreaterThanOrEqual(10);
  });
});
