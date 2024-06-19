import styles from './page.module.scss';

export default function Page({ params }: { params: { id: string } }) {
  console.log('+++++++params', params);
  return (
    <div className={styles.carPage}>
      <div className="container">
        <div className={styles.carPageWrapper}>
          <h1>здесь будет инфа про {params.id}</h1>
        </div>
      </div>
    </div>
  );
}
