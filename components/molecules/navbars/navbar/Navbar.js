import { Component } from 'react';
import { throttle } from 'throttle-debounce';
import classNames from 'classnames';
import { withRouter } from 'next/router';
import PlayIcon from 'shared/icons/ic-social-youtube.svg';
import IconMenuBurger from 'shared/icons/ic-menu-burger.svg';
import IconCross from 'shared/icons/ic-cross.svg';
import Link from 'components/atoms/link/Link';
import NavbarLinkListing from 'components/molecules/navbars/navbarLinkListing/NavbarLinkListing';

const primaryButton =
  'inline-flex items-center justify-center text-gray-400 p-2 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
    };

    this.scrollListener = throttle(200, this.handleScroll);
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  isNavbarWhite = () => {
    const { router } = this.props;

    const whiteNavbarRoutes = ['/articles', '/contact', '/outdoorkids'];

    const isWhiteNavbarRoute = whiteNavbarRoutes.some(
      (routePath) => router?.asPath === routePath
    );
    return isWhiteNavbarRoute || this.state.hasScrolled;
  };

  getNavbarClasses = (isNavbarWhite) => {
    return classNames({
      ['bg-riverBed text-white']: !isNavbarWhite,
      ['bg-white text-black']: isNavbarWhite,
    });
  };

  handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    const navigationHeight = 50;

    if (pageYOffset > navigationHeight && !this.state.hasScrolled) {
      this.setState({
        hasScrolled: true,
      });
    } else if (pageYOffset < navigationHeight && this.state.hasScrolled) {
      this.setState({
        hasScrolled: false,
      });
    }
  };

  render() {
    const isNavbarWhite = this.isNavbarWhite();

    return (
      <header
        className={`flex items-center h-64 fixed left-0 right-0 top-0 z-50 ${this.getNavbarClasses(
          isNavbarWhite
        )}`}
      >
        <TopNavbar isNavbarWhite={isNavbarWhite} />
      </header>
    );
  }
}

export default withRouter(Navbar);

function TopNavbar({ links, isNavbarWhite }) {
  return (
    <nav className="container flex justify-between w-full">
      <LogoImageLink isBlack={isNavbarWhite} />
      <NavbarLinkListing
        className={classNames(
          'hidden md:flex items-center ml-10 space-x-32',
          isNavbarWhite ? 'text-scorpion' : 'text-abbey'
        )}
        classNameLink="text-16 hover:underline"
        classNameLinkActive={classNames(
          isNavbarWhite ? 'text-black' : 'text-white'
        )}
      />
      <OpenCloseMenuButtons className={'md:hidden'} isBlack={isNavbarWhite} />
    </nav>
  );
}

function OpenCloseMenuButtons({ className, isBlack }) {
  const isOpen = false;

  return isOpen ? (
    <button
      className={`${primaryButton} ${className}`}
      onClick={() => console.log('close')}
    >
      <IconCross className="h-24 w-24" />
    </button>
  ) : (
    <button
      className={`${primaryButton} ${className}`}
      onClick={() => console.log('open')}
    >
      <IconMenuBurger
        className="h-24 w-24"
        stroke={isBlack ? 'black' : 'white'}
      />
    </button>
  );
}

function LogoImageLink({ isBlack }) {
  return (
    <Link href="/" passHref>
      <PlayIcon fill={isBlack ? 'black' : 'white'} />
    </Link>
  );
}
