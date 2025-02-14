export const checkValidData = (name1, email, password)=>{

    const isNameValid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name1);
    const isEmailValid=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}/.test(password);

    if(!isNameValid) return "Name is not Valid";
    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;

}