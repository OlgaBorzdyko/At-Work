import styles from './topbar.module.scss'
const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <a className={styles.logo} href="/">
          <img alt="At-work logo" src="/logo-sign.png" />
          <span>at-work</span>
        </a>
      </div>
      <div className={styles.right}>
        <div className={styles.notification}>
          <button>
            <img alt="likes" src="/like.png" />
          </button>
          <button>
            <img alt="notifications" src="/bell.png" />
          </button>
        </div>

        <div className={styles.profile}>
          <img alt="avatar" src="/photo-example.png" />
          <span className={styles.userName}>Ivan1234</span>
        </div>
      </div>
    </header>
  )
}
export default TopBar
