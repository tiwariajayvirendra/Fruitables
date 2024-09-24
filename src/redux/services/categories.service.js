import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebaseConfig";
export const addCategoryToFirebase=async(category)=>{
console.log(category, "IN SERVICE")
let categoryRef= collection(db,"category")
const docRef = await addDoc(categoryRef, {
    category
  });
  console.log("Document written with ID: ", docRef.id);
}