import React, {useState} from "react";
import "../App.css"
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


function Form() {
    const [value, setValue] = useState(null)
    const [textInput, setTextInput] = useState("")
    const data = useSelector(state => state.auth)
    const history = useHistory();

    async function handleSubmit() {
        if(value === "another" && textInput === "") {
            return alert('Вы забыли ввести текст')
        }
        if (data === null) {
            history.push('/auth')
        } else {
            const response = await fetch('http://localhost:4000/api/user', {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: data['login'],
                    password: data['password'],
                    vote: textInput === "" ? value : textInput
                }),
            })
            if (response.ok) {
                return alert("Ваш голос учтен, уходите...")
            }
        }
    }

    return (
        <div className="formContainer">
            <div>Ваша роль в компании?</div>
            <div className="radioBtn">
                <div>
                    <label htmlFor="fronted">
                        <input type="radio" id="fronted" value="fronted" name="role"
                               onChange={() => {
                                   setValue("frontend")
                                   setTextInput("")
                               }}/>
                        Fronted разработчик
                    </label>
                </div>
                <div>
                    <label htmlFor="backend">
                        <input type="radio" id="backend" value="backend" name="role"
                               onChange={() => {
                                   setValue("backend")
                                   setTextInput("")
                               }}/>
                        Backend разработчик
                    </label>
                </div>
                <div>
                    <label htmlFor="another">
                        <input type="radio" id="another" value="another" name="role"
                               onChange={() => setValue("another")}/>
                        Что-то другое
                        <input
                            type="text"
                            style={value !== "another" ? {display: "none"} : null}
                            required={value === "another"}
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <button onClick={handleSubmit} className="submitBtn" disabled={value === null}>
                Отправить
            </button>
        </div>
    );
}

export default Form;
