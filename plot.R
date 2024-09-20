library(ggplot2)

df <- read.table("out.tsv", header = TRUE)

ggplot(df, aes(x = size, y = time, color = program)) +
  geom_point() +
  scale_x_continuous(trans = "log2") +
  ylab("time (s)") +
  xlab("MSA size NxN") +
  ggtitle("Time to render MSA")
