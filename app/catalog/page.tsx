import { CatalogWrapper } from '@/components';
import { carsData } from '../../constants/cars';
import styles from './page.module.scss';

const CatalogPage = () => {
  return (
    <div className={styles.catalog}>
      <CatalogWrapper carsData={carsData} />
    </div>
  );
};

export default CatalogPage;
