"use client";

import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const User = () => {
    const router = useParams()
    console.log(router)
    const {username} = router
    return (
        <h1>This is user: {username}</h1>
    );
}

export default User;
