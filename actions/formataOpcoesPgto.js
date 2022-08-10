  const myAction = async (name, value) => {
    let dFormata = event.state.user.opcoesPgto.body['0'].opcoesPagamento['0'].valor
    let dStringFormata = dFormata.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    event.state.user.dFormata = dStringFormata
    let vFormata = event.state.user.opcoesPgto.body['0'].opcoesPagamento['0'].desconto
    let vFormataString = vFormata.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    event.state.user.vFormata = vFormataString
  }

  return myAction(args.name, args.value)