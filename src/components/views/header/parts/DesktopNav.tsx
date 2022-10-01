function DesktopNav() {
  return (
    <nav class="flex items-center justify-between flex-1 text-gray text-lg font-semibold">
      <ul class="flex items-center gap-8">
        <li class="hover:text-dark cursor-pointer">Features</li>
        <li class="hover:text-dark cursor-pointer">Company</li>
        <li class="hover:text-dark cursor-pointer">Careers</li>
        <li class="hover:text-dark cursor-pointer">About</li>
      </ul>
      <div class="flex items-center gap-12">
        <button type="button" class="hover:text-dark">Login</button>
        <button type="button" class="border-(3 gray) p-(x4 y2) rounded-2xl hover:(text-dark border-dark)">Register</button>
      </div>
    </nav>
  );
}

export default DesktopNav;
