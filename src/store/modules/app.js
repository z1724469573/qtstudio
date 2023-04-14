export default {
    namespaced: true,
    state: () => ({
      sidebarOpened: true
    }),
    mutations: {
      triggerSidebarOpened(state) {
        console.log('qwe')
        
        state.sidebarOpened = !state.sidebarOpened
      }
    },
    actions: {}
  }