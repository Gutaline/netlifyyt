import Link from 'next/link';
import Image from 'next/image';
import { Social } from '@/components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import clsx from 'clsx';
import styles from './Footer.module.scss';
import { logoVertical } from '@/images';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div>
          <div className={styles.footerContent}>
            <div className={styles.footerContentItem}>
              <div className={styles.footerAddress}>
                <Link
                  href="https://yandex.ru/maps/213/moscow/house/varshavskoye_shosse_28zh/Z04YcAZnQEAOQFtvfXp5cHtmZg==/?indoorLevel=1&ll=37.617959%2C55.681753&z=17"
                  target="_blank"
                >
                  г. Москва,<br></br> Варшавское шоссе, 28ж
                </Link>
              </div>
              <div className={styles.footerAddress}>
                <Link
                  href="https://yandex.ru/maps/35/krasnodar/house/ulitsa_im_geroya_sarabeyeva_v_i_5k4/Z0AYdgRhT0QOQFpvfXx0cn1nZw==/?ll=39.031619%2C45.053143&z=17.45"
                  target="_blank"
                >
                  г. Краснодар,<br></br> ул. Сарабеева 5к4
                </Link>
              </div>
            </div>
            <div className={styles.footerContentItem}>
              <div className={styles.footerHours}>
                <div>Ежедневно</div>
                <div>10:00 - 22:00</div>
              </div>
              <Social cls="footerLinks" />
            </div>
            <div className={styles.footerContentItem}>
              <Image
                className={styles.footerLogo}
                src={logoVertical}
                alt="logo"
              />
            </div>
          </div>

          <div className={styles.footerCopyright}>
            © 2024 Autochina. Все права защищены.
          </div>
        </div>
      </div>
    </div>
  );
};
