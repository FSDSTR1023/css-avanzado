
export const fetchUsers = async () => {

    const response = await fetch('https://dummyjson.com/users?limit=15');
    const data = await response.json()

    return data.users;
}