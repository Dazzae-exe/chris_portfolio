function Footer() {
  return (
    <footer className="max-w-full max-h-fit">
      <div className="container mx-auto pt-16 w-full h-40 text-center flex justify-between items-center text-sm">
        <p>Christian Marín &copy; 2023</p>
        <ul className="flex gap-x-2">
          <li>
            <a href="https://twitter.com/dazz_dev" target="_blank" className="hover:text-[#00acee] transition-colors duration-150 ease-linear">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/christianmarindaza/"
              target="_blank"
              className="hover:text-[#0072b1] transition-colors duration-150 ease-linear"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Dazzae-exe" target="_blank" className="hover:text-[#171515] transition-colors duration-150 ease-linear">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
