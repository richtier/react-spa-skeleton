import { useState } from 'react'

const BREAKPOINT = 420  // YOLO BLAZE IT LMAO

export default function() {
  const isSmall = document.documentElement.clientWidth <= BREAKPOINT
  return { isSmall }
}
