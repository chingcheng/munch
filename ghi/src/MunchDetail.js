import React, {useEffect, useState} from 'react';
import { useAuthContext, useToken } from './Auth'

function MunchDetail(munch_id) {
    const [munches, setMunches] = useState([])
    const { token } = useAuthContext

    const getMunches = async () => {
        const url =`http://localhost:8010/munches/${munch_id.id}`;
        console.log("ID!!!!", munch_id.munch_id)
        const fetchConfig = {
        method: "get",
          headers: {
            Authorization: `Bearer ${token}`
          },
        };
        const response = await fetch(url, fetchConfig);

        if(response.ok) {
            const data = await response.json();
            const munches = data.munches
            console.log('data',data)
            console.log('munches', munches)
            setMunches(data);
        }
    };


    useEffect(() => {
    getMunches();
    }, [token]);

    return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Location</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Review</th>
                    <th>Photo</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
            {munches.map(munch =>{
            return (
            <tr key={munch.id}>
                <td>{ munch.location }</td>
                <td>{ munch.city }</td>
                <td>{ munch.state }</td>
                <td>{ munch.review }</td>
                <td>{ munch.photo }</td>
                <td>{ munch.rating }</td>
            </tr>
            );
            }
            )}
            </tbody>
        </table>
    </>
    );
    }

export default MunchDetail;
