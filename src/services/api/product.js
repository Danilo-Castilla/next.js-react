import axios from "axios";
import endPoints from "@services/api/index";

const addProduct = async (body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
        },
    };
    const response = await axios.post(endPoints.products.addProduct, body, config);
    return response.data;
};

const deleteProduct = async (id) => {
    const deleteId = await axios.delete(endPoints.products.deleteProduct(id));
    return deleteId.data;
};

const updateProduct = async (id, body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
        },
    };
    const updateId = await axios.put(endPoints.products.updateProduct(id), body, config);
    return updateId.data;
}

export { addProduct, deleteProduct, updateProduct };