## msa NPM library (biojs/wilzbach)

- CDN which was heavily relied on, making project mostly dead
- Linked project (plotly react-msa-viewer) also dead (404 github)
- Source code needs manual editing for it to work (xref
  https://github.com/wilzbach/msa/issues/257)
- But, the library is overall a good reference for canvas based rendering. Has
  many "MSA application features" that are of general interest to bioinformatics
  researchers e.g. consensus, selection, labels

| size      | memory  | time                                                          |
| --------- | ------- | ------------------------------------------------------------- |
| 50 x 50   | 50Mb    | instant                                                       |
| 100 x 100 | 77Mb    | small delay                                                   |
| 200 x 200 | 94Mb    | large delay (1+s,browser alert to kill tab before it renders) |
| 400 x 400 | unknown | totally hanged                                                |

## wasabi (http://was.bi)

- Relatively maintained
- Requires server side software to use
- Handles 5120x5120 with approx 5 second delay after each scroll, but still
  performant
- Claims ~9s for a 1000x100,000 dataset loading (comparable to native)
- Has import straight from ensembl gene tree

## react-msaview

- New software
- Handles 5120x5120 with smooth scroll
- Variety of user interface features
- Integrated with genome browser
- Integrated with protein viewer[^1]

[^1]: not really done
