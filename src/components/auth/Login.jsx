import React from 'react'
import { GraphQLClient } from 'graphql-request'
import { GoogleLogin } from 'react-google-login'
import { meQuery } from '../queries&Mutations&Functions/Queries'


const Login = () => {

    const onSuccess = async (googleUser) => {
        console.log({ googleUser });
        const idToken = googleUser.getAuthResponse().id_token
        console.log({ idToken });
        const client = new GraphQLClient(
            'http:localhost:10000/graphql',
            { headers: { authorization: idToken } }
        )
        const userData = await client.request(meQuery)
        console.log({ userData });
    }

    return (
        <>
            <GoogleLogin
                isSignedIn={true}
                onSuccess={onSuccess}
                clientId="869765472227-2t3qjihaf4ookelk8drs5cvsp606tvu6.apps.googleusercontent.com"
            />
        </>
    )

}
export default Login