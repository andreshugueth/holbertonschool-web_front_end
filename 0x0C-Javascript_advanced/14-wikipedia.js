const body = document.body;
const createElement = (data) => {
    const paragraph = document.createElement('p');
    paragraph.innerText = data;
    body.appendChild(paragraph);
}

const queryWikipedia = (callback) => {
    let req = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    req.open("GET", url, true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                callback(req.response.query.pages["21721040"].extract);
            }
        }
    };
    req.responseType = "json";
    req.send(null);

}

queryWikipedia(createElement);
