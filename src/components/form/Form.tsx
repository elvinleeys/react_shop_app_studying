import React, { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.scss';

type FormProps = {
  title: string;
  getDataForm: (email: string, password: string) => void;
  firebaseError: string;
}

type Inputs = {
  email: string;
  password: string;
}
// 로그인을 구성하는 컴포넌트이다.
// title과 firebaseError, 그리고 getDataForm이라는 email과 password를 받아오는 메소드를 
// 비구조화 할당을 통해 props로 받아온다.
const Form: FC<FormProps> = ({ title, getDataForm, firebaseError }) => {
  // useForm이라는 훅함수를 통해 register, handleSubmit, formState등을 받아온다.
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    mode: 'onChange'
  })

  // 버튼 클릭을 통해 submit 상태일때 email과 password를 받앙와
  // getDataForm이라는 메소드를 실행시키며
  // reset을 통해 email과 password 데이터를 재환기시킨다.
  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    getDataForm(email, password);
    reset();
  }
  // email입력부분은 필수입력값으로 설정
  const userEmail = {
    required: "필수 필드입니다."
  }
  // password 입력부분은 필수입력값으로 설정
  // 또한 해당 password의 최소 길이는 6글자이고 해당 길이에 못미쳤을시
  // 최소 6자입니다라는 문구를 보일 수 있도록 객체에 정보를 담는다.
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다."
    }
  }

  return (
    // 해당 입력부분이 submit 상태일 때 handleSubmit함수에 onSubmit을 인자로보내
    // email과 password를 전달한다.
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        {/* email 입력부분을 input태그로 표현한 것으로
        useForm의 register를 활용하여 위에서 설정한 userEmail을 전달함으로써
        필수 입력값으로 설정한다. */}
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {/* 만일 에러가 발생한다면 필수 필드입니다를 보여주도록 한다.*/}
        {errors?.email &&
          <div>
            <span className={styles.form_error}>
              {errors.email.message}
            </span>
          </div>
        }
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password &&
          <div>
            <span className={styles.form_error}>
              {errors.password.message}
            </span>
          </div>
        }
      </div>
      <button type='submit'>{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  )
}

export default Form