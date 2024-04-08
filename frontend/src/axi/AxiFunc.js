import http from "../http/http";







export async function connectAcc(form) {
    let flag = false;
    const response = await http.get(`getUserByEmail?userEmail=${form.user.userEmail}`)

        .then(data => {
            console.log('Data received:', data);
            sessionStorage.setItem('user', JSON.stringify(data.data));
            window.location.reload();
            flag = true;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    //console.log(JSON.parse(sessionStorage.user));
    return flag;
}


export async function getAllInv() {
    let listOfInv;
    const response = await http.get(`getAllInvitationsFromUserEmail?userEmail=${JSON.parse(sessionStorage.user).userEmail}`)

        .then(data => {
            console.log('Data received:', data.data);

            listOfInv = data.data;

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    //console.log(JSON.parse(sessionStorage.user));
    return listOfInv;
}
