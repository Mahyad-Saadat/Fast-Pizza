// userSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';
// Define types for geolocation position
interface Position {
  latitude: number;
  longitude: number;
}
// Define types for the payload returned by the fetchAddress action
interface FetchAddressPayload {
  position: Position;
  address: string;
}

// Define types for the user slice state
interface UserState {
  username: string;
  status: 'idle' | 'loading' | 'error';
  position: Position | null;
  address: string;
  error: string;
}

// Get user's position with a Promise
function getPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Async action to fetch the address using geolocation
export const fetchAddress = createAsyncThunk<FetchAddressPayload, void>(
  'user/fetchAddress',
  async () => {
    // Get the user's geolocation position
    const positionObj = await getPosition();
    const position: Position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // Use the reverse geocoding API to get a descriptive address
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // Return the relevant data as payload for the FULFILLED state
    return { position, address };
  },
);

// Initial state for the user slice
const initialState: UserState = {
  username: '',
  status: 'idle',
  position: null,
  address: '',
  error: '',
};

// Create the user slice with async actions and state management
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchAddress.fulfilled,
        (state, action: PayloadAction<FetchAddressPayload>) => {
          state.position = action.payload.position;
          state.address = action.payload.address;
          state.status = 'idle';
        },
      )
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address. Make sure to fill this field!';
      });
  },
});

// Export actions and reducer
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
