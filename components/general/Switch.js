import styles from '../../styles/components/general/Switch.module.css';

export default function Switch({value, setValue}) {
  return (
    <button className={`${styles.container} ${value ? styles.active : ''}`} onClick={() => setValue(!value)}>
      <div className={`${styles.thumb} ${value ? styles.activeThumb : ''}`}/>
    </button>
  )
}