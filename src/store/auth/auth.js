const state={
    user:{}
}

const actions={
    async setUser({state}){
        try{
            const res= await fetch(`https://goodifie.herokuapp.com/api/v1/users/me`,{ credentials: 'include' });
            const resData= await res.json();
            if(resData.status==="success"){
                state.user=resData.data.user;
            }
            else
                throw new Error("User not exist");
        } catch (err){
            console.log(err);
        }
    },
    async setTotalCartItems({state}){
        const res = await fetch(`https://goodifie.herokuapp.com/api/v1/cart/${state.user.id}`, {credentials: "include"});
        const resData = await res.json();
        state.user = {
            ...state.user,
            totalCartItems: resData.data.length
        }
    }
}
const mutations={
    saveUser(state,user){
        state.user=user;
    }
}
const getters={
    getUser(state){
        return state.user;
    }
}

export default{
    state,
    actions,
    mutations,
    getters
}