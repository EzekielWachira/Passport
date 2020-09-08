export default {
    state: {
        auth: {
            loggedIn: false,
            user: []
        }
    },
    getters: {
        isLoggedIn(state){
            return state.auth.loggedIn
        }
    },
    actions: {
        // 
    },
    mutations: {
        LOGIN(state, status){
            state.auth.loggedIn = status
            state.auth.user = []
        },
        AUTH_USER(state, user){
            state.auth.user = user
        }
    }
}