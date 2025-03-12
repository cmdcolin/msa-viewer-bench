#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <time.h>

// Amino acid letters
const char letters[] = "ACDEFGHIKLMNPQRSTVWY";
const int num_letters = 20;

void gen(int M, int N, FILE *file) {
  for (int i = 0; i < M; i++) {
    // Write sequence ID
    fprintf(file, ">seq%d\n", i);

    // Generate and write random sequence
    for (int j = 0; j < N; j++) {
      int random_index = rand() % num_letters;
      fputc(letters[random_index], file);
    }
    fprintf(file, "\n");
  }
}

int main() {
  // Seed random number generator
  srand(time(NULL));

// Create output directory
#ifdef _WIN32
  mkdir("out");
#else
  mkdir("out", 0777);
#endif

  // Generate sequences for different sizes
  for (int i = 128; i < 2 << 14; i *= 2) {
    for (int j = 128; j < 2 << 14; j *= 2) {
      printf("Generating: i=%d, j=%d\n", i, j);

      // Create filename
      char filename[100];
      sprintf(filename, "out/%d_%d.fa", i, j);

      // Open file for writing
      FILE *file = fopen(filename, "w");
      if (file == NULL) {
        fprintf(stderr, "Error opening file %s\n", filename);
        continue;
      }

      // Generate sequences
      gen(i, j, file);

      // Close file
      fclose(file);
    }
  }

  return 0;
}
