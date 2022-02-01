import styles from '../../styles/components/general/HoveringCard.module.css';


export default function HoveringCard({children, className}) {

  return (
    <div className={`${styles.hoveringCard} ${className}`}>
      {children}
    </div>
  )
}