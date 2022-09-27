const addCounties = (x1,x2) => {
  return {
    type: 'ADD_COUNTIES',
    number: x1,
    name: x2
  }
}

const resetCounties = () => {
  return { type: 'RESET_COUNTIES' }
}

export const mapDispatchToProps = {
  addCounties,
  resetCounties
}