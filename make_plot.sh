#!/bin/bash
node gather.ts >out.tsv
Rscript plot.R
