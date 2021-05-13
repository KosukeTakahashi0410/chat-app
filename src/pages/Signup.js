import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../firebase_config'

const Signup = () => {
  // よくわからない、、、これは一体何なんだ、、、
  let history = useHistory()
  // ユーザーネーム
  const [name, setName] = useState("")
  // メールアドレス
  const [email, setEmail] = useState("")
  // パスワード
  const [password, setPassword] = useState("")

  // TODO Takahashi フォームのパラメータのチェックの実装
  /**
   * inputに入力があったときにパラメータを保存する
   * switchでinputのnameで入力値を判断して各stateに値を保存する
   * @param event 
   */
  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
        // 存在しないフォームへの入力なので何もしない
        break
    }
  }

  // ユーザー登録を行う
  const signup = async () => {
    try {
      // ユーザーの登録
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      // ユーザー名を保存
      await firebase.auth().currentUser.updateProfile({ displayName: name })
      // メールの設定
      await firebase.auth().currentUser.sendEmailVerification({
        url: process.env.REACT_APP_LOGIN_REDIRECT_PASS,
        handleCodeInApp: false,
      });
    } catch (err) {
      // TODO エラーハンドリングの実装
      alert(err.message)
    } finally {
      // Success画面へ遷移
      history.push("/success")
    }
  }

  return (
    <div>
      <p>This is Signin page</p>
      <p>Name</p>
      <input type="text" name='name' value={name} onChange={handleChange} />
      <br />
      <p>Email</p>
      <input type="text" name='email' value={email} onChange={handleChange} />
      <br />
      <p>Password</p>
      <input type="text" name='password' value={password} onChange={handleChange} />
      <br />
      <button onClick={signup}>登録する</button>
      <br />
      <Link to="/">Got to Top</Link>
    </div >
  );
}

export default Signup