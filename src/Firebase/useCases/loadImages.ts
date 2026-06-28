import {collection, getDocs} from '@firebase/firestore';
import {FirebaseFirestore} from '../Config';

export const loadImages = async () => {
  try {
    const collectionRef = collection(FirebaseFirestore, 'images');
    const querySnapshot = await getDocs(collectionRef);
    return {
      ok: true,
      data: querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})),
    };
  } catch (error) {
    console.error('[loadImages] Firestore error:', JSON.stringify(error));
    return {
      ok: false,
      data: [],
      errorMessage: error && 'Error al cargar las imágenes',
    };
  }
};
