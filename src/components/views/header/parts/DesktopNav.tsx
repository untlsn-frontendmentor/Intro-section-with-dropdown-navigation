import ShowLi from '~/components/views/header/parts/ShowLi';

function DesktopNav() {
  return (
    <nav class="flex items-center justify-between flex-1 text-gray text-lg font-semibold">
      <ul class="flex items-center gap-8">
        <ShowLi title="Features">
          <li><i class="i-icon-todo" /> <span>Todo List</span></li>
          <li><i class="i-icon-calendar" /> <span>Calendar</span></li>
          <li><i class="i-icon-reminders" /> <span>Reminders</span></li>
          <li><i class="i-icon-planning" /> <span>Planing</span></li>
        </ShowLi>
        <ShowLi title="Company">
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ShowLi>
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
