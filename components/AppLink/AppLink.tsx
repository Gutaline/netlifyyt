import { FC } from 'react';
import Link, { LinkProps } from 'next/link';

// import {  LinkProps } from 'react-router-dom'
import clsx from 'clsx';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  DARK = 'dark',
  LIGHT = 'light',
}

interface IAppLinkProps extends LinkProps {
  href: string;
  text: string;
  theme?: AppLinkTheme;
  class?: string | undefined;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { href, text, theme = AppLinkTheme.DARK } = props;
  const to = `./catalog/${href.toLowerCase().trim().replace(/ /g, '')}`;
  return (
    <Link href={to} className={clsx(styles.appLink, styles[theme])}>
      {text}
    </Link>
  );
};
