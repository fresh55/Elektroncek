
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
      
        const response = await fetch(`http://localhost:8000/api/users/profile?id=${id}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
                
            },
        
        });
        if (!response.ok) {
            throw new Error('Failed to update profile');
          }

          const data = await response.json();

          return data;
    } catch (err) {
       // Handle error
       console.error('Failed to fetch user profile:', err);
       return null;
    }
};

const updateUser = async (id:number, ime?:string, priimek?:string,mesto?:string,bio?:string,avatar?:string,instagramUrl?:string,facebookUrl?:string) => {

    try {
      
        const response = await fetch(`http://localhost:8000/api/users/profile?id=${id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify({ ime,priimek,mesto,bio,avatar,instagramUrl,facebookUrl })
        });
        if (response.status === 201) {
        const user = await response.json();
        console.log("updejtam");
        return user;
            ;}
    } catch (err) {
        
        console.error(err);
    }
};

const deleteUser = async (id:number) => {
  
    try {
       
        const res = await fetch(`http://localhost:8000/api/users/profile?id=${id}`, {
            method: 'DELETE',
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
export  {registerUser, authUser, getUser,deleteUser,updateUser}