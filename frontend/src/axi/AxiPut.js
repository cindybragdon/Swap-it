import http from "../http/http";

export async function updatePige (formToUpdatePige) {
    let flag = false;
    try {
        const response = await http.put(`/updatePige`, formToUpdatePige)
            .then(response => {
                console.log(response.data);
                if (response.data === "ACK-310") {
                    flag = true;
                } else {
                    throw new Error("Erreur lors du update de la pige");
                }
            })
        return flag;
    } catch (error) {
        console.error(error);
    }
}