import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Btn1 from '../../components/ui/btn1/Btn1'
import "./page404.scss"

export default function Page404() {

    let navigate = useNavigate()

    return (
        <main className="main">
            <div className="error404">
                <h4>Error 404</h4>
                <h3>Not Found</h3>
                <Btn1 text={'Back to home'} func={() => navigate("/")} />
            </div>
        </main>
    )
}