import axios from "axios";

const BASE_URL ='/api';

export const fetchGods=()=>axios.get(`${BASE_URL}/gods`);
export const fetchHeroes=()=> axios.get(`${BASE_URL}/heroes`);
export const fetchMonsters=()=>axios.get(`${BASE_URL}/monsters`);