import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        axios({
          url: `users/${user._id}`,
          method: 'GET'
        })
          .then(
            (response) => {
              const currentUser = response.data.data
              state.user = currentUser
              localStorage.setItem('currentUser', JSON.stringify(currentUser))
              localStorage.setItem('token', currentUser.token)
              axios.defaults.headers.common.Authorization = currentUser.token
            }
          )
          .catch(
            (error) => {
              if (error) {
                localStorage.removeItem('currentUser')
                localStorage.removeItem('token')
              }
            }
          )
        state.user = JSON.parse(localStorage.getItem('currentUser'))
      }
    },
    currentUser(state, currentUser) {
      state.user = currentUser
      if (!currentUser) {
        state.user = null
        localStorage.removeItem('currentUser')
        localStorage.removeItem('token')
        axios.defaults.headers.common.Authorization = null
      } else {
        if (currentUser.email) {
          state.user = currentUser
          localStorage.setItem('currentUser', JSON.stringify(currentUser))
          localStorage.setItem('token', currentUser.token)
          axios.defaults.headers.common.Authorization = currentUser.token
        }
      }
    },
    Data(state, data) {
      state.data = data
    },
    search(state, query) {
      state.searchQuery = query
    }
  },
  actions: {
    registerUser({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users',
        method: 'POST',
        data: payload
      })
    },
    userLogin({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/login',
        method: 'POST',
        data: payload
      })
    },
    getUsers({ commit }, type) {
      commit('Data', {})
      return axios({
        url: `/users?type=${type}`,
        method: 'GET'
      })
    },
    getUser({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/users/${id}`,
        method: 'GET'
      })
    },
    updateUser({ commit }, data) {
      commit('Data', data)
      return axios({
        url: `/users/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    forgotPassword({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/forgotpassword',
        method: 'POST',
        data: payload
      })
    },
    changePassword({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/changepassword',
        method: 'POST',
        data: payload
      })
    },
    updatePassword({ commit }, data) {
      commit('Data', data)
      return axios({
        url: `/users/updatepassword/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    updateCurrentUser({ commit }) {
      if (localStorage.getItem('currentUser')) {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        axios({
          url: `users/${user._id}`,
          method: 'GET'
        })
          .then(
            (response) => {
              localStorage.setItem('currentUser', JSON.stringify(response.data.data))
              commit('currentUser', JSON.parse(localStorage.getItem('currentUser')))
            }
          )
          .catch(
            (error) => {
              if (error) {
                localStorage.removeItem('userId')
                localStorage.removeItem('currentUser')
                localStorage.removeItem('token')
              }
            }
          )
      }
    },
    userVerification({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/verify',
        method: 'POST',
        data: payload
      })
    },
    updateUserPassword({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/users/register/${data.token}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    socialLogin({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/users/sociallogin',
        method: 'POST',
        data: payload
      })
    },
    addPersonalInfo({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/users/personalinfo/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    addProfessionalInfo({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/users/professionalinfo/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    createCategory({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/categories',
        method: 'POST',
        data: payload
      })
    },
    getCategories({ commit }) {
      commit('Data', {})
      return axios({
        url: '/categories',
        method: 'GET'
      })
    },
    getCategory({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/categories/${id}`,
        method: 'GET'
      })
    },
    createChat({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/chats',
        method: 'POST',
        data: payload
      })
    },
    getChats({ commit }) {
      commit('Data', {})
      return axios({
        url: '/chats',
        method: 'GET'
      })
    },
    getChat({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `chats/${id}`,
        method: 'GET'
      })
    },
    sendMessage({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/messages',
        method: 'POST',
        data: payload
      })
    },
    deleteUser({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/users/${id}`,
        method: 'DELETE'
      })
    },
    createGig({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/gigs',
        method: 'POST',
        data: payload
      })
    },
    getGigs({ commit }) {
      commit('Data', {})
      return axios({
        url: '/gigs',
        method: 'GET'
      })
    },
    getMyGigs({ commit }) {
      commit('Data', {})
      return axios({
        url: '/gigs/user',
        method: 'GET'
      })
    },
    getGig({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/gigs/${id}`,
        method: 'GET'
      })
    },
    updateGig({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/gigs/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    addPricingToGig({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/gigs/${data.id}`,
        method: 'PATCH',
        data: data.payload
      })
    },
    createPortfolio({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/portfolios',
        method: 'POST',
        data: payload
      })
    },
    getPortfolioByUser({ commit }, userId) {
      commit('Data', {})
      return axios({
        url: `/portfolios/byusers/${userId}`,
        method: 'GET'
      })
    },
    getPortfolios({ commit }) {
      commit('Data', {})
      return axios({
        url: `/portfolios`,
        method: 'GET'
      })
    },
    getPortfolio({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/portfolios/${id}`,
        method: 'GET'
      })
    },
    getPortfoliosByCategory({commit}, id) {
      commit('Data', {})
      return axios({
        url: `/portfolios/category/${id}`,
        method: 'GET'
      })
    },
    likePortfolio({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/portfolios/like/${id}`,
        method: 'PATCH'
      })
    },
    commentOnPortfolio({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/comments',
        method: 'POST',
        data: payload
      })
    },
    createProject({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/projects',
        method: 'POST',
        data: payload
      })
    },
    getProjectByUser({ commit }, userId) {
      commit('Data', {})
      return axios({
        url: `/projects/byusers/${userId}`,
        method: 'GET'
      })
    },
    getProject({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/projects/${id}`,
        method: 'GET'
      })
    },
    getProjects({ commit }) {
      commit('Data', {})
      return axios({
        url: `/projects`,
        method: 'GET'
      })
    },
    getBuyerRequest({ commit }) {
      commit('Data', {})
      return axios({
        url: `/projects/buyerrequest`,
        method: 'GET'
      })
    },
    createBid({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/bids',
        method: 'POST',
        data: payload
      })
    },
    getBids({ commit }) {
      commit('Data', {})
      return axios({
        url: '/bids',
        method: 'GET'
      })
    },
    getOrders({ commit }) {
      commit('Data', {})
      return axios({
        url: '/bids/order',
        method: 'GET'
      })
    },
    switchProfile({commit}) {
      commit('Data', {})
      return axios({
        url: '/users/switch',
        method: 'PATCH'
      })
    },
    gigsByUsers({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/gigs/user/${id}`,
        method: 'GET'
      })
    },
    gigsByCategories({ commit }) {
      commit('Data', {})
      return axios({
        url: '/gigs/categories',
        method: 'GET'
      })
    },
    getBidsByProject({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/bids/project/${id}`,
        method: 'GET'
      })
    },
    getBid({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/bids/${id}`,
        method: 'GET'
      })
    },
    acceptBid({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/bids/accept/${id}`,
        method: 'PATCH'
      })
    }
  },
  modules: {}
  })
