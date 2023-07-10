const Contact = () => {
  return (
    <div className="bg-midnight-purple rounded-60px h-full m-2">
      <div className="flex pt-11 pb-14 pl-16">
        <div className="flex flex-col w-full h-full">
          <div className=" text-pale-mauve text-xl font-semibold uppercase">
            get in touch
          </div>
          <div className="flex flex-col items-center justify-center text-lg font-semibold text-pale-mauve">
            <div className="flex flex-row items-center gap-2">
              <div>
                <box-icon name="envelope" color="#fcd6ff" size="sm"></box-icon>
              </div>
              <span>
                <a
                  href="mailto:watthanandh.l@gmail.com"
                  className="hover:underline hover:text-white"
                >
                  watthanandh.l@gmail.com
                </a>
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div>
                <box-icon
                  name="facebook-circle"
                  type="logo"
                  color="#fcd6ff"
                ></box-icon>
              </div>
              <span>
                <a
                  href="https://www.facebook.com/profile.php?id=100001958262370"
                  target="_blank"
                  className="hover:underline hover:text-white"
                >
                  Facebook
                </a>
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div>
                <box-icon name="github" type="logo" color="#fcd6ff"></box-icon>
              </div>
              <span>
                <a
                  href="https://github.com/comnows"
                  target="_blank"
                  className="hover:underline hover:text-white"
                >
                  Github
                </a>
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div>
                <box-icon name="phone" color="#fcd6ff"></box-icon>
              </div>
              <span>081-964-2050</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
