import styles from '../../styles/components/general/ActionButton.module.css';

export default function ActionButton(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.secondary ? 'var(--secondary-action)' : 'var(--action)',
        ...props.style
      }}
      className={`${styles.container} ${props.className}`}
    >
      {props.children}
    </button>
  )
}