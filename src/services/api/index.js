const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        addProduct: `${API}/api/${VERSION}/products`,
        updateProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    },
    users: {
        getUsers: `${API}/api/${VERSION}/users/`,
        postUser: `${API}/api/${VERSION}/users/`,
    },
    categories: {
        getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        getCategoriesList: `${API}/api/${VERSION}/categories`,
        addCategory: `${API}/api/${VERSION}/categories`,
        updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    },
    files:{
        postFiles: `${API}/api/${VERSION}/files/upload`,
        getFiles: (fileName) => `${API}/api/${VERSION}/${fileName}`
      }
};

export default endPoints;