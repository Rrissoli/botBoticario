
  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  const myAction = async (name, value) => {
      event.state.user.dtVctoSl = event.payload.text.split('-')[2]+'-'+event.payload.text.split('-')[1]+'-'+event.payload.text.split('-')[0]+'T00:00'
    
  }

  return myAction(args.name, args.value)