import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'
import TransactionLoader from '../components/TransactionLoader'
const style = {
  wrapper: `h-fit  w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}
