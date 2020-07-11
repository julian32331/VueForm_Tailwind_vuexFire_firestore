import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '../db'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: []
  },
  getters: {
    name: state => state.fields.find(e => e.id === 'name') && state.fields.find(e => e.id === 'name').value,
    email: state => state.fields.find(e => e.id === 'email') && state.fields.find(e => e.id === 'email').value,
    phone: state => state.fields.find(e => e.id === 'phone') && state.fields.find(e => e.id === 'phone').value,
    address: state => state.fields.find(e => e.id === 'address') && state.fields.find(e => e.id === 'address').value,
    job: state => state.fields.find(e => e.id === 'job') && state.fields.find(e => e.id === 'job').value
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
    bindFields: firestoreAction(({ bindFirestoreRef }) => {
      // return the promise returned by `bindFirestoreRef`

      return bindFirestoreRef('fields', db.collection('fields'))
    }),
    unbindFields: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef('fields')
    })
  },
  modules: {
  }
})
