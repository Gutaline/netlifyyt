'use client';
import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import clsx from 'clsx';
import styles from './Filter.module.scss';

type FilterProps = {
  carBrands: string[];
  carTypes: string[];
  filterState: {
    brandToFilter: string;
    typeToFilter: string;
    isInStock: boolean;
  };
  onApplyFilter: (filterPropName: string, filterProp: string | boolean) => void;
};
export const Filter: React.FC<FilterProps> = ({
  carBrands,
  carTypes,
  filterState,
  onApplyFilter,
}) => {
  const { brandToFilter, typeToFilter, isInStock } = filterState;

  const [isActiveBrands, setIsActiveBrands] = useState(false);
  const [isActiveTypes, setIsActiveTypes] = useState(false);

  const handleDropdownClickBrands = () => {
    setIsActiveBrands(!isActiveBrands);
  };
  const handleDropdownClickTypes = () => {
    setIsActiveTypes(!isActiveTypes);
  };

  const handleSelectBrand = (selectedBrand: string) => {
    setIsActiveBrands(false);
    onApplyFilter('brandToFilter', selectedBrand);
  };

  const handleSelectType = (selectedType: string) => {
    setIsActiveTypes(false);
    onApplyFilter('typeToFilter', selectedType);
  };

  const handleCheckbox = () => {
    onApplyFilter('isInStock', !isInStock);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterSelect}>
        {' '}
        <div className={styles.selectBrand}>
          <div
            className={`${styles.dropdown} ${
              isActiveBrands ? styles.active : ''
            }`}
            onClick={handleDropdownClickBrands}
            tabIndex={1}
          >
            <div className={styles.select}>
              {brandToFilter ? (
                <span>{brandToFilter}</span>
              ) : (
                <span>Выбрать марку</span>
              )}
              <i className={`fa fa-chevron-left ${styles.arrow}`}></i>
            </div>
            <input type="hidden" name="brand" value={brandToFilter} />
            <ul className={styles.dropdownMenu}>
              {carBrands.map((brand, idx) => (
                <li
                  key={idx}
                  value={brand}
                  onClick={() => handleSelectBrand(brand)}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.selectType}>
          <div
            className={`${styles.dropdown} ${
              isActiveTypes ? styles.active : ''
            }`}
            onClick={handleDropdownClickTypes}
            tabIndex={1}
          >
            <div className={styles.select}>
              {typeToFilter ? (
                <span>{typeToFilter}</span>
              ) : (
                <span>Выбрать тип</span>
              )}
              <i className={`fa fa-chevron-left ${styles.arrow}`}></i>
            </div>
            <input type="hidden" name="type" value={typeToFilter} />
            <ul className={styles.dropdownMenu}>
              {carTypes.map((type, idx) => (
                <li
                  key={idx}
                  value={type}
                  onClick={() => handleSelectType(type)}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.checkStock}>
        <label htmlFor="inStock">в наличии</label>
        <input
          type="checkbox"
          checked={isInStock}
          onChange={handleCheckbox}
          id="inStock"
        />
      </div>
    </div>
  );
};
