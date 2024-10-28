import { api } from '../../services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts');
        console.log("Dados da API:", data); // Verifique o conteúdo retornado
        
        if (Array.isArray(data)) {
            return data;
        }else{
            console.warn("Dados inesperados:", data);
        }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
    
    return [];
}
 

export const getPostBySlug = async (id) => {
    try{
        const {data} = await api.get(`/posts?id=eq.${id}`);
        if (data && data.length > 0) {
            return data[0];
        }else{
            console.warn("Post não encontrado com o ID:", id);
            return null; // Indica que o post não foi encontrado
        }
    }
    catch(error) {
        console.error('Erro ao buscar post', error);
    }

    return [];
};


