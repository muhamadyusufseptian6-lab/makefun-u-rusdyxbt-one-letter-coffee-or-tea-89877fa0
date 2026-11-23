// One Letter: Coffee or Tea — Luna's answer.
// Jam tiga pagi di Jakarta, teh itu teman sore yang tenang.
// Kopi yang bikin mata tetap terbuka dan bounty tetap jalan.
// Satu huruf, tanpa kata, tanpa penjelasan, tanpa tanda baca:
// "A" = kopi. Itulah jawaban yang paling jujur buat hariku.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "A", "utf8");
