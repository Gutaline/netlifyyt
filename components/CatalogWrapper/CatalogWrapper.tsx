'use client';
import { useEffect, useState } from 'react';
import { Card, Filter, FormOrder } from '@/components';
import { ICarData } from '../../constants/cars';
import styles from './CatalogWrapper.module.scss';
import clsx from 'clsx';

export const CatalogWrapper = ({ carsData }: { carsData: ICarData[] }) => {
  const [filterState, setFilterState] = useState({
    brandToFilter: '',
    typeToFilter: '',
    isInStock: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carBrand, setCarBrand] = useState('');

  const handleApplyFilter = (
    filterPropName: string,
    filterProp: string | boolean
  ) => {
    setFilterState((prevState) => ({
      ...prevState,
      [filterPropName]: filterProp,
    }));
  };

  const handleModal = (isOpen: boolean, carBrand?: string) => {
    if (carBrand) setCarBrand(carBrand);
    setIsModalOpen(isOpen);
  };

  const carBrands: string[] = Array.from(
    new Set(carsData.map((car) => car.brandName))
  );
  const carTypes: string[] = Array.from(
    new Set(carsData.map((car) => car.type))
  );

  const filterCarsData = (data: ICarData[]) => {
    return data.filter((car) => {
      const brandMatches = filterState.brandToFilter
        ? car.brandName === filterState.brandToFilter
        : true;
      const typeMatches = filterState.typeToFilter
        ? car.type === filterState.typeToFilter
        : true;
      const stockMatches = filterState.isInStock
        ? car.inStock === filterState.isInStock
        : true;
      return brandMatches && typeMatches && stockMatches;
    });
  };

  let filteredCarsData = filterCarsData(carsData);

  useEffect(() => {
    filteredCarsData = filterCarsData(carsData);
  }, [filterState]);

  return (
    <div className={styles.catalog}>
      <div className="container">
        <Filter
          carBrands={carBrands}
          carTypes={carTypes}
          filterState={filterState}
          onApplyFilter={handleApplyFilter}
        />
        <div className={clsx(styles.carsWrapper, 'fr fr-sb')}>
          {filteredCarsData.length > 0 ? (
            filteredCarsData.map((carData, idx) => {
              return (
                <Card
                  key={idx}
                  id={carData.model}
                  carData={carData}
                  handleModal={handleModal}
                />
              );
            })
          ) : (
            <div className={styles.notInStock}>Нет в наличии</div>
          )}
        </div>
        {isModalOpen && (
          <div className={styles.modal}>
            <div
              className={styles.modalOverlay}
              onClick={(e) => handleModal(false)}
            ></div>
            <FormOrder carBrand={carBrand} />
          </div>
        )}
      </div>
    </div>
  );
};
