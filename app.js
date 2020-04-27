const getApi =function () {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const response = JSON.parse(this.responseText);
            for (let i = 0; i < response.length; i++) {
                console.log(response[i].name);
            }
        }
    };
    httpRequest.open("GET", "http://localhost:3000/api/cameras", true);
    httpRequest.send();
}

getApi()