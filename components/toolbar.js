import {useRouter} from 'next/router'
import styles from '../styles/Toolbar.module.css'

export const Toolbar = () => {
    const router = useRouter()

    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>홈</div>
            <div onClick={() => router.push('/feed/1')}>뉴스</div>
            <div onClick={() => router.push('/eom')}>이달의 사원</div>
            <div onClick={() => window.location.href = 'http://34.82.77.200/'}>구글서버</div>
        </div>
    )
}