import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'components/atoms/link/Link';

const SidebarSection = ({ className }: SidebarSectionProps) => {
  console.log('className ', className);

  return (
    <nav
      className={classNames(
        className,
        'bg-[#0c152e] text-white w-[300px] border-r'
      )}
    >
      <div className={'sticky top-0 pt-30 px-16'}>
        <Link href="/">
          <img
            src="https://lisk.com/themes/custom/lisk_theme/logo.svg"
            alt=""
            height={35}
            width={87}
          />
        </Link>
        <NavbarLinkListing
          className={'mt-64'}
          classNameLink="mt-8 hover:underline"
          classNameLinkActive={classNames('font-bold')}
        />
      </div>
    </nav>
  );
};

type SidebarSectionProps = {
  className?: string;
};

export default SidebarSection;

const navigation = [
  { name: 'Dashboard', href: '/lisk/dashboard' },
  { name: 'Wallet', href: '/lisk/wallet' },
  { name: 'Application', href: '/lisk/application' },
];

function NavbarLinkListing({
  className,
  classNameLink,
  classNameLinkActive,
  links = navigation,
  onClickLink,
}: any) {
  const router = useRouter();
  const { asPath } = router;

  return (
    <ul className={className}>
      {links.map((item: any) => (
        <li key={item.name}>
          <Link
            className={classNames(
              'flex',
              classNameLink,
              asPath === item.href && classNameLinkActive
            )}
            href={item.href}
            onClick={onClickLink}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
