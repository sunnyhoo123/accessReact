function savePage(state = { current: 1, pageSize: 10 }, action) {
    switch (action.type) {
      case 'SAVE_PAGE':
        return action.page
      default:
        return state
    }
  }
  
export default savePage;