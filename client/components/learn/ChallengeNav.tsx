import styles from "../../styles/components/learn/challengeNav.module.css";


const ChallengeNav = () => {
    return (
        <>
            <ul className={styles.challengeNav}>
                <li className={styles.algorithmTitle}>신고 결과 받기</li>
                <div className={styles.settingNav}>
                    <div className={styles.toggleBtn}>
                        <label className={styles.btnDark}>
                            <input type={"radio"} className={styles.btnGroupToggle}/>
                            dark
                        </label>
                        <label className={styles.btnDark}>
                            <input type={"radio"} className={styles.btnGroupToggle}/>
                            light
                        </label>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default ChallengeNav