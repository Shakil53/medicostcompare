import { useQuery } from '@tanstack/react-query';
import React from 'react';
import NasalComponent from './categoryComponent/NasalComponent';

const Nasal = () => {

    const getNasalItem = async () => {
        return await fetch('/medicine.json').then(res => res.json());
    } 


    const {data, isLoading, isError} = useQuery({
        queryKey: ["nasalItem"],
        queryFn: getNasalItem
    })

    if (isLoading) {
        return <p>Loading..</p>
    }


    return (
        <div className="flex flex-wrap space-x-5 justify-around">
            {
                data.map(item => <NasalComponent item={item} key={item.id}></NasalComponent>)
            }
        </div>
    );
};

export default Nasal;