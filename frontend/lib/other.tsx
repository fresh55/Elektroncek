const getCities = async () => {

    try {
      
        const res = await fetch(`http://localhost:8000/api/other`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
        
        });
        if (res.status === 201) {
            const cities = await res.json();
            return cities;
            ;}
    } catch (err) {
        
        console.error(err);
    }
};

export  {getCities}