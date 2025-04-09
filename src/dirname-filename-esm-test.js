import { dirname, filename } from 'dirname-filename-esm'

console.log('dirname', dirname(import.meta))
console.log('filename', filename(import.meta))
