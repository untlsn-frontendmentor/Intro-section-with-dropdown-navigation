import useMediaSelector from '~/hooks/useMediaSelector';
import logo from '~/assets/images/logo.svg';
import DesktopNav from '~/components/views/header/parts/DesktopNav';
import MobileNav from '~/components/views/header/parts/MobileNav';

function Header() {
  const isSmall = useMediaSelector('(max-width: 1023px)');

  return (
    <header class="flex items-center max-lg:justify-between p-8 lg:px-16 gap-20 fixed w-full top-0 left-0">
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

export default Header;
