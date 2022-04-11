import { hi } from './m.js'
console.log(hi)
//注释
let aa: number = 1
aa = 99

function fn(this: any, a: string, b: string): string {
  console.log(this)
  return a + b
}
fn('21', '1')
let box1: HTMLElement | null = document.getElementById('box1')
let n: number = 1
box1?.addEventListener('click', (): void => {
  console.log(1111)
})
