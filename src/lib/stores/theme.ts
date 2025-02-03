import { writable } from 'svelte/store';

export const theme = writable(getInitialTheme());

function getInitialTheme() {
  if (typeof localStorage !== 'undefined' && localStorage.theme) {
    return localStorage.theme;
  }
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

theme.subscribe((value) => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;

    if (value === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', value);
    console.log('theme', value);
  }
});
