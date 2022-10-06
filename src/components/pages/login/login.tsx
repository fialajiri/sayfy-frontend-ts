import { Fragment, useState } from "react";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import Button from "../../ui-elements/button";
import { useAuth } from "../../../context/auth-context";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import ErrorModal from "../../ui-elements/error-modal";
import { HttpError } from "../../../models/error-model";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<HttpError | null>(null);
  const { login, logout, isAuthenticated } = useAuth();

  const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err);
    }
  };

  const clearError = () => {
    setError(null);
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
        <ErrorModal error={error} onClear={clearError} />
        <div className="login__container">
          <h3 className="heading-tertiary">Přihlašte se</h3>

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
