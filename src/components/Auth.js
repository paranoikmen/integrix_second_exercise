import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "../App.css"
import {authSuccess} from "../store/authReducer";
import {useHistory} from 'react-router-dom';
import validator from 'validator';

function Auth() {
    const dispatch = useDispatch()
    const [loginState, setLogin] = useState("")
    const [passwordState, setPassword] = useState("")
    const history = useHistory();

    async function login() {
        if(!validator.isEmail(loginState)) {
            return alert("Неправильно введенный email, поправьте")
        }
        if(passwordState === "") {
            return alert("Введите пароль")
        }
        else {
            const response = await fetch('http://localhost:4000/api/user', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login: loginState, password: passwordState}),
            })

            const data = await response.json()
            if (!data.hasOwnProperty("error")) {
                dispatch(authSuccess({login: data["login"], password: data["password"]}))
                history.push('/')
            } else {
                return alert("пользователь не найден")
            }
        }
    }

    return (
        <div className={"authContainer"}>
            <div className={"authDiv"}>Вход в систему</div>
            <div>
                <input
                    type="email"
                    placeholder={"Логин"}
                    value={loginState}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder={"Пароль"}
                    value={passwordState}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={login}>
                Войти
            </button>
        </div>
    );
}

export default Auth;
