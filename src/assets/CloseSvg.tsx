import * as React from 'react'
import { SVGProps } from 'react'

const CloseSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.996 1.332 14.663 0l-6.67 6.666L1.339.013.005 1.345l6.656 6.653L0 14.656l1.333 1.332L7.994 9.33 14.668 16 16 14.668l-6.673-6.67 6.669-6.666Z'
      fill='#7A849D'
    />
  </svg>
)

export default CloseSvg