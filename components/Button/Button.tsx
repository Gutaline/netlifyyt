import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    children,
    ...otherProps
  } = props;
  return (
    <button
      className={clsx(styles.button, className, styles[theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
