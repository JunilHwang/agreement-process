const promise = (num) => new Promise((resolve, reject) => {
  if (num == 10) reject('this is 10')
  else resolve('success')
})

const test = async () => {
  try {
    const msg1 = await promise(1)
    const msg2 = await promise(2)
    const msg3 = await promise(3)
    const msg4 = await promise(10)
    console.log(msg1, msg2, msg3, msg4)
  } catch (err) {
    console.log(err)
  }
}

test()