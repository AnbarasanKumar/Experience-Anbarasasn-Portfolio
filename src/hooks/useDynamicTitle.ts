 import { useEffect, useRef } from 'react';

const suggestionTitles = [
  '`Anbarasan Kumar | Full Stack Engineer',
  'Java Developer | Spring Boot Developer',
  'React & Frontend Developer',
  'Building Scalable Systems',
  'Open to Opportunities!',
  'Anbarasan Kumar | Portfolio',
];

const CYCLE_INTERVAL = 3000; // 3 seconds per title
const AWAY_TITLE = 'Come back! | Anbarasan Kumar';
const DEFAULT_TITLE = 'Anbarasan Kumar | Full Stack Engineer';

/**
 * useDynamicTitle
 * Cycles through `suggestionTitles` in the browser tab.
 * When the user switches away from the tab, shows AWAY_TITLE.
 * When they return, resumes cycling from where it left off.
 */
export function useDynamicTitle() {
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycling = () => {
    if (intervalRef.current) return; // already running
    intervalRef.current = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % suggestionTitles.length;
      document.title = suggestionTitles[indexRef.current];
    }, CYCLE_INTERVAL);
  };

  const stopCycling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Set initial title
    document.title = DEFAULT_TITLE;

    // Start cycling
    startCycling();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopCycling();
        document.title = AWAY_TITLE;
      } else {
        document.title = suggestionTitles[indexRef.current];
        startCycling();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopCycling();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.title = DEFAULT_TITLE;
    };
  }, []);
}
