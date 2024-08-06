// @ts-expect-error
import msa, { io, utils } from 'msa'
import { useEffect, useRef } from 'react'
import 'msa/css/msa.css'

export default function MSA() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) {
      return
    }

    var m = msa({
      el: ref.current,
      // importURL: './ttc39a.fa',
      seqs: utils.seqgen.genConservedSequences(200, 200, 'ACGT-'), // an array of seq files
    })
    m.render()
  }, [])

  return <div ref={ref} />
}
