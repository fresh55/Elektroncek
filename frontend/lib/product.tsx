const ustariProdukt = async (ime : string, opis : string , cena : number , SKU : number , proizvajalec : string, barva : string, stanje : string , userId : number, images : string[] ) => {

    try {
        const res = await fetch(`http://localhost:8000/api/product/ustvari`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ime, opis , cena , SKU , proizvajalec, barva, stanje ,userId, images })
        });
            const produkt = await res.json();
            return produkt;
        
    } catch (err) {
        
        console.error(err);
    }
};

const getProductByUserId = async (userId : number) => {

    try {
        const res = await fetch(`http://localhost:8000/api/product/getProductsId?userId=${userId}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            
        });
            
            const data = await res.json(); // Parse the response body as JSON
            return data
        
    } catch (err) {
        
        console.error(err);
        throw err;
    }
};


const getProductByProductId = async (productId : number) => {

    try {
        const res = await fetch(`http://localhost:8000/api/product/getProductsbyProductId?productId=${productId}`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            
        });
            
            const data = await res.json(); // Parse the response body as JSON
            return data
        
    } catch (err) {
        
        console.error(err);
        throw err;
    }
};

const getAllBadges = async () => {

    try {
        const res = await fetch(`http://localhost:8000/api/product/getBadges`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            
        });
            
            const data = await res.json(); // Parse the response body as JSON
            return data
        
    } catch (err) {
        
        console.error(err);
        throw err;
    }
};


const deleteProduct = async (productId: number) => {
    try {
        const response = await fetch(`http://localhost:8000/api/product/deleteProduct/${productId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data); // Log the response data for debug purposes

        // You can update your UI here
    } catch (error) {
        console.error(`There has been a problem with your fetch operation:`);
    }
}
export  {ustariProdukt,getProductByUserId,deleteProduct,getProductByProductId}

