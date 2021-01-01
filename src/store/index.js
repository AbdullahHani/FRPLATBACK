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
        state.user = currentUser
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
      console.log('Stores registertion')
      commit('Data', payload)
      return axios({
        url: '/users',
        method: 'POST',
        data: payload
      })
    },
    createUser({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/users/create',
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
    updateSessionUser({ commit }, user) {
      commit('currentUser', user)
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
    createRequest({ commit }, payload) {
      commit('Data', payload)
      return axios({
        url: '/projects',
        method: 'POST',
        data: payload
      })
    },
    getProjects({ commit }) {
      commit('Data', {})
      return axios({
        url: '/projects',
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
    updateProject({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/projects/${data.id}`,
        data: data.payload,
        method: 'PATCH'
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
    uploadRequestFiles({ commit }, data) {
      commit('Data', {})
      return axios.post(`/upload/attachments/${data.id}`,
        data.payload,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            'accept': 'application/json'
          }
        }
      )
    },
    uploadResponseFiles({ commit }, data) {
      commit('Data', {})
      return axios.post(`/upload/responseattachments/${data.id}`,
        data.payload,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            'accept': 'application/json'
          }
        }
      )
    },
    uploadProfileImage({ commit }, data) {
      commit('Data', {})
      return axios.post(`/upload/profileimage`,
        data,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            'accept': 'application/json'
          }
        }
      )
    },
    dashboardData({ commit }) {
      commit('Data', {})
      return axios({
        url: '/projects/dashboard',
        method: 'GET'
      })
    },
    getActivities({ commit }) {
      commit('Data', {})
      return axios({
        url: '/activities',
        method: 'GET'
      })
    },
    getPermissions({ commit }) {
      commit('Date', {})
      return axios({
        url: '/permissions',
        method: 'GET'
      })
    },
    deleteUser({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/users/${id}`,
        method: 'DELETE'
      })
    },
    updateProjectStatus({ commit }, data) {
      commit('Data', {})
      return axios({
        url: `/projects/status/${data.id}`,
        method: 'PATCH',
        data: data.payload
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
    facebookLogin({ commit }, payload) {
      commit('Data', {})
      return axios({
        url: '/users/facebooklogin',
        method: 'POST',
        data: payload
      })
    },
    removeAttachment({ commit }, id) {
      commit('Data', {})
      return axios({
        url: `/projects/attachment/${id}`,
        method: 'DELETE'
      })
    },
    getNotifications({ commit }) {
      commit('Data', {})
      return axios({
        url: '/notifications',
        method: 'GET'
      })
    }
  },
  modules: {}
})
