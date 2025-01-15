import styles from './index.module.css'

export default function ReactLearningPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return <div className={styles['root']}>
        {children}
    </div>

}