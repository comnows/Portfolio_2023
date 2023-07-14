import "boxicons";

const Contact = () => {
  return (
    <div id="contact" className="bg-midnight-purple rounded-60px h-full m-2">
      <div className="flex pt-6 pb-8 md:pt-11 md:pb-14 md:pl-16">
        <div className="flex flex-col w-full h-full">
          <h3 className=" text-pale-mauve font-semibold uppercase pl-12 md:pl-0">
            get in touch
          </h3>
          <div className="flex flex-col items-center justify-center text-lg font-semibold text-pale-mauve">
            <div className="flex flex-row items-center gap-2">
              <div className="flex">
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
              <div className="flex">
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
              <div className="flex">
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
              <div className="flex">
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
