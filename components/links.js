import React from "react";
import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import login from '../pages/login'

export function Links() {


  return (
    <div className={styles.container}>
    <Head>
      <title>Postgres Sample Authy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="#">Postgresql App!</a>
      </h1>


      <div className={styles.grid}>
        <a href="/" className={styles.card}>
          <h3>Home &rarr;</h3>
        </a>
        < Link href="/login">
          <a className={styles.card}>
            <h3>Login &rarr;</h3>
          </a>
        </Link>

        <a
          href="/register"
          className={styles.card}
        >
          <h3>Register &rarr;</h3>
        </a>

        <a
          href="/dashboard"
          className={styles.card}
        >
          <h3>Dashboard &rarr;</h3>
        </a>
      </div>
    </main>
  </div>
  )
}