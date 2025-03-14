library(ggplot2)
library(gridExtra)
library(scales)


df <- read.table("varyXY.tsv", header = TRUE)
df$size <- df$size * df$size

# Create linear models for each program
programs <- unique(df$program)
models <- list()

# Print model summaries
cat("Linear Model Summaries:\n")
cat("======================\n\n")

for (prog in programs) {
  subset_data <- df[df$program == prog, ]
  model <- lm(time ~ size, data = subset_data)
  models[[prog]] <- model

  cat("Program:", prog, "\n")
  print(summary(model))
  cat("\n")
}
