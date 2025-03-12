library(ggplot2)
library(scales)


df <- read.table("out.tsv", header = TRUE)
df$size <- df$size * df$size
x <- ggplot(df, aes(x = size, y = time, color = program)) +
  geom_line(stat = "summary") +
  geom_errorbar(width = 0.2, stat = "summary") +
  geom_jitter(size = 0.5, position = position_jitter(width = 0.1, seed = 42)) +
  scale_x_continuous(breaks = scales::pretty_breaks(n = 10)) +
  ylab("Time to render MSA / seconds") +
  xlab("MSA size (total number of characters, C)")


ggsave("img/1.png", x, width = 7, height = 4)
