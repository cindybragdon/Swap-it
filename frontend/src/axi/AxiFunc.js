import http from "../http/http";





export async function createAcc (form){
    let flag = false;
    try {
        //console.log(formsCreateAccount);
        const response = await http.post(`/createShadowAndUser`, form)
            .then(response => {
                console.log(response.data);
                if (response.data === "ACK-101" || response.data === "ACK-102") {
                    throw new Error("Erreur lors de la création du compte");
                }
                if (response.data === "ACK-100") {
                    flag = true;
                    connectAcc(form);
                }

            });
        return flag;
    } catch (error) {
        console.error(error);
    }

}

export async function connectAcc(form) {
    let flag = false;
    const response = await http.get(`getUserByEmail?userEmail=${form.user.userEmail}`)

        .then(data => {
            console.log('Data received:', data);
            sessionStorage.setItem('user', JSON.stringify(data.data));
            flag = true;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    //console.log(JSON.parse(sessionStorage.user));
    return flag;
}
