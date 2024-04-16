import { GoogleAuthProvider } from 'firebase/auth';
import getFirebaseInstances from './fb';
import store from './store';
import firebase from '@firebase/app-compat';
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
    try {
      const result = await getFirebaseInstances().auth.signInWithPopup(provider);
      const user = result.user;
      getFirebaseInstances().db.collection('users').doc(user.email).set({
        name:user.displayName,
        email:user.email,
        lastlogin:firebase.firestore.Timestamp.now()
      },{merge:true}).catch((e)=>{
        console.log(e)
      }).finally(()=>{
        window.location.reload()
        store.commit('setuser',user)
      })
    } catch (error) {
      console.log(error)
      // Handle errors (e.g., display error message)
    }
  };
  
