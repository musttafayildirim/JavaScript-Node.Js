const user = {id : 10, name:'Mustafa'};
const friends = [{id:11,name:"Mikail"},{id:12,name:'Sude'}, {id:13, name:'Şeyma'}];

const getUser = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(user);
        },500);
    });
};

const getFriends = (userId) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Kullanıcının arkadaşı bulunamadı!!");
        },1000);
    });
};


async function asenkronCalisma() {
    try {
        const user = await getUser();
        const friends = await getFriends(user.id);
        console.log("Bu işlem asenkron çalışmaya aittir...");
        console.log(user, friends);
    }catch (error) {
        console.log(error);
    }

}

asenkronCalisma();
