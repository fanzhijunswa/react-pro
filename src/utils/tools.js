export const sleep = time => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve()
    },time)
  })
}