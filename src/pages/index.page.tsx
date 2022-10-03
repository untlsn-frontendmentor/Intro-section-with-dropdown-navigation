import useMediaSelector from '~/hooks/useMediaSelector';
import heroMobile from '~/assets/images/image-hero-mobile.png';
import heroDesktop from '~/assets/images/image-hero-desktop.png';

import databiz from '~/assets/images/client-databiz.svg';
import audiophile from '~/assets/images/client-audiophile.svg';
import meet from '~/assets/images/client-meet.svg';
import maker from '~/assets/images/client-maker.svg';

const sponsors = {
  databiz, audiophile, meet, maker,
};

export function Page() {
  const isSmall = useMediaSelector('(max-width: 1023px)');

  return (
    <div class="h-screen overflow-hidden pt-26">
      <div class="flex-(~ col) items-center max-lg:text-center lg:(px-20 w-40vw items-start h-70vh)">
        <img src={isSmall() ? heroMobile : heroDesktop} alt="hero" class="lg:(absolute right-20 top-32 h-70vh)" />
        <h1 class="lg:text-7xl text-4xl font-bold mt-8 lg:mt-30">
          <span class="lg:block">Make </span>
          <span>remote work</span>
        </h1>
        <p class="text-gray my-4 lg:my-12">
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
        </p>
        <button
          type="button"
          class={clsx(
            'rounded-xl border-1 p-(x6 y3) font-bold mt-2 bg-dark text-white transition-colors',
            'hover:(bg-transparent text-dark border-dark)',
          )}
        >
          Learn more
        </button>
        <ul class="flex justify-between items-center m-(t12 x4) lg:mt-auto gap-6">
          <For each={Object.entries(sponsors)}>
            {([alt, src]) => (
              <li><img src={src} alt={alt} /></li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
}
