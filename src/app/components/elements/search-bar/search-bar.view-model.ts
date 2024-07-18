import { useCallback } from "react";
import { SearchBarProps } from "./search-bar.types";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "@lib/i18n";

function useSearchBarViewModel({}: SearchBarProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleIncClick = useCallback(() => {
    navigate('/search-page');
  }, []);

  const onSearch = useCallback(() => {
    navigate('/');
  }, []);
  return {
    onSearch,
    handleIncClick,
    t,
  };
}

export default useSearchBarViewModel;
