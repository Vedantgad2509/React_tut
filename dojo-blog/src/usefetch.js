import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data,setdata]=useState(null);
    const [isLoading,setisLoading]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        // console.log('hello');
        // // console.log(name);
        setTimeout(()=>{
             fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch');
                    }
                    return res.json();
                })
                .then(data=>{
                    console.log(data);
                    setdata(data);
                    setisLoading(false);
                    seterror(null);
                })
                .catch(err =>{
                    setisLoading(false);
                    seterror(err.message)
                })


        },1000);
        
    },[url]
);

return{data,isLoading,error}
}

export default useFetch;