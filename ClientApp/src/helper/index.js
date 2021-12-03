export const userData = () => {
    try
    {
        const userData = localStorage.getItem("user");
        if(userData)
        {
            return JSON.parse(userData);
        }
        else
        {
            window.location.href = "/login";
            return null;
        }
    }
    catch
    {
        window.location.href = "/login";
        return null;
    }
}