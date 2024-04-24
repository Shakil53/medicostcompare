import React from 'react';
import { useQuery } from "@tanstack/react-query";
import BabyCareComponent from './categoryComponent/BabyCareComponent';


const BabyCare = () => {

    const getBabyCare = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading, isError} = useQuery({
        queryKey: ["babyCare"],
        queryFn: getBabyCare,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    // console.log(data);

    

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 m-4">
            
                {
                    data.map(item => <BabyCareComponent key={item.id} item={item}></BabyCareComponent>)
                }
            
        </div>
    );
};

export default BabyCare;