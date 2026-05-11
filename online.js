async function callApi() {
    try { 
        let response = await fetch("http://127.0.0.1:5000/status", {method: "GET"})
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        return;
    }
    
}

async function onlineStatus() {
    let response = await callApi();
    console.log(response);
    if (response && response.my_pc == "online") {
        console.log("a")
        document.getElementById("online-status").innerHTML = "<h2>I'm ONLINE!</h2>";
    }
    else {
        document.getElementById("online-status").innerHTML = "<h2>I'M OFFLINE</h2>"; 
    }
}