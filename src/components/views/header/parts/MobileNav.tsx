import StaticLi from '~/components/views/header/parts/StaticLi';

function MobileNav() {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <button type="button" onClick={[setOpen, true]}>
        <i class="i-heroicons-bars-3 text-4xl">show nav</i>
      </button>
      <nav class={clsx('fixed top-0 right-0 p-8 bg-white transition-transform z-100 h-screen w-3/5 text-xl', !open() && 'translate-x-full')}>
        <div class="text-right">
          <button type="button" onClick={[setOpen, false]}>
            <i class="i-radix-icons-cross-1 text-4xl">show nav</i>
          </button>
        </div>
        <ul class="space-y-8">
          <StaticLi title="Features">
            <li><i class="i-icon-todo" /> <span>Todo List</span></li>
            <li><i class="i-icon-calendar" /> <span>Calendar</span></li>
            <li><i class="i-icon-reminders" /> <span>Reminders</span></li>
            <li><i class="i-icon-planning" /> <span>Planing</span></li>
          </StaticLi>
          <StaticLi title="Company">
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </StaticLi>
          <li class="hover:text-dark cursor-pointer">Careers</li>
          <li class="hover:text-dark cursor-pointer">About</li>
        </ul>
        <div class="pt-4 space-y-4">
          <button type="button" class="block w-full hover:text-dark">Login</button>
          <button type="button" class="block w-full border-(3 gray) p-(x4 y2) rounded-2xl hover:(text-dark border-dark)">Register</button>
        </div>
      </nav>
      <Show when={open()}>
        <div aria-hidden class="bg-black/50 fixed size-screen inset-0" />
      </Show>
    </>
  );
}

export default MobileNav;
