import createMediaSelector from '~/signals/createMediaSelector';
import logo from '~/assets/images/logo.svg';
import DesktopNav from '~/components/views/header/parts/DesktopNav';
import MobileNav from '~/components/views/header/parts/MobileNav';

function Index() {
  const isSmall = createMediaSelector('(max-width: 1023px)');

  return (
    <header class="flex p-(y8 x-16) gap-20 fixed w-full top-0 left-0 items-center">
      <img src={logo} alt="logo" class="h-8" />
      <Show
        when={isSmall()}
        fallback={<DesktopNav />}
      >
        <MobileNav />
      </Show>
    </header>
  );
}

export default Index;
