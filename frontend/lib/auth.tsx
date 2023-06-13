const registerUser = async (username: string,email: string, password: string) => {

    try {
        const res = await fetch(`http://localhost:8000/api/users`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        });
        if (res.status === 201) {
            const user = await res.json();
            return user;
        } else if (res.status === 409) {
            const { message } = await res.json();
            return message as string;
        }
    } catch (err) {
        
        console.error(err);
    }
};

const authUser = async (email: string, password: string) => {

    try {
      
        const res = await fetch(`http://localhost:8000/api/users/auth`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({  email, password })
        });
        if (res.status === 201) {
            const user = await res.json();
            return user;
        } else if (res.status === 401) {
            const { message } = await res.json();
            return message as string;
        }
    } catch (err) {
        
        console.error(err);
    }
};

const getUser = async (id:number) => {

    try {
      
        const res = await fetch(`http://localhost:8000/api/users/profile?id=${id}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
        
        });
        if (res.status === 201) {
            const user = await res.json();
            return user
            ;}
    } catch (err) {
        
        console.error(err);
    }
};

export  {registerUser, authUser, getUser}