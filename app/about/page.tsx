import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './About.module.scss';
const About = async () => {
  return (
    <div className={styles.about}>
      <div className={clsx('container', styles.aboutWrapper)}>
        <div className={styles.aboutIntro}>
          Мы блалала вступительный текст, мб сколько лет на рынке и все такое
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit
          praesentium voluptate laboriosam aspernatur minima nobis
          necessitatibus dolores obcaecati quod, mollitia molestiae quam ipsum
          dolorum vero sapiente placeat odio dolore!
        </div>
        <div className={styles.aboutBlock}>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutHeading}>Офис Москва</div>
            <div className={styles.aboutAddress}>
              адрес: Варшавское шоссе, 28ж <br></br>(м. Нагатинская)
            </div>
            <ul className={styles.aboutContacts}>
              <p className={styles.aboutContactsTxt}>Контакты для связи:</p>
              <li className={styles.aboutContactsItem}>
                <p>Кудинов Алексей</p>
                <Link href="tel:+79775837977" target="_blank">
                  <i className="fa-solid fa-phone-volume fa-xl"></i>
                </Link>
                <Link href="https://t.me/Kudinov21" target="_blank">
                  <i className="fa-brands fa-telegram fa-2xl"></i>
                </Link>
              </li>
              <li className={styles.aboutContactsItem}>
                <p>Пряхин Никита</p>
                <Link
                  className={styles.aboutContactsPhone}
                  href="tel:+79269548717"
                  target="_blank"
                >
                  <i className="fa-solid fa-phone-volume fa-xl"></i>
                </Link>
                <Link href="https://t.me/NOPryakhin" target="_blank">
                  <i className="fa-brands fa-telegram fa-2xl"></i>
                </Link>
              </li>
              <li className={styles.aboutContactsItem}>
                <p>Французов Евгений</p>
                <Link
                  className={styles.aboutContactsPhone}
                  href="tel:+79262105651"
                  target="_blank"
                >
                  <i className="fa-solid fa-phone-volume fa-xl"></i>
                </Link>
                <Link href="https://t.me/Frantsuzov_e" target="_blank">
                  <i className="fa-brands fa-telegram fa-2xl"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.aboutMap}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cb7bd8ddb60ee2ecee7c0ae92e58b34ec29aee00604525fcf073194a06995ee&amp;source=constructor"
              width="600"
              height="300"
            ></iframe>
          </div>
        </div>
        <div className={styles.aboutBlock}>
          <div className={styles.aboutInfo}>
            <div className={styles.aboutHeading}>Офис Краснодар</div>
            <div className={styles.aboutAddress}>
              адрес: ул. Сарабеева 5 к4 <br></br>(район Панорама, рядом стадион
              Краснодар )
            </div>
            <ul className={styles.aboutContacts}>
              <p className={styles.aboutContactsTxt}>Контакты для связи:</p>
              <li className={styles.aboutContactsItem}>
                <p>Шипов Сергей</p>
                <Link
                  className={styles.aboutContactsPhone}
                  href="tel:+79775837977"
                  target="_blank"
                >
                  <i className="fa-solid fa-phone-volume fa-xl"></i>
                </Link>
                <Link href="https://t.me/shipsergio" target="_blank">
                  <i className="fa-brands fa-telegram fa-2xl"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.aboutMap}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A5bb1ea098a39a79f7a3ac107737716a1f27e4a49914aec1841592df09198638a&amp;source=constructor"
              width="600"
              height="323"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
