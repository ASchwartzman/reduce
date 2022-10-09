const boletas = [
  { lote: 100, preco: 53 },
  { lote: -100, preco: 56 },
  { lote: 200, preco: 48 },
  { lote: -100, preco: 51 },
  { lote: 200, preco: 51 },
  { lote: 100, preco: 46 },
  { lote: 150, preco: 57 },
  { lote: 40, preco: 42 },
  { lote: -110, preco: 47 },
  { lote: -10, preco: 49 },
  { lote: -200, preco: 53 },
  { lote: -100, preco: 41 },
  { lote: -50, preco: 40 },
]

function pnlReducer(acc, boleta, index) {
  let loteTotal = acc.lote + boleta.lote
  let precoMedio =
    (acc.lote * acc.preco + boleta.lote * boleta.preco) / loteTotal

  if (loteTotal === 0) {
    let lucroAcc =
      acc.lucro - (acc.lote * acc.preco + boleta.lote * boleta.preco)
    return { lote: loteTotal, preco: 0, lucro: lucroAcc }
  }

  return { lote: loteTotal, preco: precoMedio, lucro: acc.lucro }
}

const final = boletas.reduce(pnlReducer, { lote: 0, preco: 0, lucro: 0 })

console.table(boletas)
console.table(final)

const trace = () => console.trace('Joyce vadia')
trace()
trace()

console.log('🔥')
