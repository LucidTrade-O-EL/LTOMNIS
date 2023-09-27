
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

export type SetCurrentDotActionType = {
  type: string;
  payload: number;
};


export function assertString(data: unknown): asserts data is string {
  if (typeof data !== 'string') {
    throw new Error('Data is not a string');
  }
}