import React, { useState } from 'react';
import { Title, Main, WhiteBoard, FamilyImage, Button } from '../components/board';
import Form from '../components/from';
import { isRequire } from '../components/util/validations';
import BottomNav from '../components/navigation/bottomNav';
import axios from 'axios';
const UpdateAccountPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [errors, setErrors] = useState({});
    const [dataForm, setDataForm] = useState({
        userName: user.userNam|| '',
        budgetLimit: `${user.budgetLimit}`|| '',
        income: `${user.income}`|| '',
        email: `${user.email}`|| '',
        password: '',
    });

    const dataType = [
        { type: 'text', label: 'User Name' },
        { type: 'number', label: 'Budget Limit' },
        { type: 'number', label: 'Income' },
        { type: 'email', label: 'Email' },
        { type: 'password', label: 'Password To Approve' }
    ];

    const onChangeField = (key, value) => {
        setDataForm({
            ...dataForm,
            [key]: value,
        });
    };
    const onUpdate = async () => {
        console.log("dfas")
        try {
          let res = await axios({
            method: 'PUT',
            url: 'http://localhost:8000/api/users/id',
            data: { ...dataForm },
          })
          if (res.data.token) {
            localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);
            window.location='../menu'
          }
        } catch (error) {
            // window.location='../*';
        }
      };

    const onSubmit = async(e) => {
        e.preventDefault();
        const objectErrors=await isRequire((dataForm), dataType);
        setErrors(objectErrors);
        if (Object.keys(errors).length === 0) {
            let error = await onUpdate();
            setErrors(error);
          };
    }
    return (
        <>
            <Main>
                <section>
                    <Title>
                        <div></div>
                        <h1>Update <span>Account!</span></h1>
                    </Title>
                    <FamilyImage></FamilyImage>
                    <WhiteBoard>
                        <Form
                            formData={(dataForm)}
                            typeData={dataType}
                            onFieldChange={onChangeField}
                            errorsForm={errors}
                            onSubmit={onSubmit}>
                            <Button type="submit">
                                Update
                            </Button>
                            <BottomNav />
                        </Form>
                    </WhiteBoard>
                </section>
            </Main>
        </>
    );
};
export default UpdateAccountPage;


