import Link from 'next/link';
import clsx from 'clsx';
import styles from './Social.module.scss';

export const Social = ({ cls = '' }: { cls: string }) => {
  return (
    <div className={clsx(styles.socialLinks, styles[cls])}>
      <Link href="https://t.me/autochina" target="_blank">
        <i className="fa-brands fa-telegram fa-2xl"></i>
      </Link>
      <Link
        href="https://wa.me/79775837977"
        className="footer__icons-social"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp fa-2xl"></i>
      </Link>
      <Link href="http://instagram.com/" target="_blank">
        <i className="fa-brands fa-instagram fa-2xl"></i>
      </Link>
      <Link href="tel:+70000000000" target="_blank">
        <i className="fa-solid fa-phone-volume fa-xl"></i>
      </Link>
    </div>
  );
};
