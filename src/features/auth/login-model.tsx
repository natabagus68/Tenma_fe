import { UserApiRepository } from "@data/api/user-api-repository";
import { UserRepository } from "@domain/repositories/user-repository";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginModel = () => {
  const userRepo = new UserApiRepository();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showHidde, setShowHidde] = useState(true);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const hendleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submitLogin = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await userRepo.login(form.email, form.password);
      await localStorage.setItem("token", response.token);
      navigate("/admin");
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const handleShowHidde = () => setShowHidde(!showHidde);
  const clearError = () => {
    setError(false);
  };

  const checkMe = async () => {
    try {
      setLoading(true);
      const response = await userRepo.check();
      navigate("/admin");
      setLoading(false);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkMe();
  }, []);
  return {
    clearError,
    hendleForm,
    submitLogin,
    handleShowHidde,
    form,
    error,
    showHidde,
    loading,
  };
};
