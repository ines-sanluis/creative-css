import styles from './counters.module.css'

function MyButton() {
  return (
    <div className={styles.markdownWrapper}>
      <button className={styles.button}>
        CSS Transition
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
