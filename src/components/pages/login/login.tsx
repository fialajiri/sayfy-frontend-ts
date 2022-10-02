import { Fragment, useState } from "react";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import Button from "../../ui-elements/button";
import { ErrorDoc } from "../../../interfaces/models";
import { useAuth } from "../../../context/auth-context";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import ErrorModal from "../../ui-elements/error-modal";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorDoc[]>([]);
  const { login, logout, isAuthenticated } = useAuth();

  const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setErrors(err as ErrorDoc[]);
    }
  };

  const clearError = () => {
    setErrors([]);
  };

  if (isAuthenticated === undefined) {
    return <LoadingSpinner asOverlay />;
  } else if (isAuthenticated) {
    return (
      <div className="login__container">
        <Button onClick={logout}>Odhlásit se</Button>
      </div>
    );
  } else {
    return (
      <Fragment>
        <ErrorModal errors={errors} onClear={clearError} />
        <div className="login__container">
          <h2 className="heading-tertiary">Přihlašte se</h2>

          <form className="login__form" onSubmit={loginHandler}>
            <FloatingLabelInput
              id="email"
              label="Email"
              type="text"
              placeholder="Email"
              value={email}
              setValue={setEmail}
            />
            <FloatingLabelInput
              id="password"
              label="Heslo"
              type="password"
              placeholder="Heslo"
              value={password}
              setValue={setPassword}
            />
            <div className="login__form--button-container">
              <Button>Přihlásit se</Button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
};

export default LoginPage;
