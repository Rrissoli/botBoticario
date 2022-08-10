  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  const myAction = async (name, value) => {
    
    let descontoString = event.state.user.divida.body['0'].descontroString
    event.state.user.descontoString = descontoString
  }

  return myAction(args.name, args.value)