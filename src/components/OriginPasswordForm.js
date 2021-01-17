import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// Так как ограничений на использование сторонних библиотек не было, использую react-hook-form
import {useForm} from 'react-hook-form';
import '../App.css';

import {setOriginPassword, setOriginTime, setSuccessSubmit} from '../redux/form_reducer';
import {postData} from './scripts';

const OriginPasswordForm = () => {
    const {register, handleSubmit, errors} = useForm();
    const {successSubmit} = useSelector(state => state.form);
    const dispatch = useDispatch();
    let lengthOfPassword = 0;
    let timeStart = 0;
    let timeEnd = 0;

    // Определяет время ввода пароля
    const handleTypingTime = () => {
        // отсчёт времени начинается с введения первого символа в поле пароля
        lengthOfPassword++;
        if (lengthOfPassword === 1) {
            timeStart = new Date();
        }
        else {
            let x = new Date().getTime() - timeStart;
            timeEnd = parseInt(((x / 1000) % 60).toFixed());
        }
    };


    // отправляет пароль и время его ввода и проверку, а так же удачное заполнение формы в store
    const onSubmit = async (data) => {
        const result = await postData(data);
        dispatch(setSuccessSubmit(result.success));
        dispatch(setOriginTime(timeEnd));
        dispatch(setOriginPassword(data.password));
    };

    return (
        <div>
            <h1>Блок 1</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label>Password</label>
                <div className='userInput'>
                    <input
                    placeholder='Input your password'
                    onKeyUp={handleTypingTime}
                    disabled={successSubmit}
                    name='password'
                    type='password'
                    ref={register(
                        {
                            required: 'Password required',
                            minLength: {value: 8, message: 'Password is too short. Minimum password length is 8'}
                        }
                    )}
                />
                    <input type='submit' disabled={successSubmit}/>
                </div>
                {errors.password && (<p className='error'>{errors.password.message}</p>)}
                {successSubmit && (<p className='success'>Password saved</p>)}

            </form>
        </div>
    );
};

export default OriginPasswordForm;