"use client";

import { FC, useState, useEffect } from "react";

import styles from "./Test.module.scss";
interface ITest {
  seoData: [
    {
      id: number;
      name: string;
    }
  ];
}

// Если не пробрассывать данные, которые мы получили в about, то если отключишь js, у тебя поисковикам будет отдаваться пустая страница (Попробуй запустить и посмотреть),
// Потому установи дефолтным знаечение в useState сеодату и попробуй еще раз отключить js и ты увидишь, что роботу отдаются нужные данные

export const Test: FC<ITest> = ({ seoData }) => {
  const [data, setData] = useState(seoData);

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  if (!data.length) return <div>Загрузка....</div>;

  return (
    <div>
      {data &&
        data.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
};
