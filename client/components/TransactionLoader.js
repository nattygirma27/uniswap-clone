import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'
import React from 'React'
import Image from 'next/image'
import uniswapLogo from '../assets/E.png'

const style = {
  wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
  headerLogo: `m-1`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const TransactionLoader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={uniswapLogo} alt='uniswap' height={100} width={100} />
      </div>
      <div className={style.title}>Transaction in progress...</div>
      <MoonLoader color={'#fff'} loading={true} css={cssOverride} size={50} />
    </div>
  )
}

export default TransactionLoader
