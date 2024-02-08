import { useEffect, useState } from "react";

const useGetPeople = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/people')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
    }, []);

    return [data, isLoading];
}

export {
    useGetPeople
};
