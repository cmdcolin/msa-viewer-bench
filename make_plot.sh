#!/bin/bash
node gather.js > out.tsv
Rscript plot.R
