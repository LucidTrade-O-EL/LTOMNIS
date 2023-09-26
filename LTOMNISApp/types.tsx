// types.tsx

export type NavigationPropType = {
    navigation: {
      navigate: (routeName: string, params?: object) => void;
    };
  };
  
  export type User = {
    id: number;
    name: string;
    email: string;
  };
  
  // Add other types as needed
  