import { takeLatest } from "redux-saga/effects";
import { ADD_NEW_CATEGORY } from "../constants/categories.constant";
import { addCategoryToFirebase } from "../services/categories.service";


export function* addCategory({payload}){
  yield addCategoryToFirebase(payload)
}
export function* category(){
yield takeLatest(ADD_NEW_CATEGORY,addCategory)
}