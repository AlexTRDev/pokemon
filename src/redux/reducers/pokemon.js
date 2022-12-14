import { createSlice } from "@reduxjs/toolkit";
import { getAll, getPokemonById } from "../actions/pokemon";

const initialState = {
  pokemons: [],
  pokemon: {},
  cargando: null,
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando;
    },
  },
  extraReducers: {
    //getAll
    [getAll.pending]: (state) => {
      state.cargando = true;
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false;
      state.pokemons = payload;
    },
    [getAll.rejected]: (state) => {
      state.cargando = true;
    },
    //getPokemonById
    [getPokemonById.pending]: (state) => {
      state.cargando = true;
    },
    [getPokemonById.fulfilled]: (state, { payload }) => {
      state.cargando = false;
      state.pokemon = payload;
    },
    [getPokemonById.rejected]: (state) => {
      state.cargando = true;
    },
  },
});

export default pokemonSlice.reducer;
