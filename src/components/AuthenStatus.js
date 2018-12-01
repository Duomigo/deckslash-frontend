const isAuth = () => {
    const token = localStorage.getItem('jwtToken');
    if (token == null) {
        console.log("There is no token in localStorage")
        return false;
    } else {
        console.log("Token in localStorage is " + token);
        return true;
    }
}

export default isAuth;