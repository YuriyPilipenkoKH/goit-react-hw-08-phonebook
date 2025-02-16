import { createSlice, } from "@reduxjs/toolkit";
import { logIn, logOut,  refreshUser,  register } from "./operations";
import { User } from "../../types/user.model";

export interface AuthState {
  user: User | null
  error: string | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  successMessage: string | null
}

const initialState:AuthState  = {
  user: null,
  error: null,
  token: localStorage.getItem("token-08") || null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false, 
  successMessage:  null
};

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder

      .addCase(register.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.user = payload.user;
        state.successMessage = payload.message;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.successMessage = null;
        state.error = payload as string;
      })

      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        // state.successMessage = null;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        // state.successMessage = null;
        state.error = payload as string;
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = payload as string;
      })

        .addCase(refreshUser.pending, state => {
          state.isRefreshing = true;
          state.error = null;
        })
        .addCase(refreshUser.fulfilled, (state, { payload }) => {
          state.user = payload.user;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, (state, { payload }) => {
          state.isRefreshing = false;
          state.error = payload as string;
        })

      },
    });
    
    export const authReducer = authSlice.reducer;
  
// const handleFulfilled = (state, { payload }) => {
//   state.isFetching = false;
//   state.isLoggedIn = true;
//   state.user = payload.user;
//   state.token = payload.token;
//   state.isRefreshing = false;
// }

// const handlePending = (state) => {
//   state.isFetching = true;
//   state.isRefreshing = true;
// }

// const handleRejected = (state,{ payload }) => {
//   state.isFetching = false;
//   state.error = payload;
// }



        // .addMatcher(
        //   isAnyOf(register.pending, logIn.pending, logOut.pending),
        //   handlePending
        // )
        // .addMatcher(
        //   isAnyOf(register.fulfilled, logIn.fulfilled),
        //   handleFulfilled
        // )
        // .addMatcher(
        //   isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        //   handleRejected
        // );


//     extraReducers: {
//         [register.fulfilled](state, action) {
//           state.user = action.payload.user;
//           state.token = action.payload.token;
//           state.isLoggedIn = true;
//         },
//         [logIn.fulfilled](state, action) {
//           state.user = action.payload.user;
//           state.token = action.payload.token;
//           state.isLoggedIn = true;
//         },
//         [logOut.fulfilled](state) {
//           state.user = { name: null, email: null };
//           state.token = null;
//           state.isLoggedIn = false;
//         },
//         [refreshUser.pending](state) {
//           state.isRefreshing = true;
//         },
//         [refreshUser.fulfilled](state, action) {
//           state.user = action.payload;
//           state.isLoggedIn = true;
//           state.isRefreshing = false;
//         },
//         [refreshUser.rejected](state) {
//           state.isRefreshing = false;
//         },
//       },

// })
