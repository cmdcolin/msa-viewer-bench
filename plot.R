library(ggplot2)
library(gridExtra)
library(scales)


df <- read.table("varyXY.tsv", header = TRUE)
df$size <- df$size * df$size
p1 <- ggplot(df, aes(x = size, y = time, color = program)) +
  labs(tag = "A") +
  geom_line(stat = "summary") +
  geom_errorbar(width = 0.2, stat = "summary") +
  geom_jitter(size = 0.5, position = position_jitter(width = 0.1, seed = 42)) +
  scale_x_continuous(breaks = scales::pretty_breaks(n = 10)) +
  ylab("Time to render MSA / seconds") +
  xlab("MSA size (total number of characters, C)")


df <- read.table("varyX.tsv", header = TRUE)
df$size <- df$x_size * df$y_size
p2 <- ggplot(df, aes(x = size, y = time, color = program)) +
  labs(tag = "B") +
  geom_line(stat = "summary") +
  geom_errorbar(stat = "summary", aes(width = 20000)) +
  geom_jitter(size = 0.5, position = position_jitter(width = 0.1, seed = 42)) +
  scale_x_continuous(
    labels = function(x) paste0("N=", x)
  ) +
  ylab("Time to render MSA / seconds") +
  xlab("MSA size (total number of characters, C)")




df <- read.table("varyY.tsv", header = TRUE)
df$size <- df$x_size * df$y_size
p3 <- ggplot(df, aes(x = size, y = time, color = program)) +
  labs(tag = "C") +
  geom_line(stat = "summary") +
  geom_errorbar(width = 0.2, stat = "summary") +
  geom_jitter(size = 0.5, position = position_jitter(width = 0.1, seed = 42)) +
  scale_x_continuous(
    labels = function(x) paste0("N=", x)
  ) +
  ylab("Time to render MSA / seconds") +
  xlab("MSA size (total number of characters, C)")


res <- grid.arrange(p1, p2, p3, nrow = 2)
ggsave("img/all.png", res, width = 14, height = 9)
