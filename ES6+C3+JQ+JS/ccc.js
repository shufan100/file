let sum = 0
while (sum < 10) {
  sum += Math.floor(Math.random() * 5) + 1
  console.log(`sum is now ${sum}`)
}
console.log('Loop finished')
