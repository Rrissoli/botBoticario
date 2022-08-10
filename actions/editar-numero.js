  const myAction = async (name, value) => {
  let desconto = event.state.user.opcoesPgto.body['0'].valorTotalDivida
  let descontoString = desconto.toLocaleString() 
  event.state.user.descontoString = descontoString  
  }

  return myAction(args.name, args.value)