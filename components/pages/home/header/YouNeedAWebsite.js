import styles from '../../../../styles/components/pages/home/YouNeedAWebsite.module.css';

export default function YouNeedAWebsite() {
  return (
    <div className={styles.container}>
      <div className={styles.you}>
        Du
      </div>
      <div className={styles.need}>
        brauchst
      </div>
      <div className={styles.a}>
        eine
      </div>
      <div className={styles.website}>
        Website
      </div>
      <div className={styles.exchanger}>
        <div className={styles.qM + ' ' + styles.mark}>
          ?
          <div className={styles.eM + ' ' + styles.mark}>
            !
          </div>
        </div>
      </div>
    </div>
  )
}