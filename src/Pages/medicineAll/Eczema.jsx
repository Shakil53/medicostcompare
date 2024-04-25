import React from 'react';
import { useQuery } from "@tanstack/react-query";
import EczemaComponent from './categoryComponent/EczemaComponent';



const Eczema = () => {

    const getEczema = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading, isError} = useQuery({
        queryKey: ["eczema"],
        queryFn: getEczema,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    // console.log(data) grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 m-4;

    

    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            
                {
                    data.map(item => <EczemaComponent key={item.id} item={item}></EczemaComponent>)
                }
            
        </div>
    );
};

export default Eczema;