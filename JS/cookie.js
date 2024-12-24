function setCookie(name, value, hours) { //Set Cookie Method
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000); //Sets to an hour
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax; Secure`; //Makes cookie
}

function getCookie(name) { //Get Cookie method
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) { //Parses & searches through cookie
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null; //Returns null if nothing found
}
