import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <div className="bg-darkBlue2 text-white relative z-10">
      <div className="container mx-auto px-5 pt-12 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-6">
              <img
                src="/images/icon-email.svg"
                alt=""
                className="scale-10"
              />
            </div>
            <div>algotrasoft@gmail.com</div>
          </div>

          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3 f-nav">
              <Link href="/#navbar">Home</Link>
              <Link href="/#about-us">About Us</Link>
              <Link href="/#work">How We Work</Link>
            </div>
            <div className="flex flex-col space-y-3 f-nav">
              <Link href="/events">Events</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="flex justify-center pb-10">
            <a
              href="https://tr.linkedin.com/company/algotrasoft"
              target="_blank" rel="noreferrer"
            >
              <img
                src="/images/linkedin.svg"
                alt=""
                className="ficon invert"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;