import { useState, useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firebase_config'

const Signup = () => {
  // reactrouterのpushを使うためhistoryのインスタンスを生成
  let history = useHistory()
  // ユーザーネーム
  const [name, setName] = useState('')
  // メールアドレス
  const [email, setEmail] = useState('')
  // パスワード
  const [password, setPassword] = useState('')
  // ユーザーネーム
  const [nameErrorMessage, setNameErrorMessage] = useState('')
  // メールアドレス
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  // パスワード
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  // inputから名前の保存、バリデーション
  const handleNameChange = e => {
    const inputValue = e.target.value
    setName(inputValue)
    if (!inputValue) {
      setNameErrorMessage('ユーザーネームを入力してください')
    } else if (inputValue.length < 5) {
      // 名前が5文字以下の時
      setNameErrorMessage('ユーザーネームは5文字以上必要です')
    } else if (inputValue.length > 50) {
      // 名前が50文字以上の時
      setNameErrorMessage('ユーザーネームは5文字以上必要です')
    } else {
      setNameErrorMessage('')
    }
  }
  // inputからメールの保存、バリデーション
  const handleEmailChange = e => {
    const inputValue = e.target.value
    setEmail(inputValue)
    // 下記リンクからregexは拝借
    // https://qiita.com/metal_kentucky/items/6ee91514ca19edf453df
    // eslint-disable-next-line
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!inputValue) {
      setEmailErrorMessage('メールアドレスを入力してください')
    } else if (!regex.test(inputValue)) {
      setEmailErrorMessage('メールアドレスを正しい形式で入力してください')
    } else {
      setEmailErrorMessage('')
    }
  }
  // inputからパスワードの保存、バリデーション
  const handlePasswordChange = e => {
    const inputValue = e.target.value
    setPassword(inputValue)
    // パスワードは面倒なので半角英数字のみ
    const regex = /^[a-zA-Z0-9]*$/
    if (!inputValue) {
      setPasswordErrorMessage('パスワードを入力してください')
    } else if (inputValue.length < 8) {
      setPasswordErrorMessage('パスワードは8文字以上で入力してください')
    } else if (inputValue.length > 100) {
      setPasswordErrorMessage('パスワードは100文字以下で入力してください')
    } else if (!regex.test(inputValue)) {
      setPasswordErrorMessage('パスワードには半角英数字をのみが使えます')
    } else {
      setPasswordErrorMessage('')
    }
  }

  // ボタンを押下可能か否かを設定する
  const isFormFullfiled = useMemo(() => {
    if (!name || !email || !password) {
      return true
    } else if (nameErrorMessage || emailErrorMessage || passwordErrorMessage) {
      return true
    } else {
      return false
    }
  }, [name, email, password, nameErrorMessage, emailErrorMessage, passwordErrorMessage])

  // ユーザー登録を行う
  const signup = async () => {
    try {
      /* エラーメッセージが正常に返却されるかを確認するときに使ってください
      TODO 最終的には削除すること
      throw {
        response: {
          status: 400
        }
      }
      */
      // ユーザーの登録
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      // ユーザー名を保存
      await firebase.auth().currentUser.updateProfile({ displayName: name })
      // メールの設定
      await firebase.auth().currentUser.sendEmailVerification({
        url: process.env.REACT_APP_LOGIN_REDIRECT_PASS,
        handleCodeInApp: false,
      });
      // successページへ遷移
      history.push("/success")
    } catch (err) {
      // エラーメッセージはuseStateを使うとどうしてもメッセージが送信できないので一時的に変数を置いて対応
      // レスポンスが空の場合もあるので対策
      const statusCode = err.response ? err.response.code : ""
      let newErrorMessage = ""
      switch (statusCode) {
        case 400:
          newErrorMessage = 'Error occured during request.'
          break
        case 404:
          newErrorMessage = 'Error occured during request.'
          break
        default:
          newErrorMessage = 'System error occured.'
          break
      }
      // errorページへ遷移
      history.push({
        pathname: "/error",
        state: { errorMessage: newErrorMessage }
      })
    }
  }

  return (
    <div>
      <p>This is Signin page</p>
      <p>Name</p>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>{nameErrorMessage}</p>
      <br />
      <p>Email</p>
      <input type="text" value={email} onChange={handleEmailChange} />
      <p>{emailErrorMessage}</p>
      <br />
      <p>Password</p>
      <input type="text" value={password} onChange={handlePasswordChange} />
      <p>{passwordErrorMessage}</p>
      <br />
      <button onClick={signup} disabled={isFormFullfiled}>登録する</button>
      <br />
      <Link to="/">Got to Top</Link>
    </div >
  );
}

export default Signup