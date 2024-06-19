'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { logoVeer } from '@/images';

import styles from './Nav.module.scss';
import { Social } from '@/components';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={clsx('container', 'fr fr-sb')}>
        <div className={clsx('navLeft', 'fr fr-center')}>
          <Link className={clsx(styles.navLink, styles.navLogo)} href="/">
            <Image src={logoVeer} alt="logo" />
          </Link>
          <Link
            href="/catalog"
            className={clsx(styles.navLink, {
              [styles.active]: pathname === '/catalog',
            })}
          >
            каталог
          </Link>
          <Link
            href="/about"
            className={clsx(styles.navLink, {
              [styles.active]: pathname === '/about',
            })}
          >
            о нас
          </Link>
        </div>
        <div className={clsx('navRight', 'fr fr-sb')}>
          <Social cls="navLinks" />
          <div>
            <a
              href="tel:+70000000000"
              className={clsx(styles.navLink, styles.navPhone)}
            >
              +7 (000) 000-00-00
            </a>
            <span className={clsx(styles.navText)}>
              Ежедневно с 10:00 до 22:00
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
