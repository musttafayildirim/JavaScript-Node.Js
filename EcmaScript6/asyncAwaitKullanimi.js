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
            resolve(friends);
        },1000);
    });
};


//burada callback hell ile yapıyoruz asenkron işlemimizi burayı veritabanından veriyi çekiyormuşuz gibi düşünüyoruz...
//Ve biz daha kullanıcıyı çekmeden arkadaşları gelmemeli onun için bir asenkronluk yapmamız gerekiyor önce callback hell ile
//işlemi gerçekleştiriyoruz...


let userId;
getUser().then(function (user) {
    userId = user.id;
    getFriends(userId).then(function (friends) {
        console.log("Bu çalışma callback hell ile yazılmıştır..");
        console.log(user);
        console.log(friends);
    })
});


//Promise Chain
getUser()
    .then((user) =>{
        return user.id;
    })
    .then((userId) => {
       getFriends(userId)
           .then((friends)=>{
               console.log("buradaki çalışma promise chain'e aittir.");
                console.log(friends);
       })
    });


//yukarıdaki işlemin biraz daha sadeleştirilmiş hali :D
getUser()
    .then((user) =>{
        return getFriends(user.id);
    })
    .then((userId) => {
        console.log("buradaki çalışma promise chain'in biraz sadeştirilmiş halidir.");
            console.log(friends);
    });


//bu işlemin gerçekleştirilmesi için bir fonksiyon scope'unda çalışmamız gerekiyor....

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


