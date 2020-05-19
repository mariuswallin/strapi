import { reducer } from '../reducer';

describe('ADMIN | CONTAINERS | ProfilePage | reducer', () => {
  describe('DEFAULT_ACTION', () => {
    it('should return the initialState', () => {
      const initialState = {
        test: true,
      };

      expect(reducer(initialState, {})).toEqual(initialState);
    });
  });

  describe('GET_DATA_SUCCEEDED', () => {
    it('should set the data correctly', () => {
      const initialState = {
        formErrors: {},
        initialData: {},
        isLoading: true,
        modifiedData: {},
        showHeaderLoader: true,
      };
      const action = {
        type: 'GET_DATA_SUCCEEDED',
        data: {
          ok: true,
          email: 'test@test.io',
          firstname: 'test',
          lastname: 'testest',
          username: 'test test',
        },
      };

      const expected = {
        formErrors: {},
        initialData: {
          email: 'test@test.io',
          firstname: 'test',
          lastname: 'testest',
          username: 'test test',
        },
        isLoading: false,
        modifiedData: {
          email: 'test@test.io',
          firstname: 'test',
          lastname: 'testest',
          username: 'test test',
        },
        showHeaderLoader: false,
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('ON_CANCEL', () => {
    it('should set the modifiedData with the initialData', () => {
      const initialState = {
        initialData: {
          email: 'john@strapi.io',
          firstname: '',
        },
        modifiedData: {
          email: 'john@strapi.io',
          firstname: 'test',
        },
      };
      const action = {
        type: 'ON_CANCEL',
      };
      const expected = {
        initialData: {
          email: 'john@strapi.io',
          firstname: '',
        },
        modifiedData: {
          email: 'john@strapi.io',
          firstname: '',
        },
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('ON_CHANGE', () => {
    it('should change the data correctly if the inputType is not password', () => {
      const initialState = {
        modifiedData: {
          email: 'john@strapi.io',
          firstname: null,
        },
      };
      const action = {
        type: 'ON_CHANGE',
        keys: 'email',
        inputType: 'email',
        value: 'test123',
      };
      const expected = {
        modifiedData: {
          email: 'test123',
          firstname: null,
        },
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should change the data correctly if the inputType is password', () => {
      const initialState = {
        modifiedData: {
          email: 'john@strapi.io',
          password: 'pwd123',
        },
      };
      const action = {
        type: 'ON_CHANGE',
        keys: 'password',
        inputType: 'password',
        value: 'pwd1234',
      };
      const expected = {
        modifiedData: {
          email: 'john@strapi.io',
          password: 'pwd1234',
        },
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should change the data correctly if the inputType is password and the value is empty', () => {
      const initialState = {
        modifiedData: {
          email: 'john@strapi.io',
          password: 'pwd123',
        },
      };
      const action = {
        type: 'ON_CHANGE',
        keys: 'password',
        inputType: 'password',
        value: '',
      };
      const expected = {
        modifiedData: {
          email: 'john@strapi.io',
        },
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });

    it('should set the username value to null if the value is empty', () => {
      const initialState = {
        modifiedData: {
          email: 'john@strapi.io',
          password: 'pwd123',
          username: 'test',
        },
      };
      const action = {
        type: 'ON_CHANGE',
        keys: 'username',
        inputType: 'text',
        value: '',
      };
      const expected = {
        modifiedData: {
          email: 'john@strapi.io',
          password: 'pwd123',
          username: null,
        },
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('ON_SUBMIT', () => {
    it('should change the showHeaderLoader property to true', () => {
      const initialState = {
        initialData: {},
        modifiedData: {},
        isLoading: false,
        showHeaderLoader: false,
      };
      const expected = {
        initialData: {},
        modifiedData: {},
        isLoading: false,
        showHeaderLoader: true,
      };

      const action = {
        type: 'ON_SUBMIT',
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('ON_SUBMIT_SUCCEEDED', () => {
    it('should set the data correctly', () => {
      const initialState = {
        initialData: {
          ok: true,
        },
        modifiedData: {
          ok: false,
        },
        isLoading: false,
        showHeaderLoader: true,
      };
      const expected = {
        initialData: {
          email: 'test@test.io',
          firstname: 'test',
          lastname: 'testest',
          username: 'test test',
        },
        modifiedData: {
          email: 'test@test.io',
          firstname: 'test',
          lastname: 'testest',
          username: 'test test',
        },
        isLoading: false,
        showHeaderLoader: false,
      };

      const action = {
        type: 'ON_SUBMIT_SUCCEEDED',
        data: {
          ok: true,
          email: 'test@test.io',
          firstname: 'test',
          lastname: 'testest',
          username: 'test test',
        },
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('SET_ERRORS', () => {
    it('Should set the formErrors object correctly', () => {
      const action = {
        type: 'SET_ERRORS',
        errors: {
          test: 'this is required',
        },
      };
      const initialState = {
        formErrors: {},
        modifiedData: {
          ok: true,
        },
      };
      const expected = {
        formErrors: {
          test: 'this is required',
        },
        modifiedData: {
          ok: true,
        },
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });
});