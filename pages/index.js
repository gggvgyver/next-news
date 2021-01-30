import Head from 'next/head'
import {Toolbar} from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>
    <Toolbar />
      <div className={styles.main}>
        <h1>Next.js 뉴스앱</h1>
        <h3>최신뉴스를 여기에서 한번에</h3>
      </div>
    </div>
  )
}
