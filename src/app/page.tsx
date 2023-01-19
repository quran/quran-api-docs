'use client'
import '@stoplight/elements/styles.min.css'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

import { API } from '@stoplight/elements'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <API apiDescriptionUrl="/qdc-open-api.json" />
    </div>
  )
}
