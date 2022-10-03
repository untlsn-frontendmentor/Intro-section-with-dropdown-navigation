interface StaticLiProps {
  title: string,
  children: any
}

function StaticLi(props: StaticLiProps) {
  const [open, setOpen] = createSignal(false);

  return (
    <li class="group relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        class={clsx('hover:text-dark cursor-pointer', open() && 'mb-4')}
      >
        <span>{props.title} </span>
        <i class={clsx('i-material-symbols-keyboard-arrow-down transition-transform', open() && 'rotate-180')}>arrow</i>
      </button>
      <Show when={open()}>
        <ul
          class="pl-4 hover:children:(text-dark cursor-pointer) children:whitespace-nowrap space-y-4"
        >
          {props.children}
        </ul>
      </Show>
    </li>
  );
}

export default StaticLi;
