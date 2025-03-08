library(ggplot2)
library(scales)


df <- read.table("out.tsv", header = TRUE)
x <- ggplot(df, aes(x = size, y = time, color = program)) +
  geom_line(stat = "summary") +
  geom_errorbar(width = 0.2, stat = "summary") +
  geom_jitter(size = 0.5, position = position_jitter(width = 0.1, seed = 42)) +
  scale_x_continuous(
    trans = "log2",
    labels = function(x) paste0("N=", x)
  ) +
  scale_y_continuous(trans = "log2") +
  ylab("time (s)") +
  xlab("MSA size (N rows, N columns)") +
  ggtitle("Time to render MSA")


ggsave("img/1.png", x, width = 7, height = 4)
