const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue-charcoal p-6">
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-lg text-center justify-center lg:flex lg:flex-grow font-semibold lg:gap-6">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white"
          >
            Profile
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white"
          >
            Works
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white"
          >
            Certificates
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
