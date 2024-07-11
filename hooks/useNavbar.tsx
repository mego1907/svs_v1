import { usePathname } from "next/navigation";
import React, { useState } from "react";

const useNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const navigation = usePathname();
};

export default useNavbar;
