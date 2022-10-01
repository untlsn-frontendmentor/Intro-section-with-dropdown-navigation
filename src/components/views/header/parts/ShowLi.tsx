interface ShowLiProps {
  title: string,
  children: any,
}

function ShowLi(props: ShowLiProps) {
  return (
    <li class="group relative">
      <p class="hover:text-dark cursor-pointer">
        <span>{props.title} </span>
        <i class="i-material-symbols-keyboard-arrow-down transition-transform group-hover:rotate-180">arrow</i>
      </p>
      <ul
        class="absolute shadow-xl rounded-lg min-w-full p-4 hidden group-hover:block hover:children:(text-dark cursor-pointer) children:whitespace-nowrap"
      >
        {props.children}
      </ul>
    </li>
  );
}

export default ShowLi;
