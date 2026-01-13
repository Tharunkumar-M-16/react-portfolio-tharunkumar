function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Tharun Kumar. Built with React.
      </p>

      <div>
        <a
          href="https://github.com/Tharunkumar-M-16"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://www.linkedin.com/in/tharun-kumar-194a36326/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
