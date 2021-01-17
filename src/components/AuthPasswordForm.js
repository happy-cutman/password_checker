import React from 'react';
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import '../App.css';
import {postData} from './scripts';
import {setSuccessAuth} from '../redux/form_reducer';

const AuthPasswordForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm();
    const {originPassword} = useSelector(state => state.form);
    const {originTypingTime} = useSelector(state => state.form);
    const {successAuth} = useSelector(state => state.form);
    let lengthOfPassword = 0;
    let timeStart = 0;
    let timeEnd = 0;
    // находит диапазон времени за который был напечатан пароль
    let rangeOfTypingTime = [...Array(originTypingTime).keys()];

    const handleTypingTime = () => {
        lengthOfPassword++;
        if (lengthOfPassword === 1) {
            timeStart = new Date();
        }
        else {
            let x = new Date().getTime() - timeStart;
            timeEnd = parseInt(((x / 1000) % 60).toFixed())
        }
    };

    const onSubmit = async (data) => {
        const result = await postData(data);
        dispatch(setSuccessAuth(result.success))
    };

    return (
        <div>
            <h1>Блок 2</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label>Password</label>
                <div className='userInput'>
                    <input
                    placeholder='Reply your password'
                    onKeyUp={handleTypingTime}
                    name='password'
                    type='password'
                    ref={register({
                        // проверка на совпадение символов и на попадание в диапазон времени
                        validate: value =>
                            (value === originPassword && timeEnd === rangeOfTypingTime.length) || "The passwords do not match"
                    })}
                />
                    <input type="submit"/>
                </div>
                {errors.password && <p className='error'>{errors.password.message}</p>}
                {successAuth && (<p className='success'>Congratulations! You are logged in!</p>)}
            </form>
        </div>
    );
};

export default AuthPasswordForm;