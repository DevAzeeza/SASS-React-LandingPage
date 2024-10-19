import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll className="base-bold text-p4 uppercase">{title}</LinkScroll>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
        <div className="w-full border-2 border-amber-400">
          <nav>
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title="features" />
                <div className="dot" />
                <NavLink title="pricing" />
              </li>

              <li className="nav-logo">
                <LinkScroll>
                  <img
                    src="../../public/images/xora.svg"
                    width={160}
                    height={55}
                    alt="logo"
                  />
                </LinkScroll>
              </li>
              <li className="nav-li">
                <NavLink title="faq" />
                <div className="dot" />
                <NavLink title="download" />
                <div />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
//one header will be reused for mobile and desktop devices -hence using max-lg devices media queries
//  {/* <NavLink /> */} npm package allows to quickly scroll to different elements on the screen
