import React, { Fragment } from 'react'
import Head from 'next/head'
import {Button} from 'antd'

export default function Home() {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>
      <Button>按钮</Button>
    </>
  )
}
