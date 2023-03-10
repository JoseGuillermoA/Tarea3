import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nuestro Filosofía</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.tittle}>
            Nuestra Folosofía
          </h1>
          <div className={styles.image}>
            <Image
              src="/imagen1.png"
              alt="Vercel Logo"
              width={640.84}
              height={501}
              priority
            />
          </div>

          <div className={styles.list}>
            <ul>
              <li>Alto sentido de prioridad y responsabilidad ante las necesidades de nuestros clientes.</li>
              <li>Trabajo en equipo, es prioritario en el desarrollo de nuestro trabajo.</li>
              <li>Buscamos distinguirnos por el desarrollo de sistemas con interface gráfica visualmente amigable para el usuario final, así como componentes minimalistas.</li>
              <li>Relaciones a largo plazo con nuestros clientes.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
