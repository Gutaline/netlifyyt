import dynamic from 'next/dynamic';
import Image from 'next/image';
import clsx from 'clsx';
import {
  logoLi,
  logoZeekr,
  logoXpeng,
  logoAvatr,
  logoVoyah,
  logoAito,
  logoGac,
  logoGeely,
} from '@/icons';
import { info1, info2, info3 } from '@/images';
import { FormCall } from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.video}>
          <video className={styles.videoSrc} autoPlay muted loop>
            <source src="/assets/images/home/hero.mp4" type="video/mp4" />
          </video>
          {/* <div className={styles.slogan}>
            Подбор, покупка и доставка автомобилей из Китая.
          </div> */}
        </div>

        <div className="container">
          <div className={styles.slogan2}>
            Подбор, покупка и доставка автомобилей из Китая
          </div>
          <FormCall />
        </div>
        <div className={clsx(styles.heroBrands)}>
          <div className="container fr fr-sb">
            {/* <Image src={logoXpeng} alt="logoCar" width={120} /> */}
            <Image src={logoZeekr} alt="logoCar" width={50} />
            <Image src={logoAvatr} alt="logoCar" width={40} />
            <Image src={logoVoyah} alt="logoCar" width={50} />
            <Image src={logoAito} alt="logoCar" width={30} />
            <Image src={logoGeely} alt="logoCar" width={80} />
            <Image src={logoLi} alt="logoCar" width={90} />
          </div>
        </div>
        <div className="container">
          <div className={clsx(styles.infoBlock)}>
            <Image src={info1} alt="logoCar" />
            <div>
              <div
                className={clsx(styles.infoBlockTitle, styles.infoBlockTitle1)}
              >
                Мы работаем быстро
              </div>
              <div className={clsx(styles.infoBlockTxt)}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos, inventore, officiis voluptas vero nesciunt eius
                exercitationem quia nemo accusamus vel maiores. Voluptatem,
                repellendus sint! Suscipit officia iusto omnis maxime? Maxime?
              </div>
            </div>
          </div>
          <div className={clsx(styles.infoBlock)}>
            <div>
              <div
                className={clsx(styles.infoBlockTitle, styles.infoBlockTitle2)}
              >
                Самые выгодные цены на рынке
              </div>
              <div className={clsx(styles.infoBlockTxt)}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos, inventore, officiis voluptas vero nesciunt eius
                exercitationem quia nemo accusamus vel maiores. Voluptatem,
                repellendus sint! Suscipit officia iusto omnis maxime? Maxime?
              </div>
            </div>

            <Image src={info3} alt="logoCar" />
          </div>
          <div className={clsx(styles.infoBlock)}>
            <Image src={info2} alt="logoCar" />
            <div>
              <div
                className={clsx(styles.infoBlockTitle, styles.infoBlockTitle3)}
              >
                Только проверенные автомобили
              </div>
              <div className={clsx(styles.infoBlockTxt)}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos, inventore, officiis voluptas vero nesciunt eius
                exercitationem quia nemo accusamus vel maiores. Voluptatem,
                repellendus sint! Suscipit officia iusto omnis maxime? Maxime?
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
