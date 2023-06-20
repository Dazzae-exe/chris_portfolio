function Footer() {
  return (
    <footer className="w-full h-fit">
      <div className="container mx-auto p-4 w-full h-fit gap-y-4 text-center flex flex-col justify-center items-start text-sm bg-dark-schema/5 dark:bg-light-schema/5 backdrop-blur-md rounded-xl">
        <p>Christian Marín &copy; 2023</p>
        <ul className="flex gap-x-2">
          <li>
            <a href="https://twitter.com/dazz_dev" target="_blank" className="hover:text-[#00acee] transition-colors duration-150 ease-linear">
            <img width={24} height={24} src="https://img.icons8.com/ios/24/twitter--v1.png" alt="twitter--v1"/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/christianmarindaza/"
              target="_blank"
              className="hover:text-[#0072b1] transition-colors duration-150 ease-linear"
            >
              <img width={24} height={24} src="https://img.icons8.com/ios/24/linkedin.png" alt="linkedin"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/Dazzae-exe" target="_blank" className="hover:text-[#171515] dark:hover:text-[#fff] transition-colors duration-150 ease-linear">
            <img width={24} height={24} src="https://img.icons8.com/ios/24/github--v1.png" alt="github--v1"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
