// @flow
export class Header {
    header: string;
    data: string;

    constructor(header: string, data: string) {
        this.header = header;
        this.data = data;
    }
}

export class Data {
    headers: string;
    text: string;
    type: string;
    status: number;
    statusText: string;
}

function dataFromJsXhr(jsXhr: XMLHttpRequest): Data {
    let data = new Data();
    data.headers = jsXhr.getAllResponseHeaders();
    data.text = jsXhr.responseText;
    data.type = jsXhr.responseType;
    data.status = jsXhr.status;
    data.statusText = jsXhr.statusText;
    return data;
}

function sendCommand(method: string,
                     url: string,
                     headers: Array<Header>,
                     data: string = ""): Promise<Data> {
    return new Promise((resolve, reject) => {
        let jsXhr: XMLHttpRequest = new XMLHttpRequest();

        if (method === "GET" && data !== "") url = url + "?" + data;

        jsXhr.open(method, url);

        if (headers !== null) {
            headers.forEach(header =>
                jsXhr.setRequestHeader(header.header, header.data)
            );
        }

        jsXhr.onload = () => {
            //Commented out for the best times
            // if (jsXhr.status < 200 || jsXhr.status >= 300) {
            //     reject(dataFromJsXhr(jsXhr));
            // }
            resolve(dataFromJsXhr(jsXhr));
        };

        jsXhr.onerror = () => {
            reject(
                `Error ${method.toUpperCase()}ing data to url "${url}", check that it exists and is accessible`
            );
        };

        if (method === "POST") {
            jsXhr.send(data);
        } else {
            jsXhr.send();
        }
    });
}

export function get(url: string,
                    headers: Array<Header> = null,
                    data: string = ""): Promise<Data> {
    return sendCommand("GET", url, headers, data);
}

export function post(url: string,
                     data: string = "",
                     headers: Array<Header> = null): Promise<Data> {
    return sendCommand("POST", url, headers, data);
}
