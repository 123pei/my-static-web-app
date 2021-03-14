import { GET_PRODUCTS } from './mutation-types';

const captains = console;

const data = {
  products: [
    {
      id: 10,
      name: 'Tom',
      description: 'Age 21',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Alice',
      description: 'Age 15',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Aie',
      description: 'Age 32',
      quantity: 1,
    },
  ],
};
export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    [GET_PRODUCTS](state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProductsAction({ commit }) {
      try {
        commit(GET_PRODUCTS, data.products);
        return data.products;
      } catch (error) {
        captains.error(error);
      }
    },
  },
  getters: {
    products: (state) => state.products,
  },
};
