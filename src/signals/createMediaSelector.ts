const constFalse = () => false;

const createMediaSelector = (query: string) => {
  if (import.meta.env.SSR) return constFalse;
  const mediaQuery = window.matchMedia(query);
  const [mediaSignal, setMediaSignal] = createSignal(mediaQuery.matches);

  mediaQuery.addEventListener('change', (ev) => {
    setMediaSignal(ev.matches);
  });

  return mediaSignal;
};

export default createMediaSelector;
