  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  const myAction = async (name, value) => {
    let op = event.state.user.op
    for (let i of event.state.user.opcoesPgto.body['0'].opcoesPagamento) {
      if (op == 'x') {
        event.state.user.opcaoAtual = i
        event.state.user.op = i.codigo
        break;
      }
      if (op == i.codigo) {
        op = 'x'
      }
    }
  }

  return myAction(args.name, args.value)