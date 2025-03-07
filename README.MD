# Intellij / WebStorm performance problem test-case

## Steps:

1. Run: `npm install`

2. Open up the file `index.ts` and see the CPU performance spike.

On a Mac Studio M1 Ultra this easily generates about 600% CPU load.

If you select another file or the window is inactive, the CPU load will drop again, unless the IDE is running "analyzing code", then the CPU load will stay high until it is done.