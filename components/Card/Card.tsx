'use client';
import Image from 'next/image';
import { AppLink, AppLinkTheme, Button } from '@/components';
import { carColor, carEngine, carPrivod, carSpeed } from '@/icons';
import clsx from 'clsx';
import styles from './Card.module.scss';
import { ICarData } from 'constants/cars';

export const Card = ({
  carData,
  id,
  handleModal,
}: {
  carData: ICarData;
  id: string;
  handleModal: (isOpen: boolean, carBrand: string) => void;
}) => {
  const {
    icon,
    model,
    type,
    year,
    price,
    speed,
    privod,
    engine,
    color,
    image,
  } = carData;

  const isLiCar = icon.src.includes('li');
  const isAvatrCar = icon.src.includes('avatr');
  const isAitoCar = icon.src.includes('aito');
  const isGeelyCar = icon.src.includes('geely');
  const isGacCar = icon.src.includes('gac');

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.brand}>
          <Image
            src={icon}
            alt={`${model} icon`}
            className={clsx(styles.brandIcon, {
              [styles.brandIconLi]: isLiCar,
              [styles.brandIconAvatr]: isAvatrCar,
              [styles.brandIconAito]: isAitoCar,
              [styles.brandIconGeely]: isGeelyCar,
              [styles.brandIconGac]: isGacCar,
            })}
          />
          <div className={styles.brandDetails}>
            <h2 className={styles.model}>{model}</h2>
            <p className={styles.type}>{type}</p>
          </div>
        </div>
        <div className={styles.year}>{year}</div>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.details}>
          <div className={styles.price}>
            <span>от </span>
            <p>{price} р.</p>
          </div>
          <div className={styles.speed}>
            <Image
              src={carSpeed}
              alt={`${carSpeed} icon`}
              className={styles.detailsIcon}
            />
            <p>
              разгон до 100 км/ч <br></br>
              {speed}
            </p>
          </div>
          <div className={styles.privod}>
            <Image
              src={carPrivod}
              alt={`${carPrivod} icon`}
              className={styles.detailsIcon}
            />
            <p>{privod}</p>
          </div>
          <div className={styles.engine}>
            <Image
              src={carEngine}
              alt={`${carEngine} icon`}
              className={styles.detailsIcon}
            />
            <p className={styles.engine}>{engine}</p>
          </div>
          <div className={styles.colors}>
            <Image
              src={carColor}
              alt={`${model} icon`}
              className={styles.detailsIcon}
            />
            <ul className={styles.colors}>
              {color.map((c: string, index: number) => (
                <li key={index} className={styles.color}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.carImage}>
          <Image src={image} alt={`${model} img`} />
        </div>
      </div>
      <div className={styles.cardBtns}>
        <AppLink
          href={id}
          text="подробнее"
          theme={AppLinkTheme.LIGHT}
          class="catalogLink"
        />
        <Button onClick={() => handleModal(true, model)}>заказать</Button>
      </div>
    </div>
  );
};
